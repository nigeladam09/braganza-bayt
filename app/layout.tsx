import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are self-hosted rather than loaded via next/font/google: that loader
// fetches from Google's CDN at build time, and a stale edge-cached URL there
// fails the build with a 404 that no amount of retrying on our side fixes.
//
// Fraunces is the one exception: it's loaded via a plain <link> to the
// Google Fonts CSS API in the <head> below (not next/font/google), so it's
// fetched by the browser at runtime rather than by Next.js at build time,
// which sidesteps that failure mode. It's used only for the header wordmark.

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
