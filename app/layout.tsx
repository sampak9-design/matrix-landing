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
      </head>
      <body>{children}</body>
    </html>
  )
}
