import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const abril_fatface = localFont({
  src: 'fonts/AbrilFatface-Regular.ttf',
  variable: "--font-abril-fatface",
})

export const metadata: Metadata = {
  title: 'Hugo Deleye',
  description: 'Page personelle - Hugo Deleye',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${abril_fatface.variable}`}>{children}</body>
    </html>
  )
}
