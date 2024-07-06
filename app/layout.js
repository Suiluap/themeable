import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/nav/main-nav";
import Image from "next/image";
import ThemeSwitch from "@/components/theme/theme-switch";
import ThemeProvider from "@/components/theme/theme-provider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 border-b bg-background">
            <div className="mx-8 p-2 flex items-center">
              <Link href="/" className="mr-6">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  className="dark:invert"
                  width={124}
                  height={36}
                  priority
                />
              </Link>
              <MainNav />
              <ThemeSwitch className="ml-auto" />
            </div>
          </header>
          <main className="min-h-[calc(100vh-94px)] py-12 md:py-24 px-3 flex justify-center">
            {children}
          </main>
          <footer className="bg-background border-t p-2">
            <div className="text-sm text-center">
              Themeable Configuration, Paulius Mackevičius
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
