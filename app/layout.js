import { Cookie, Varela_Round, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WelcomeScreen from "@/components/sections/WelcomeScreen";

const varelaRound = Varela_Round({
  variable: "--font-varela-round",
  subsets: ["latin"],
  weight: ["400"],
});

const cookieFont = Cookie({
  variable: "--font-cookie-font",
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${varelaRound.variable} ${cookieFont.variable} antialiased`}
      >
        <WelcomeScreen />
        {children}
      </body>
    </html>
  );
}
