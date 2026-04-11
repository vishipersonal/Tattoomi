"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function TattooTopBar() {
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

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`sticky top-0 left-0 w-svw sm:w-screen px-1 py-2 bg-[var(--background)] text-[var(--foreground)] z-10 rounded-b-2xl transition-all duration-300 ease-in ${scrollingDown ? "-translate-y-[125%]" : "translate-y-0"}`}>
            <div className='relative w-full sm:w-1/2 mx-auto shadow-inner shadow-stone-500 rounded-4xl p-2 flex justify-start items-center gap-2 overflow-x-scroll overflow-y-hidden flex-nowrap'>
                <div className='relative shrink-0 p-0.5 bg-transparent rounded-full flex justify-center items-center overflow-hidden shadow shadow-stone-500 mr-2'>
                    <Link href="/" title='Go to Home'>
                        <Image width={75} height={75} priority src="/Logo.jpg" alt="Self Profile" className='relative rounded-full dark:invert' />
                    </Link>
                </div>

                <div title='Artist of the Month' className='relative shrink-0 p-0.5 bg-rose-500 rounded-full flex justify-center items-center overflow-hidden shadow shadow-stone-500'>
                    <Image width={75} height={75} priority src="/Logo.jpg" alt="Self Profile" className='relative rounded-full' />
                </div>

                <div title='Tattoo of the Month' className='relative shrink-0 p-0.5 bg-transparent rounded-full flex justify-center items-center overflow-hidden shadow shadow-stone-500'>
                    <Image width={75} height={75} priority src="/Logo.jpg" alt="Self Profile" className='relative rounded-full' />
                </div>
            </div>
        </div>
    )
}
