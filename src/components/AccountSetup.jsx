"use client"

import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import useAccountsStore from '@/store/useAccountsStore'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { BsBag, BsLock, BsPerson, BsUnlock } from 'react-icons/bs'
import { HiOutlineLogout } from 'react-icons/hi'

const AccountSetup = ({ setup }) => {
   const [ state, setState ] = useState(setup);
   const [ oldPassword, setOldPassword ] = useState("")
   const [ newPassword, setNewPassword ] = useState("")
   const [ confirmNewPassword, setConfirmNewPassword ] = useState("")
   const { users, changePassword } = useAccountsStore();
   const user = users[0];

   const handlePersonal = () => {
      setState("personal")
   }
   const handleSecurity = () => {
      setState("security")
   }
   const handleOrders = () => {
      setState("orders")
   }

   const handleOldPassword = (e) => {
      setOldPassword(e.target.value);
   }
   const handleNewPassword = (e) => {
      setNewPassword(e.target.value);
   }
   const handleConfirmNewPassword = (e) => {
      setConfirmNewPassword(e.target.value);      
   }

   const handleChangePassword = () => {
      if(user.password==oldPassword && newPassword==confirmNewPassword && newPassword!=oldPassword) {
         changePassword(user.email,newPassword)
      } else {
         toast.error("wrong password")
      }
   }
   return (
      <Container>
         <Breadcrumb links={[{name: "My Account", path: "/account"}]} current={setup} />
         <div className="my-10">
            <h2 className='uppercase font-bold text-2xl'>my account</h2>
            <p className='text-gray-500'>Manage your personal details</p>
            <div className="grid grid-cols-3 gap-5 my-5">
               <div className="h-80 flex flex-col gap-1 border border-gray-300 rounded p-3">
                  <div className='grow'>
                     <p onClick={handlePersonal} className='flex gap-1 items-center hover:bg-gray-100 py-1 px-2 rounded text-gray-500 active:text-cyan-500'>
                        <BsPerson /><span className='capitalize'>personal information</span>
                     </p>
                     <p onClick={handleSecurity} className='flex gap-1 items-center hover:bg-gray-100 py-1 px-2 rounded text-gray-500 active:text-cyan-500'>
                        <BsLock /><span className="capitalize">security</span>
                     </p>
                     <p onClick={handleOrders} className='flex gap-1 items-center hover:bg-gray-100 py-1 px-2 rounded text-gray-500 active:text-cyan-500'>
                        <BsBag />
                        <span className="capitalize">orders</span>
                     </p>
                  </div>
                  <div className='border-t border-gray-300'>
                     <p className='flex gap-1 items-center hover:bg-gray-100 py-1 px-2 rounded text-gray-500 active:text-cyan-500'>
                        <HiOutlineLogout />
                        <span className="capitalize">logout</span>
                     </p>
                  </div>
               </div>
               <div className="col-span-2">
                  {state == "personal" && (
                     <div className="flex flex-col gap-3 border border-gray-300 rounded px-3 pt-3 pb-5">
                        <div className="flex flex-col gap-1">
                           <label htmlFor="name">Name</label>
                           <div className='border border-gray-300 rounded py-1 px-2'>{user.name}</div>
                           {/* <input type="text" name="name" id="name" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" required /> */}
                        </div>
                        <div className="flex flex-col gap-1">
                           <label htmlFor="email">Email</label>
                           <div className='border border-gray-300 rounded py-1 px-2'>{user.email}</div>
                           {/* <input type="email" name="email" id="email" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" required /> */}
                        </div>
                        {user.address && (
                           <div className="flex flex-col gap-1">
                              <label htmlFor="address">Address</label>
                              <div className='border border-gray-300 rounded py-1 px-2'>{user.address}</div>
                              {/* <input type="text" name="address" id="address" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" required /> */}
                           </div>
                        )}
                     </div>
                  )}
                  {state == "security" && (
                     <div className="flex flex-col gap-3 border border-gray-300 rounded px-3 pt-3 pb-3">
                        <div className="flex flex-col gap-1">
                           <label htmlFor="oldPassword">Old Password</label>
                           <input type="text" value={oldPassword} onChange={handleOldPassword} name="oldPassword" id="oldPassword" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" placeholder='Old Password' required />
                        </div>
                        <div className="flex flex-col gap-1">
                           <label htmlFor="newPassword">New Password</label>
                           <input type="text" value={newPassword} onChange={handleNewPassword} name="newPassword" id="newPassword" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" placeholder='New Password' required />
                        </div>
                        <div className="flex flex-col gap-1">
                           <label htmlFor="confirmNewPassword">Confirm New Password</label>
                           <input type="text" value={confirmNewPassword} onChange={handleConfirmNewPassword} name="confirmNewPassword" id="confirmNewPassword" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" placeholder='Confirm New Password' required />
                        </div>
                        <button onClick={handleChangePassword} className="flex items-center justify-center gap-2 text-nowrap rounded bg-gray-500 px-3 py-1 font-medium text-white hover:bg-gray-600 focus:outline-none">
                           <BsUnlock />
                           Change Password
                        </button>
                     </div>
                  )}
                  {state == "orders" && (
                     <div className="flex flex-col gap-3 border border-gray-300 rounded px-3 pt-3 pb-5">
                        orders
                     </div>
                  )}
               </div>
            </div>
         </div>
      </Container>
   )
}

export default AccountSetup