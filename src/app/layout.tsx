import "./globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: 'Smart Depot',
  description: 'A Smart E-Commerce Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
