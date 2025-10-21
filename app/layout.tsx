import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Akshit Kotnala - Backend Engineer & Software Developer",
  description:
    "Software Engineer specializing in backend development, microservices, and blockchain technology. Experience at Mercari JP, The Linux Foundation, and HappyFox.",
  keywords: [
    "Akshit Kotnala",
    "Software Engineer",
    "Backend Developer",
    "Golang",
    "Microservices",
    "Blockchain",
    "Hyperledger Fabric",
  ],
  authors: [{ name: "Akshit Kotnala" }],
  creator: "Akshit Kotnala",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshitkotnala.vercel.app",
    title: "Akshit Kotnala - Backend Engineer",
    description:
      "Software Engineer specializing in backend development, microservices, and blockchain technology.",
    siteName: "Akshit Kotnala Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshit Kotnala - Backend Engineer",
    description:
      "Software Engineer specializing in backend development, microservices, and blockchain technology.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://web3forms.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
