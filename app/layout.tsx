import type { Metadata, Viewport } from "next"
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
      <body>{children}</body>
    </html>
  )
}
