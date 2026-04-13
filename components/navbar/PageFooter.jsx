
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { GoArrowRight } from "react-icons/go";

export default function PageFooter() {

    const linkStyles = "transition-all ease-in duration-100 border-b border-rose-600 hover:border-rose-400"
    return (
        <footer className='fixed z-10 bottom-0 left-0 w-screen h-[65vh] not-sm:h-svh overflow-y-scroll overflow-hidden FooterStyles flex flex-col justify-between items-center px-[5vw] py-[7vh]'>

            <nav className="relative sm:w-11/12 pr-1 flex sm:flex-row flex-col justify-between items-center gap-8 sm:gap-0">

                <Link href="#herosection" className='flex justify-center items-center  p-7 rounded-full'>
                    <Image width={100} height={100} src="/navlogo.png" alt="Knowledge Cloud Logo" className='absolute' />
                </Link>

                <div className='relative 2xl:w-1/2 flex justify-between items-center gap-4 flex-wrap text-xl'>
                    <Link className={linkStyles} href="#artists">Artists</Link>
                    <Link className={linkStyles} href="/exploretattoos">Tattoo Designs</Link>
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
                            <Link href="/about" className='hover:font-semibold border-b border-rose-600 transition-all ease-in-out'>About</Link>
                            <Link href="/about#careers" className='hover:font-semibold border-b border-rose-600 transition-all ease-in-out'>Careers</Link>
                            <Link href="/about#contact" className='hover:font-semibold border-b border-rose-600 transition-all ease-in-out'>Contact</Link>
                        </div>

                        <div className='flex flex-col relative justify-start items-start gap-1'>
                            <a href="tel:+918218822812">821-882-2812</a>
                            <a href="mailto:tattoomistudio@gmail.com">tattoomistudio@gmail.com</a>
                            {/* <a href="mailto:tattoomistudio@gmail.com?subject=Tattoo%20Booking&body=Hello%20Team,%0AI%20want%20to%20book%20a%20tattoo.%0APlease%20share%20details.">
                                Book Now
                            </a> */}
                            <address className='text-sm text-wrap border-y'>M-10 3rd Floor, M Block Market, <br /> Greater Kailash, New Delhi</address>
                        </div>
                    </div>

                    <div className='sm:w-1/2 flex justify-end items-center gap-5 text-4xl'>
                        <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </Link>
                        <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </Link>
                        <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </Link>
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