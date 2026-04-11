
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { GoArrowRight } from "react-icons/go";

export default function PageFooter() {

    const linkStyles = "transition-all ease-in duration-100 border-b border-amber-600 hover:border-amber-400"
    return (
        <footer className='fixed z-10 bottom-0 left-0 w-screen h-[65vh] not-sm:h-full overflow-y-scroll overflow-hidden FooterStyles flex flex-col justify-between items-center px-[5vw] py-[7vh]'>

            <nav className="relative sm:w-11/12 pr-1 flex sm:flex-row flex-col justify-between items-center gap-8 sm:gap-0">

                <Link href="#herosection" className='flex justify-center items-center  p-7 rounded-full'>
                    <Image width={100} height={100} src="/navlogo.png" alt="Knowledge Cloud Logo" className='absolute' />
                </Link>

                <div className='relative 2xl:w-1/2 flex justify-between items-center gap-4 flex-wrap text-xl'>
                    <Link className={linkStyles} href="#artists">Artists</Link>
                    <Link className={linkStyles} href="#designs">Tattoo Designs</Link>
                    <Link className={linkStyles} href="#latest-ink">Latest Ink</Link>
                    <Link className={linkStyles} href="#booking">Book Session</Link>
                    <Link className={linkStyles} href="#flash">Flash Tattoos</Link>
                    <Link className={linkStyles} href="#aftercare">Aftercare Tips</Link>
                </div>
            </nav>

            <div className='sm:w-11/12 w-full flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-5'>

                <div className='sm:w-1/2 w-full mt-7'>
                    <p className='sm:text-4xl text-2xl mb-4'>Subscribe to News Letters</p>
                    <label htmlFor="visiteremail" className='sm:text-2xl text-xl border-b px-0 py-2'>
                        <input type="email" name="visiteremail" id="visiteremail" placeholder='Email address' className='' />
                        <button><GoArrowRight /></button>
                    </label>
                </div>

                <div className='sm:w-1/2 w-full flex sm:flex-row flex-col justify-between sm:text-xl items-center sm:mt-0 mt-5 sm:gap-0 gap-5'>

                    <div className='sm:w-1/2 w-full flex justify-between items-center'>
                        <div className='flex flex-col justify-start items-start gap-2'>
                            <Link href="/about" className='hover:font-semibold border-b border-amber-600 transition-all ease-in-out'>About</Link>
                            <Link href="/about#careers" className='hover:font-semibold border-b border-amber-600 transition-all ease-in-out'>Careers</Link>
                            <Link href="/about#contact" className='hover:font-semibold border-b border-amber-600 transition-all ease-in-out'>Contact</Link>
                        </div>

                        <div className='flex flex-col relative justify-start pb-8 items-start gap-2'>
                            <p className=''>821-882-2812</p>
                            <p className=''>tattoomistudio@gmail.com</p>
                        </div>
                    </div>

                    <div className='sm:w-1/2 flex justify-end items-center gap-5 text-4xl'>
                        <FaXTwitter />
                        <FaFacebook />
                        <FaLinkedin />
                    </div>
                </div>

            </div>

            <div className='sm:w-11/12 text-stone-200 w-full flex mt-5 sm:flex-row flex-col justify-between items-center sm:gap-0 gap-5'>
                <p className='sm:w-1/2 w-full text-start cursor-pointer' title='All rights reserved'>&copy; 2026 &mdash; TATTOOMI</p>
                <div className='flex justify-start gap-2 items-center sm:w-1/2 w-full text-start'>Designed and Developed by <Link href="/" title='Vishal RajDeep' className='transition-all text-stone-800 hover:text-stone-950 bg-stone-200 hover:bg-stone-50 py-1 px-4 rounded-2xl'>Rajdeep</Link> </div>
            </div>
        </footer>
    )
}