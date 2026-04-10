"use client";
import React, { useEffect, useState } from 'react'
import { TfiAlignJustify } from "react-icons/tfi";
import { FaCaretUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function TattooStyles() {
    const [isFixed, setIsFixed] = useState(true);

    useEffect(() => {
        const heroSection = document.getElementById("herosection");
        if (!heroSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFixed(entry.intersectionRatio > 0.5);
            },
            {
                threshold: Array.from({ length: 101 }, (_, i) => i / 100),
            }
        );

        observer.observe(heroSection);

        return () => {
            observer.disconnect();
        };
    }, []);


    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!isFixed && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isFixed]);


    return (
        <div id="ourboards" className={`
            ${isFixed ? 'fixed top-[50vh] -z-50' : ''}
            bg-white text-black w-full z-50 pb-24 pt-18 rounded-4xl transition-all duration-500 ease-in-out
        `}>
            <div className='p-10 sm:w-2/3 mb-10'>
                <motion.h1
                    className="sm:text-8xl 2xl:text-9xl text-6xl text-start font-bold"
                    initial={{ opacity: 0, y: 50 }}
                    animate={!isFixed ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Tattoo Styles
                </motion.h1>
                <br />
                <motion.p
                    className='sm:text-2xl text-sm font-bold text-start text-stone-700'
                    initial={{ opacity: 0, y: 50 }}
                    animate={!isFixed ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Tattoos are more than just ink — they are a form of self-expression and storytelling. At our studio, we offer a wide range of tattoo styles crafted by skilled artists, ensuring every design reflects your personality, emotions, and creativity with precision and care.
                </motion.p>
            </div>

            <div className='relative w-full flex flex-wrap justify-center items-center'>

                <div className='sm:w-2/5 w-full flex flex-col justify-canter sm:gap-10 gap-7 items-start sm:px-15 px-10 pt-10 pb-15'>
                    <motion.div
                        className='flex justify-center items-center sm:self-start self-center'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <Image width={125} height={125} src="/Logo.jpg" alt="NIOS Logo" className='' />
                    </motion.div>
                    <motion.h3
                        className='sm:text-5xl text-4xl text-start font-bold'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        Minimal & Fine Line Tattoos
                    </motion.h3>
                    <motion.p
                        className='sm:text-xl text-sm font-bold text-start text-stone-600'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        Perfect for those who love subtle and elegant designs. Fine line tattoos focus on clean, precise lines and minimal detailing, making them ideal for first-timers or anyone looking for a classy, timeless look.
                    </motion.p>
                </div>

                <div className='sm:w-2/5 w-full flex flex-col justify-canter sm:gap-10 gap-7 items-start sm:px-15 px-10 pt-10 pb-15'>
                    <motion.div
                        className='flex flex-col justify-center items-center sm:self-start self-center'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <Image width={125} height={125} src="/Logo.jpg" alt="NIOS Logo" className='' />
                    </motion.div>
                    <motion.h3
                        className='sm:text-5xl text-4xl text-start font-bold'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        Traditional & Neo-Traditional
                    </motion.h3>
                    <motion.p
                        className='sm:text-xl text-sm font-bold text-start text-stone-600'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        Bold outlines, vibrant colors, and iconic designs define traditional tattoos. Neo-traditional takes it further with added depth, modern elements, and artistic creativity for a more dynamic look.
                    </motion.p>
                </div>

                <div className='sm:w-2/5 w-full flex flex-col justify-canter sm:gap-10 gap-7 items-start sm:px-15 px-10 pt-15 pb-10'>
                    <motion.div
                        className='flex flex-col justify-center items-center sm:self-start self-center'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <Image width={125} height={125} src="/Logo.jpg" alt="NIOS Logo" className='' />
                    </motion.div>
                    <motion.h3
                        className='sm:text-5xl text-4xl text-start font-bold'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        Realism & Portrait Tattoos
                    </motion.h3>
                    <motion.p
                        className='sm:text-xl text-sm font-bold text-start text-stone-600'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        These tattoos bring images to life with incredible detail and shading. Whether it’s a loved one’s portrait or a realistic design, our artists ensure lifelike accuracy and depth.
                    </motion.p>
                </div>

                <div className='sm:w-2/5 w-full flex flex-col justify-canter sm:gap-10 gap-7 items-start sm:px-15 px-10 pt-15 pb-10'>
                    <motion.div
                        className='flex flex-col justify-center items-center sm:self-start self-center'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {/* <TfiAlignJustify className='rounded-full text-9xl' /> */}
                        <Image width={125} height={125} src="/Logo.jpg" alt="NIOS Logo" className='' />
                    </motion.div>
                    <motion.h3
                        className='sm:text-5xl text-4xl text-start font-bold'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        Custom & Creative Designs
                    </motion.h3>
                    <motion.p
                        className='sm:text-xl text-sm font-bold text-start text-stone-600'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        Got an idea? We turn your vision into reality. Our artists work closely with you to design unique, personalized tattoos that are meaningful and one-of-a-kind.
                    </motion.p>
                </div>

                <motion.div
                    className='hidden absolute sm:flex flex-col justify-between items-center bg-black w-[1px]'
                    initial={{ opacity: 0, height: "1%" }}
                    whileInView={{ opacity: 1, height: "90%" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <FaCaretUp className='-translate-y-2' />
                    <FaCaretUp className='rotate-180 translate-y-2' />
                </motion.div>

                <motion.div
                    className='hidden absolute sm:flex justify-between items-center bg-black h-[1px]'
                    initial={{ opacity: 0, width: "1%" }}
                    whileInView={{ opacity: 1, width: "90%" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <FaCaretUp className='-translate-x-2 -rotate-90 ' />
                    <FaCaretUp className='rotate-90 translate-x-2' />
                </motion.div>

            </div>
        </div>
    )
}