"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import JoinNowButton from '../ui/joinnowbutton';

export default function HeroSectionDiv() {
    const [showForm, setShowForm] = useState(false);

    const toggleJoinForm = () => {
        setShowForm(true);
    };

    return (
        <div id="herosection" className="flex flex-col sm:flex-row w-full bg-background sm:h-screen justify-between items-center px-[5vw] py-[10vh] z-60">
            <div className='relative py-[5vh] px-[5vw] fadeInAnimation z-50'>
                <p className='text-5xl sm:text-7xl my-5'>
                    Find the <span className='text-[#dc143c]'>Best</span> <br />
                    <span className='text-[#00008B]'> Tattoos </span> for <br />
                    Your <span className='text-[#FDC5B1]'>body</span>
                </p>
                <p className='text-xl my-5 tracking-wider'>Because tattoos are forever</p>
                <JoinNowButton toggleJoinForm={toggleJoinForm} />
            </div>

            <div className=' flex justify-center items-end sm:border border-y h-full p-10 sm:p-15 rounded-2xl'>
                <h1 className='text-5xl 2xl:text-7xl font-bold'>
                    TATTOOMI
                </h1>
            </div>

            <Image width={400} height={400} src="/navlogo.png" alt="Digital Brain Image" className='sm:absolute left-1/2 top-[20vh]' />

            <div className='fadeInAnimationTwo opacity-0'>
                <div className='my-10'>
                    <p className='text-7xl my-5'>
                        10k+
                    </p>
                    <p>
                        Designs
                    </p>
                </div>
                <hr />
                <div className='my-10'>
                    <p className='text-7xl my-5'>
                        20+
                    </p>
                    <p>
                        Artists
                    </p>
                </div>
            </div>
        </div>
    )
}