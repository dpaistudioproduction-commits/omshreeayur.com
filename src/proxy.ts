import { NextResponse } from "next/server";
import { isOdgiDevPreviewEnabled } from "@/lib/odgi/access";

/**
 * Next.js 16 Proxy guard scoped strictly to /odgi routes.
 *
 * Public hospital routes and existing API endpoints are excluded by the matcher
 * and are completely unaffected.
 */
export function proxy() {
  if (!isOdgiDevPreviewEnabled()) {
    return new NextResponse(
      "Access Denied. ODGI is unavailable until production authentication is configured.",
      {
        status: 403,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "X-Robots-Tag": "noindex, nofollow, noarchive",
          "Cache-Control": "no-store, private",
        },
      }
    );
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  response.headers.set("Cache-Control", "no-store, private");
  return response;
}

export const config = {
  matcher: ["/odgi", "/odgi/:path*"],
};
