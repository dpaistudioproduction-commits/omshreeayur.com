import Script from "next/script";
import { ClarityScript } from "@/components/analytics/ClarityScript";

export function AnalyticsScripts() {
  // In development, do not load third-party ad/marketing trackers to prevent
  // browser ad-blockers from throwing ERR_BLOCKED_BY_CLIENT console noise.
  if (process.env.NODE_ENV === "development") {
    return null;
  }

  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-4GFE7SYQPF";
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1210872533263374";

  return (
    <>
      {/* Google Tag Manager (container GTM-K5C9V6K manages GA4 G-4GFE7SYQPF & Google Ads AW-954968743) */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});

          if (!window.__gtmLoaded) {
            window.__gtmLoaded = true;
            var f = document.getElementsByTagName('script')[0],
                j = document.createElement('script');
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-K5C9V6K';
            f.parentNode.insertBefore(j, f);
          }
        `}
      </Script>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-K5C9V6K"
          height="0" 
          width="0" 
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Meta Pixel (Omshree pixel: 1210872533263374) */}
      {metaPixelId && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq && f.fbq.callMethod)return;n=f.fbq=f.fbq||function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=n.queue||[];}(window, document);

              if (!window.__fbqInitialized) {
                window.__fbqInitialized = true;
                fbq('init', '${metaPixelId}');
                fbq('track', 'PageView');
              }

              function initMetaPixel() {
                if (window.__fbqScriptLoaded) return;
                window.__fbqScriptLoaded = true;
                var t = document.createElement('script');
                t.async = true;
                t.src = 'https://connect.facebook.net/en_US/fbevents.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(t, s);
              }

              if (typeof window !== 'undefined') {
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(initMetaPixel, { timeout: 2000 });
                } else {
                  setTimeout(initMetaPixel, 1200);
                }
              }
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Microsoft Clarity - Public marketing/content pages only (excludes /contact, /checkout, /odgi) */}
      <ClarityScript />
    </>
  );
}
