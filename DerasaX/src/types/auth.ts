export type UserRole = "Teacher" | "Student" | "Parent" | string;

export interface LoginCredentials {
  userID: string;
  password: string;
}

export interface AuthState {
  token: string | null;
  role: UserRole | null;
  userID: string | null;
}

export interface AuthContextValue extends AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<UserRole | null>;
  logout: () => void;
}
