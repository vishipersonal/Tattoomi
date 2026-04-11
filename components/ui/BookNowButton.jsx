import React from 'react'

export default function BookNowButton({toggleJoinForm}) {

    return (

        <>
            <button
                onClick={toggleJoinForm}
                className='px-6 py-3 rounded-full transition-all ease hover:bg-rose-700 bg-rose-600 text-stone-200 hover:text-stone-50 '>
                Boook Appointment
            </button>
            
        </>

    )
}