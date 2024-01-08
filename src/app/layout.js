import "./globals.css"

import { Inter } from "next/font/google"
import Navigator from "@/components/Navigator"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gianluca Bredice Portfolio",
  description: "Welcome to Gianluca Bredice Portfolio!",
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
        <Navigator />
        {children}
      </body>
    </html>
  )
}
