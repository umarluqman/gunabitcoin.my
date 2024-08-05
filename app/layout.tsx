import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <title>Guna Bitcoin</title>
      <meta
        name="description"
        content="Cari Perniagaan Yang Terima Bitcoin di Malaysia"
      />

      <meta property="og:url" content="https://gunabitcoin.my" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Guna Bitcoin" />
      <meta
        property="og:description"
        content="Cari Perniagaan Yang Terima Bitcoin di Malaysia"
      />
      <meta
        property="og:image"
        content="https://opengraph.b-cdn.net/production/images/26b68ef2-f4fd-4021-a166-f0ff2c203114.png?token=uFi8O-Piwn4vqkUoQZy92_aCCMkBMx6YMrIEn39JpZA&height=600&width=1200&expires=33258902041"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="gunabitcoin.my" />
      <meta property="twitter:url" content="https://gunabitcoin.my" />
      <meta name="twitter:title" content="Guna Bitcoin" />
      <meta
        name="twitter:description"
        content="Cari Perniagaan Yang Terima Bitcoin di Malaysia"
      />
      <meta
        name="twitter:image"
        content="https://opengraph.b-cdn.net/production/images/26b68ef2-f4fd-4021-a166-f0ff2c203114.png?token=uFi8O-Piwn4vqkUoQZy92_aCCMkBMx6YMrIEn39JpZA&height=600&width=1200&expires=33258902041"
      />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Providers>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
