import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import Link from 'next/link'
import React from 'react'

const AccountPage = () => {
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
               <button>Logout</button>
            </div>
         </div>
      </Container>
   )
}

export default AccountPage