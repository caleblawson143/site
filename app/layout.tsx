import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#1a3a6c',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'FlowRight Plumbing | Licensed Plumbers You Can Trust',
    template: '%s | FlowRight Plumbing',
  },
  description:
    'FlowRight Plumbing offers fast, reliable, and affordable plumbing services including repairs, installations, drain cleaning, and emergency call-outs. Serving the greater metro area since 2003.',
  keywords: [
    'plumber',
    'plumbing services',
    'emergency plumber',
    'drain cleaning',
    'pipe repair',
    'water heater installation',
    'licensed plumber',
  ],
  authors: [{ name: 'FlowRight Plumbing' }],
  creator: 'FlowRight Plumbing',
  metadataBase: new URL('https://flowrightplumbing.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flowrightplumbing.com',
    siteName: 'FlowRight Plumbing',
    title: 'FlowRight Plumbing | Licensed Plumbers You Can Trust',
    description:
      'Fast, reliable, and affordable plumbing services. Emergency call-outs available 24/7.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FlowRight Plumbing – trusted local plumbers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowRight Plumbing | Licensed Plumbers You Can Trust',
    description:
      'Fast, reliable, and affordable plumbing services. Emergency call-outs available 24/7.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
