import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Street Food Vendor Supply Platform | स्ट्रीट फूड सप्लाई",
  description:
    "Connect street food vendors with raw material suppliers across India. Find the best deals on onions, potatoes, flour, and more from local suppliers in Vizag and Hyderabad.",
  keywords: "street food, vendors, raw materials, suppliers, India, Vizag, Hyderabad, onions, potatoes, flour",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
