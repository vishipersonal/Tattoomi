import NavBar from "@/components/navbar/NavBar";
import PageFooter from "@/components/navbar/PageFooter";
import FreeConsultation from "@/components/sections/FreeConsultation";
import HeroSectionDiv from "@/components/sections/HeroSectionDiv";
import OurArtists from "@/components/sections/OurArtists";
import TattooStyles from "@/components/sections/TattooStyles";
import GoToTop from "@/components/ui/GoToTop";


export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <NavBar />
      <HeroSectionDiv />
      <TattooStyles />
      <OurArtists />
      <FreeConsultation />
      <div className="relative -z-50 h-[61vh]"></div>
      <GoToTop />
      <PageFooter />
    </div>
  );
}
