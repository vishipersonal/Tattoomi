import NavBar from "@/components/navbar/NavBar";
import HeroSectionDiv from "@/components/sections/HeroSectionDiv";
import GoToTop from "@/components/ui/GoToTop";
import Link from "next/link";


export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <NavBar />
      <HeroSectionDiv/>
      <Link className="h-screen" href="/tattoos">Go to Tattoos</Link>
      <GoToTop />
    </div>
  );
}
