import { auth } from '@/auth';
import RegistrationForm from '@/components/forms/RegistrationForm';
import SignInForm from '@/components/forms/signinform'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function TattoomiRegistrationPage() {
  const session = await auth();
    if (session) {
      redirect("/")
    }
  return (
    <div className="relative w-svw sm:w-screen p-2 z-0">

      <div className='relative w-full shadow-inner shadow-stone-500 rounded-4xl overflow-x-hidden p-2 flex flex-col justify-center items-center'>

        <div className='relative flex justify-center items-center w-full max-w-2xs my-5'>
          <h1 className='relative text-5xl sm:text-6xl text-shadow-sm tracking-widest text-shadow-stone-500 border-b'>Cottonfall</h1>
          <p className='absolute bottom-0 right-0 text-sm translate-x-1/8 italic font-light text-shadow-sm text-shadow-stone-500 translate-y-full'>Where Creativity Meets Opportunity</p>
        </div>

        <div className='relative w-full flex justify-center items-center my-2'>
          <RegistrationForm />
        </div>

        <div className='relative w-1/2 max-w-fit text-center'>
          <h2 className='relative tracking-widest font-medium border-b'>RajDeep</h2>
          <span className='text-xs mx-2'>About</span>
          <span className='text-xs mx-2'>Help</span>
        </div>

      </div>

    </div>
  )
}