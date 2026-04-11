"use client";
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import ArtistSlider from '../ui/ArtistSlider';

export default function OurArtists() {
    const [isFixedTopper, setIsFixedTopper] = useState(true);

    useEffect(() => {
        const ourBoards = document.getElementById("ourboards");
        if (!ourBoards) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFixedTopper(entry.intersectionRatio > 0.3);
            },
            {
                threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0.00 se 1.00 tak threshold
            }
        );

        observer.observe(ourBoards);

        return () => {
            observer.disconnect();
        };
    }, []);

    const [hasAnimatedTopper, setHasAnimatedTopper] = useState(false);

    useEffect(() => {
        if (!isFixedTopper && !hasAnimatedTopper) {
            setHasAnimatedTopper(true);
        }
    }, [isFixedTopper]);


    return (
        <div id='toppers' className={`
            ${isFixedTopper ? 'fixed top-[50vh] -z-60' : ''}
            bg-black text-white w-full -translate-y-5 z-30 pb-24 pt-18 transition-all duration-500 ease-in-out
        `}>
            <div className='p-10 sm:w-2/3 mb-18'>
                <motion.h1
                    className="sm:text-9xl text-6xl text-start font-bold"
                    initial={{ opacity: 0, y: 50 }}
                    animate={!isFixedTopper ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Artists
                </motion.h1>
                <br />
                <motion.p
                    className='sm:text-2xl text-sm font-bold text-start text-stone-700'
                    initial={{ opacity: 0, y: 50 }}
                    animate={!isFixedTopper ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum accusamus consequatur et magni enim deserunt quo doloremque officia quidem illum?
                </motion.p>

            </div>
            <div className='pl-[4vw] overflow-x-hidden '>
                <ArtistSlider isFixedTopper={isFixedTopper} />
            </div>

        </div>
    )
}