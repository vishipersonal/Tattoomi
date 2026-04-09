import React from 'react'

export default function WelcomeScreen() {
    return (
        <div className='fixed top-0 left-0 z-101 rounded-2xl fadeOutDiv w-screen h-screen flex flex-wrap justify-center text-4xl sm:text-7xl font-extrabold items-center'>
            <div className="relative mix-blend-difference text-white w-1/2 h-1/2 flickeringDivOne flex justify-end items-end p-2">
                Welcome
            </div>
            <div className="relative mix-blend-difference text-black w-1/2 h-1/2 flickeringDivTwo flex justify-start items-end p-2">
                To
            </div>
            <div className="relative mix-blend-difference text-black w-1/2 h-1/2 flickeringDivThree rounded-bl-2xl flex justify-end items-start p-2">
                TATT
            </div>
            <div className="relative mix-blend-difference text-white w-1/2 h-1/2 flickeringDivFour rounded-br-2xl flex justify-start items-start p-2">
                OOMI
            </div>
        </div>
    )
}
