"use client";
import React, { useState } from 'react';
import { PiUserLight } from "react-icons/pi";

export default function SignInButton() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSignInForm = () => {
        setIsVisible(true);
    };

    return (
        <div className='sm:absolute sm:-right-28'>
            <button
                onClick={toggleSignInForm}
                className='flex justify-center rounded-xl items-center gap-6 border border-stone-800 text-sm transition-all ease hover:scale-110 p-1'
            >
                <span className='flex justify-center items-center'>
                    <PiUserLight className='absolute font-bold text-3xl rounded-full text-stone-200 bg-stone-500 box-content p-0.5' />
                </span>
                <span>Sign in</span>
                {/* {isLoggedIn ?
                    <span>
                        Sign out
                    </span> : <span>
                        Sign in
                    </span>} */}
            </button>
        </div>
    )
}