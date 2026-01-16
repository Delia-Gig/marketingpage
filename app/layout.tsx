import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Summerträff Vaduz',
  description: 'Willkommen zum Summerträff Vaduz - Ein unvergessliches Sommererlebnis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
