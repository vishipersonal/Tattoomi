import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WelcomeScreen from "@/components/sections/WelcomeScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TATTOOMI | India's Premier Tattoo Studio & Artist Hub",
  description: "TATTOOMI is India's leading destination for professional tattoo artistry. Connect with expert tattoo artists, explore unique ink designs, and book your next masterpiece at our creative studio.",
  keywords: ["tattoo studio", "best tattoo artist India", "custom tattoo designs", "tattoo shop", "ink artist", "permanent tattoos", "portrait tattoos", "minimalist tattoos", "tattoo consultation", "tattoomi", "professional tattooing", "tattoo portfolio", "tattoo marketplace", "ink studio"],
  authors: [{ name: "Vishal RajDeep" }],
  creator: "Vishal RajDeep",
  publisher: "Vishal RajDeep",
  metadataBase: new URL("https://tattoomi.in"),

  openGraph: {
    title: "TATTOOMI | Premium Tattoo Studio & Creative Ink",
    description: "Discover world-class tattoo artistry at TATTOOMI. From traditional ink to modern digital designs, connect with India's best tattoo creators and book your session today.",
    url: "https://tattoomi.in",
    siteName: "TATTOOMI",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "TATTOOMI Tattoo Studio Art",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TATTOOMI | Professional Tattoo Studio",
    description: "Your search for the perfect tattoo ends here. TATTOOMI connects you with top-tier tattoo artists and unique custom designs. Get inked by the best.",
    images: ["/logo.jpg"],
    creator: "@RajDeepSolution",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WelcomeScreen />
        {children}
      </body>
    </html>
  );
}
