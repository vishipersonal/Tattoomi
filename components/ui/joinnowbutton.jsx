import React from 'react'

export default function JoinNowButton({toggleJoinForm}) {

    return (

        <>
            <button
                onClick={toggleJoinForm}
                className='px-6 py-3 rounded-full transition-all ease hover:bg-[#dc143c] bg-[#dc143c9c] text-stone-200 hover:text-stone-50 '>
                Boook Appointment
            </button>
            
        </>

    )
}