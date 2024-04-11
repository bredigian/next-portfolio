import "./globals.css"

import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google"
import Navigator from "@/components/Navigator"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gianluca Bredice Vivarelli",
  description: "Welcome to Gianluca Bredice Vivarelli Portfolio!",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex xs:flex-col sm:flex-row h-screen items-center lg:overflow-hidden`}
      >
        <Analytics />
        <Suspense>
          <Navigator />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
