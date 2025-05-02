"use client"

import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import useAccountsStore from '@/store/useAccountsStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const AccountPage = () => {
   const { users, logoutAcc } = useAccountsStore();
   const router = useRouter();

   useEffect(() => {
      if(users.length==0){
         router.push("/")
      }
   }, [])
   
   const handleLogout = () => {
      logoutAcc();
      router.push("/")
   }
   return (
      <Container>
         <Breadcrumb current={"My Account"} />
         <div className="my-10">
            <h2 className='uppercase font-bold text-2xl'>my account</h2>
            <p className='text-gray-500'>Manage your account</p>
            <div className='grid grid-cols-4 gap-5 h-20 my-5 text-gray-50'>
               <Link href={"/account/personal"} className='bg-gray-500 hover:bg-gray-600 active:text-cyan-500 rounded flex justify-center items-center'>Personal Information</Link>
               <Link href={"/account/security"} className='bg-gray-500 hover:bg-gray-600 active:text-cyan-500 rounded flex justify-center items-center'>Security</Link>
               <Link href={"/account/orders"} className='bg-gray-500 hover:bg-gray-600 active:text-cyan-500 rounded flex justify-center items-center'>Orders</Link>
            </div>
            <div className="flex justify-end">
               <button onClick={handleLogout} className='bg-gray-500 text-gray-50 hover:bg-gray-600 active:text-gray-500 rounded py-1 px-3'>Logout</button>
            </div>
         </div>
      </Container>
   )
}

export default AccountPage