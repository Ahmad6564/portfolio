import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Muhammad Ahmad | Computer Engineering Student & ML Engineer",
  description:
    "Portfolio of Muhammad Ahmad, a Computer Engineering Student specializing in Machine Learning, Deep Learning, Artificial Intelligence, and Embedded Systems.",
  keywords: [
    "Muhammad Ahmad",
    "Computer Engineering",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "AI",
    "PyTorch",
    "TensorFlow",
    "Python",
    "C++",
    "FPGA",
    "GANs",
    "Transformers",
    "Computer Vision",
    "NLP",
  ],
  authors: [{ name: "Muhammad Ahmad" }],
  creator: "Muhammad Ahmad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmadportfolio.com",
    title: "Muhammad Ahmad | Computer Engineering Student & ML Engineer",
    description:
      "Portfolio of Muhammad Ahmad, a Computer Engineering Student specializing in Machine Learning, Deep Learning, Artificial Intelligence, and Embedded Systems.",
    siteName: "Muhammad Ahmad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ahmad | Computer Engineering Student & ML Engineer",
    description:
      "Portfolio of Muhammad Ahmad, a Computer Engineering Student specializing in Machine Learning, Deep Learning, Artificial Intelligence, and Embedded Systems.",
    creator: "@ahmadkhalid",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}


import './globals.css'