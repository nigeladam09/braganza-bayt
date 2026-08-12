import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are self-hosted rather than loaded via next/font/google: that loader
// fetches from Google's CDN at build time, and a stale edge-cached URL there
// fails the build with a 404 that no amount of retrying on our side fixes.

const display = localFont({
  src: "./fonts/BricolageGrotesque-Variable.woff2",
  weight: "200 800",
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: "./fonts/PlusJakartaSans-Variable.woff2",
  weight: "200 800",
  variable: "--font-body",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/IBMPlexMono-Regular.woff2",
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

const script = localFont({
  src: "./fonts/Caveat-Variable.woff2",
  weight: "400 700",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Braganza Bayt — Book Your Stay Direct",
  description:
    "A family-run cluster of five stylish rooms in Candolim, North Goa. Book direct — no commission, no middleman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${script.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
