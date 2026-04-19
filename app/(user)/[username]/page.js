import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function UserPage() {
  const session = await auth();
  if (!session) {
    redirect("/tattoomisignin")
  }
  return (

    <div>UserPage</div>
  )
}