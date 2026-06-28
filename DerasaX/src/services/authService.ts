import axios from "axios";
import type { LoginCredentials } from "../types/auth";

const API_BASE_URL = import.meta.env.DEV
  ? ""
  : "http://derasax.runasp.net";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

function extractToken(data: unknown): string | null {
  if (typeof data === "string" && data.trim()) {
    return data;
  }

  if (!data || typeof data !== "object") {
    return null;
  }

  const record = data as Record<string, unknown>;
  const candidates = [
    record.token,
    record.Token,
    record.accessToken,
    record.AccessToken,
    record.jwt,
    record.Jwt,
  ];

  for (const candidate of candidates) {
    if (typeof candidate === "string" && candidate.trim()) {
      return candidate;
    }
  }

  if (record.data && typeof record.data === "object") {
    return extractToken(record.data);
  }

  return null;
}

function extractRole(data: unknown): string | null {
  if (!data || typeof data !== "object") {
    return null;
  }

  const record = data as Record<string, unknown>;
  const candidates = [
    record.role,
    record.roles,
    record.Role,
    record.Roles,
    record.userRole,
  ];

  for (const candidate of candidates) {
    if (typeof candidate === "string" && candidate.trim()) {
      return candidate;
    }

    if (Array.isArray(candidate) && candidate.length > 0) {
      return String(candidate[0]);
    }
  }

  return null;
}

export function getAuthErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    if (error.code === "ERR_NETWORK") {
      return "Unable to reach the server. Please try again.";
    }

    const data = error.response?.data;

    if (typeof data === "string" && data.trim()) {
      return data;
    }

    if (data && typeof data === "object") {
      const record = data as Record<string, unknown>;
      const message = record.message ?? record.title ?? record.error;

      if (typeof message === "string" && message.trim()) {
        return message;
      }
    }

    if (error.response?.status === 401) {
      return "Invalid User ID or password.";
    }
  }

  return "Invalid User ID or password.";
}

export async function loginRequest(
  credentials: LoginCredentials
): Promise<{ token: string; role: string | null }> {
  const response = await apiClient.post("/api/Account/login", {
    userID: credentials.userID,
    password: credentials.password,
  });

  const data = response.data;

  if (
    data &&
    typeof data === "object" &&
    (data as Record<string, unknown>).isAuthenticated === false
  ) {
    const message = (data as Record<string, unknown>).message;
    throw new Error(
      typeof message === "string" && message.trim()
        ? message
        : "UserID or Password is incorrect"
    );
  }

  const token = extractToken(data);

  if (!token) {
    throw new Error("Login succeeded but no token was returned.");
  }

  return {
    token,
    role: extractRole(data),
  };
}

export function setAuthHeader(token: string | null): void {
  if (token) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common.Authorization;
  }
}
