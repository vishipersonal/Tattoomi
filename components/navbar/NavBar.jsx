"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SignInButton from '../ui/signinbutton';


export default function Navbar() {
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkStyles = "transition-all ease-in duration-100 border-b border-transparent hover:border-amber-400";

  return (
    <nav className={`fixed top-2 border border-stone-800 w-3/4 sm:w-1/2 z-100 pr-1 rounded-l-4xl rounded-r-2xl text-stone-500 font-bold flex justify-between items-center transition-all duration-300 ease-in-out bg-[#12121221] ${scrollingDown ? "-translate-y-[125%]" : "translate-y-0"}`}>
      <Link href="/" className='flex justify-center items-center bg-background p-6 rounded-full'>
        <Image width={50} height={50} src="/navlogo.png" alt="Knowledge Cloud Logo" className='absolute transition-all hover:scale-110' />
      </Link>
      <div className='hidden relative sm:flex justify-center items-center gap-3'>
        <Link className={linkStyles} href="/#faculty">Tattoos</Link>
        <Link className={linkStyles} href="/#courses">Artists</Link>
        <Link className={linkStyles} href="/#quizz">About</Link>
      </div>
      <SignInButton />
    </nav>
  );
}