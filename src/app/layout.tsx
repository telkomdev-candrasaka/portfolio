import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/layout/theme-provider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Candra Saka Rahardian | Backend Engineer",
  description:
    "Backend Engineer portfolio focused on scalable APIs, event-driven systems, reporting pipelines, data workflows, and production backend architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-svh bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider>
          <SiteHeader />
          <div className="min-h-[calc(100svh-4rem)]">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
