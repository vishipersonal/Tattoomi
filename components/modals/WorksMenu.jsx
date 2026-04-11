"use client";
import React, { useState } from 'react'
import { FiAlignCenter, FiX, FiXCircle } from 'react-icons/fi'
import { BsBasket, BsDownload } from "react-icons/bs";
import { GiCottonFlower } from "react-icons/gi";

const buttonClass = "relative rounded-2xl shadow shadow-stone-500 min-w-1/2 py-1 px-4 flex justify-start items-center gap-2 transition-all duration-150 ease-in hover:scale-105 active:scale-95 active:shadow-inner"

const WorksMenu = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal((prev) => !prev)
    }

    return (
        <>
            <button
                onClick={toggleModal}
                className="absolute bottom-1 right-2 z-0 text-2xl shadow shadow-stone-500 rounded-2xl backdrop-blur-2xl p-0.5 transition-all duration-150 ease-in hover:scale-105 active:scale-95 active:shadow-inner"
            >
                <FiAlignCenter />
            </button>
            {showModal &&
                <div className='fixed sm:absolute bottom-0 left-0 w-full bg-[var(--background)] text-[var(--foreground)] z-10 p-2 sm:py-10 rounded-t-2xl'>
                    <div className='relative w-full shadow-inner shadow-stone-500 rounded-2xl p-4 flex flex-col justify-center items-center gap-3'>
                        <button
                            onClick={toggleModal}
                            className={`${buttonClass}`}><FiX />Close</button>
                        <button className={`${buttonClass}`}><GiCottonFlower />Collect</button>
                        <button className={`${buttonClass}`}><BsDownload />Save</button>
                        <button className={`${buttonClass}`}><BsBasket />Book</button>
                        <button className={`${buttonClass}`}><FiXCircle />Report</button>
                    </div>
                </div>
            }
        </>
    )
}

export default WorksMenu