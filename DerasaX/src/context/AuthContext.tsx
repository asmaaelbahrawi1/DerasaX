import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import axios from "axios";
import {
  getAuthErrorMessage,
  loginRequest,
  setAuthHeader,
} from "../services/authService";
import type { AuthContextValue, AuthState, LoginCredentials } from "../types/auth";
import {
  getRoleFromToken,
  getUserIDFromToken,
  isTokenExpired,
  TOKEN_STORAGE_KEY,
} from "../utils/jwt";

const AuthContext = createContext<AuthContextValue | null>(null);

function buildAuthState(token: string | null): AuthState {
  if (!token || isTokenExpired(token)) {
    return {
      token: null,
      role: null,
      userID: null,
    };
  }

  return {
    token,
    role: getRoleFromToken(token),
    userID: getUserIDFromToken(token),
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    role: null,
    userID: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    const nextState = buildAuthState(storedToken);

    if (storedToken && !nextState.token) {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
    }

    setAuthState(nextState);
    setAuthHeader(nextState.token);
    setIsLoading(false);
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      const { token, role: responseRole } = await loginRequest(credentials);
      const nextState = buildAuthState(token);
      const role = responseRole ?? nextState.role;

      if (!nextState.token || !role) {
        throw new Error("Unable to read authentication details from token.");
      }

      localStorage.setItem(TOKEN_STORAGE_KEY, token);
      setAuthState({ ...nextState, role });
      setAuthHeader(token);

      return role;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(getAuthErrorMessage(error));
      }

      if (error instanceof Error) {
        throw error;
      }

      throw new Error(getAuthErrorMessage(error));
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    setAuthState({
      token: null,
      role: null,
      userID: null,
    });
    setAuthHeader(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      ...authState,
      isAuthenticated: Boolean(authState.token),
      isLoading,
      login,
      logout,
    }),
    [authState, isLoading, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
