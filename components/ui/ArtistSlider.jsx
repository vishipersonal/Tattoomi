import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion";

export default function ArtistSlider({isFixedTopper}) {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const interval = setInterval(() => {
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            if (scrollContainer.scrollLeft + 10 >= maxScrollLeft) {
                // Scroll back to start if reached end
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Scroll forward smoothly
                scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }, 2000); // every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            // ref={scrollRef}
            className='relative z-0 flex justify-start items-center sm:gap-15 gap-4 overflow-y-hidden overflow-x-scroll'>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={!isFixedTopper ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                className='relative w-[65vw] h-[55vh] topperCard flex flex-col overflow-hidden rounded-4xl justify-between items-start shrink-0 text-shadow-xs text-shadow-background'>
                <div
                    style={{ backgroundImage: 'url(/topperstudent2.jpg)' }}
                    className='absolute z-0 w-full h-full topperimageBg rounded-4xl cursor-pointer'
                ></div>

                <div className='relative z-10 sm:text-3xl text-2xl m-10 border p-2 rounded-4xl pointer-events-none'>
                    <h2>Artists</h2>
                </div>

                <div className='relative z-10 m-10 sm:w-[60%] pointer-events-none'>
                    <h1 className='sm:text-4xl text-3xl font-bold mb-4'>Artist Name</h1>
                    <p className='sm:text-xl text-xs'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse quos exercitationem beatae saepe explicabo.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={!isFixedTopper ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                className='relative w-[65vw] h-[55vh] topperCard flex flex-col overflow-hidden rounded-4xl justify-between items-start shrink-0 text-shadow-xs text-shadow-background'>
                <div
                    style={{ backgroundImage: 'url(/topperstudent.jpg)' }}
                    className='absolute z-0 w-full h-full topperimageBg rounded-4xl cursor-pointer'
                ></div>

                <div className='relative z-10 sm:text-3xl text-2xl m-10 border p-2 rounded-4xl pointer-events-none'>
                    <h2>Artists</h2>
                </div>

                <div className='relative z-10 m-10 sm:w-[60%] pointer-events-none'>
                    <h1 className='sm:text-4xl text-3xl font-bold mb-4'>Artist Name</h1>
                    <p className='sm:text-xl text-xs'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse quos exercitationem beatae saepe explicabo.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={!isFixedTopper ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                className='relative w-[65vw] h-[55vh] topperCard flex flex-col overflow-hidden rounded-4xl justify-between items-start shrink-0 text-shadow-xs text-shadow-background'>
                <div
                    style={{ backgroundImage: 'url(/topperstudent2.jpg)' }}
                    className='absolute z-0 w-full h-full topperimageBg rounded-4xl cursor-pointer'
                ></div>

                <div className='relative z-10 sm:text-3xl text-2xl m-10 border p-2 rounded-4xl pointer-events-none'>
                    <h2>Artists</h2>
                </div>

                <div className='relative z-10 m-10 sm:w-[60%] pointer-events-none'>
                    <h1 className='sm:text-4xl text-3xl font-bold mb-4'>Artist Name</h1>
                    <p className='sm:text-xl text-xs'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse quos exercitationem beatae saepe explicabo.
                    </p>
                </div>
            </motion.div>

        </div>
    )
}