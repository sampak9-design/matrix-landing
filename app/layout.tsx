import type { Metadata, Viewport } from "next"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "MATRIX - Inteligência Artificial",
  description: "Descubra a verdade. Entre na Matrix.",
  applicationName: "MATRIX",
  openGraph: {
    title: "MATRIX - Inteligência Artificial",
    description: "O conhecimento que eles não querem que você tenha.",
    locale: "pt_BR",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          src="https://track-production-cd03.up.railway.app/static/tracker.js"
          data-channel-id="8"
          data-channel-username=""
          data-projeto="4e025ca1-7818-4557-b618-6c1ede751758"
          strategy="beforeInteractive"
        />
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1550777703294189');
fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        {/* Meta Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1550777703294189&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
