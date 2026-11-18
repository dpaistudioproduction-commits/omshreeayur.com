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
      {/* Google Tag Manager - Defer to idle time to eliminate hydration blocking */}
      <Script id="google-tag-manager" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K5C9V6K');
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

      {/* Google Analytics 4 - Activates only when NEXT_PUBLIC_GA_ID is set */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel (Omshree pixel: 1210872533263374) */}
      {metaPixelId && (
        <>
          <Script id="meta-pixel" strategy="lazyOnload">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq && f.fbq.callMethod)return;n=f.fbq=f.fbq||function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=n.queue||[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
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
