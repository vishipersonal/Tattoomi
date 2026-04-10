"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { GiCrosshairArrow } from 'react-icons/gi'

export default function GoToTop() {
    const [scrollingDown, setScrollingDown] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
                setScrollingDown(true); // Hide navbar when scrolling down
            } else {
                setScrollingDown(false); // Show navbar when scrolling up
            }

            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <a title='Go to Top' href="#" className={`fixed bottom-[3vh] right-[1.5vw] z-100 transition-all ease hover:scale-105 hover:bg-stone-950 hover:text-stone-50 text-stone-200 bg-stone-800 box-content p-1 rounded-full ${scrollingDown ? "translate-y-0" : "translate-y-[100vh]"}`}>
            <GiCrosshairArrow className='text-xl -rotate-135' />
        </a>
    )
}