import { Inter } from 'next/font/google'
import './globals.css'
import MainNav from '@/components/nav/main-nav'
import Image from 'next/image'
import ThemeSwitch from '@/components/theme/theme-switch'
import ThemeProvider from '@/components/theme/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vercel'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <header className="sticky top-0 border-b">
            <div className="mx-8 p-2 flex items-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                className="dark:invert mr-6"
                width={124}
                height={36}
                priority
              />
              <MainNav/>
              <ThemeSwitch className="ml-auto"/>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
