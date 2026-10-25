import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://rise-clinical-services.daisyaurora.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RISE Clinical Services | Virtual Therapy in Connecticut",
  description:
    "Compassionate virtual therapy for teens 13+, adults, and families across Connecticut. Services available in English and Spanish.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RISE Clinical Services",
    description:
      "Compassionate virtual therapy for teens 13+, adults, and families across Connecticut. Services available in English and Spanish.",
    url: siteUrl,
    siteName: "RISE Clinical Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1254,
        height: 1254,
        alt: "RISE Clinical Services, LLC logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RISE Clinical Services",
    description:
      "Compassionate virtual therapy for teens 13+, adults, and families across Connecticut.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
