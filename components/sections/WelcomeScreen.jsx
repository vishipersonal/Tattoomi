
import React from 'react'

const sameClassNames = "relative mix-blend-difference w-1/2 h-1/2 flex p-2"

export default function WelcomeScreen() {

    return (
        <div className='fixed top-0 left-0 z-101 rounded-2xl fadeOutDiv w-screen h-screen flex flex-wrap justify-center text-4xl sm:text-7xl font-extrabold items-center'>
            <div className={sameClassNames + " text-white flickeringDivOne justify-end items-end"}>
                Welcome
            </div>
            <div className={sameClassNames + " text-black flickeringDivTwo justify-start items-end"}>
                To
            </div>
            <div className={sameClassNames + " text-black flickeringDivThree rounded-bl-2xl justify-end items-start"}>
                TATT
            </div>
            <div className={sameClassNames + " text-white flickeringDivFour rounded-br-2xl justify-start items-start"}>
                OOMI
            </div>
        </div>
    )
}
