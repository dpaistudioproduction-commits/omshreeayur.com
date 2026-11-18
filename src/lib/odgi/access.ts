/**
 * Server-only access policy for Omshree Digital Growth Intelligence (ODGI).
 *
 * STAGE 1 SECURITY POLICY:
 * - Production and any Vercel-hosted deployment MUST unconditionally deny access
 *   to /odgi until real server-side authentication is implemented in a later stage.
 * - Local preview is permitted ONLY when running locally in Node development mode
 *   (never on Vercel) AND the server-only environment variable
 *   ODGI_DEV_PREVIEW is explicitly set to "true".
 * - Never read or rely on NEXT_PUBLIC_* variables for access control.
 */
export function isOdgiDevPreviewEnabled(): boolean {
  if (process.env.NODE_ENV !== "development") {
    return false;
  }

  if (
    process.env.VERCEL === "1" ||
    Boolean(process.env.VERCEL_ENV) ||
    Boolean(process.env.VERCEL_URL)
  ) {
    return false;
  }

  return process.env.ODGI_DEV_PREVIEW === "true";
}
