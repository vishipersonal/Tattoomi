import NavBar from "@/components/navbar/NavBar";
import HeroSectionDiv from "@/components/sections/HeroSectionDiv";
import Link from "next/link";


export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <NavBar />
      <HeroSectionDiv/>
      <Link className="h-screen" href="/tattoos" cla>Go to Tattoos</Link>
    </div>
  );
}
