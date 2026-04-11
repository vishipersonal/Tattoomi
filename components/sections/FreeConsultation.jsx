"use client";
import React from 'react'
import { motion } from "framer-motion";

export default function FreeConsultation() {

    return (
        <div id="consultation" className="relative bg-white -translate-y-5 text-black sm:w-screen w-svw z-20 pb-24 pt-18 rounded-b-4xl">
            <div className='p-10 sm:w-2/3 mb-10'>
                <motion.h1
                    className="sm:text-8xl 2xl:text-9xl text-5xl text-start font-bold"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    Free Consultation
                </motion.h1>
                <br />
                <motion.p
                    className='sm:text-2xl text-md font-bold text-start text-stone-700'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    Get expert advice for your tattoo idea – design, placement, and style. No commitment, just guidance to help you decide!
                </motion.p>
            </div>
        </div>
    )
}