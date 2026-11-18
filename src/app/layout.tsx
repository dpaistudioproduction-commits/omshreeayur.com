import type { Metadata } from "next";
import { Lato, Philosopher } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const philosopher = Philosopher({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.omshreeayur.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${philosopher.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Early Analytics Queue Initialization: Guarantees zero dropped events before async scripts load */}
        <script
          id="analytics-early-stubs"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = window.gtag || gtag;

              if (!window.fbq) {
                var n = window.fbq = function(){
                  n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!window._fbq) window._fbq = n;
                n.push = n;
                n.version = '2.0';
                n.queue = [];
              }
            `,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
