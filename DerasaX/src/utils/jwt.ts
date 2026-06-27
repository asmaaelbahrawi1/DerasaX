import type { UserRole } from "../types/auth";

const TOKEN_STORAGE_KEY = "token";

const ROLE_CLAIM_KEYS = [
  "role",
  "roles",
  "Role",
  "Roles",
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/role",
];

const USER_ID_CLAIM_KEYS = [
  "userID",
  "userId",
  "sub",
  "nameid",
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier",
];

export { TOKEN_STORAGE_KEY };

export function decodeJwtPayload(
  token: string
): Record<string, unknown> | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
    const decoded = atob(padded);

    return JSON.parse(decoded) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function readClaim(
  payload: Record<string, unknown>,
  keys: string[]
): string | null {
  for (const key of keys) {
    const value = payload[key];

    if (typeof value === "string" && value.trim()) {
      return value;
    }

    if (typeof value === "number") {
      return String(value);
    }

    if (Array.isArray(value) && value.length > 0) {
      return String(value[0]);
    }
  }

  return null;
}

export function getRoleFromToken(token: string): UserRole | null {
  const payload = decodeJwtPayload(token);
  if (!payload) return null;

  const fromKnownKeys = readClaim(payload, ROLE_CLAIM_KEYS);
  if (fromKnownKeys) return fromKnownKeys;

  for (const [key, value] of Object.entries(payload)) {
    if (!key.toLowerCase().includes("role")) continue;

    if (typeof value === "string" && value.trim()) {
      return value;
    }

    if (typeof value === "number") {
      return String(value);
    }

    if (Array.isArray(value) && value.length > 0) {
      return String(value[0]);
    }
  }

  return null;
}

export function getUserIDFromToken(token: string): string | null {
  const payload = decodeJwtPayload(token);
  if (!payload) return null;

  return readClaim(payload, USER_ID_CLAIM_KEYS);
}

export function isTokenExpired(token: string): boolean {
  const payload = decodeJwtPayload(token);
  if (!payload || typeof payload.exp !== "number") return false;

  return payload.exp * 1000 <= Date.now();
}

export function getRouteForRole(role: UserRole | null): string | null {
  const normalized = role?.toLowerCase();

  if (normalized === "teacher") return "/dashboard";
  if (normalized === "student") return "/student-coming-soon";
  if (normalized === "parent") return "/parent-dashboard";

  return null;
}
