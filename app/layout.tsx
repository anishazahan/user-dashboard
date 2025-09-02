import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ErrorBoundary } from "@/components/error-boundary"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dashboard Pro - Modern User Management",
  description: "Professional dashboard application with advanced user management, search, and analytics features",
  generator: "Dashboard Pro",
  keywords: ["dashboard", "user management", "analytics", "modern", "responsive"],
  authors: [{ name: "Dashboard Pro Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#15803d",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>{children}</ErrorBoundary>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
