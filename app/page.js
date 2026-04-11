import NavBar from "@/components/navbar/NavBar";
import PageFooter from "@/components/navbar/PageFooter";
import FreeConsultation from "@/components/sections/FreeConsultation";
import HeroSectionDiv from "@/components/sections/HeroSectionDiv";
import OurArtists from "@/components/sections/OurArtists";
import TattooStyles from "@/components/sections/TattooStyles";
import GoToTop from "@/components/ui/GoToTop";

export const metadata = {
  title: "TATTOOMI | Home of India's Premier Tattoo Studio & Artist Hub",
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
        url: "/Logo.jpg",
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
    images: ["/Logo.jpg"],
    creator: "@RajDeepSolution",
  },
};

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <NavBar />
      <HeroSectionDiv />
      <TattooStyles />
      <OurArtists />
      <FreeConsultation />
      <div className="relative -z-50 h-[61vh] not-sm:h-screen"></div>
      <GoToTop />
      <PageFooter />
    </div>
  );
}
