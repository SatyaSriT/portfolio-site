import type { Metadata } from "next";
import { Caveat, Inter, Delicious_Handrawn, Fredoka, Sora } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["700"],
});

const deliciousHandrawn = Delicious_Handrawn({
  variable: "--font-delicious-handrawn",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://satyasri.dev"),
  title: "Satya Sri — Senior Frontend Engineer",
  description: "Portfolio of Satya Sri, Senior Frontend Engineer",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Satya Sri — Senior Frontend Engineer",
    description: "Portfolio of Satya Sri, Senior Frontend Engineer",
    url: "https://satyasri.dev",
    siteName: "Satya Sri",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caveat.variable} ${inter.variable} ${deliciousHandrawn.variable} ${fredoka.variable} ${sora.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
