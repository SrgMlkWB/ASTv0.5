import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ASSIST',
  description: 'ASSIST Troubleshooting Application',
  manifest: '/manifest.json',
  themeColor: '#F18841',
  viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F18841" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background pb-20">
            <main className="container mx-auto px-4 py-6">
              {children}
            </main>
            <Navbar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
