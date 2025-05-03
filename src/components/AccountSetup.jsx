"use client"

import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import useAccountsStore from '@/store/useAccountsStore'
import useOrdersStore from '@/store/useOrdersStore'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BsArrowRight, BsBag, BsLock, BsPerson, BsUnlock } from 'react-icons/bs'
import { HiOutlineLogout } from 'react-icons/hi'
import OrderDate from './OrderDate'
import Link from 'next/link'
import useWishListsStore from '@/store/useWishListsStore'
import useCartsStore from '@/store/useCartsStore'

const AccountSetup = ({ setup }) => {
   const { users, changePassword, changeAddress, changePhone, logoutAcc } = useAccountsStore();
   const user = users[0];
   const { orders } = useOrdersStore();
   const { wishLists, emptyWishlists } = useWishListsStore();
   const { carts, emptyCarts } = useCartsStore();
   const [ state, setState ] = useState(setup);
   const [ oldPassword, setOldPassword ] = useState("")
   const [ newPassword, setNewPassword ] = useState("")
   const [ confirmNewPassword, setConfirmNewPassword ] = useState("")
   const [ phone, setPhone ] = useState(user&&user.phone?user.phone:"09")
   const [ address, setAddress ] = useState("")
   const router = useRouter();

   useEffect(() => {
      if(users.length==0){
         router.push("/")
      }
   }, [])

   const handlePersonal = () => {
      // setState("personal")
      router.push("/account/personal")
   }
   const handleSecurity = () => {
      // setState("security")
      router.push("/account/security")
   }
   const handleOrders = () => {
      // setState("orders")
      router.push("/account/orders")
   }

   const handlePhone = (e) => {
      setPhone(e.target.value)
   }
   const handleAddress = (e) => {
      setAddress(e.target.value)
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

   const handleChangePhone = (e) => {
      if(e.key=="Enter"){
         changePhone(user.email, phone)
         toast.success("change phone number successful")
      }
   }

   const handleChangeAddress = (e) => {
      if(e.key=="Enter") {
         changeAddress(user.email,address);
         toast.success("change address successful")
      }
   }

   const handleChangePassword = () => {
      if(user.password==oldPassword && newPassword==confirmNewPassword && newPassword!=oldPassword) {
         changePassword(user.email,newPassword)
      } else {
         toast.error("wrong password")
      }
   }

   const handleLogout = () => {
      logoutAcc();
      emptyWishlists();
      emptyCarts();
      router.push("/")
   }
   return (
      <Container>
         <Breadcrumb links={[{name: "My Account", path: "/account"}]} current={setup} />
         <div className="my-10">
            <h2 className='uppercase font-bold text-2xl'>my account</h2>
            <p className='text-gray-500'>Manage your personal details</p>
            <div className="flex flex-col md:flex-row gap-5 my-5">
               <div className="md:min-h-79 flex md:flex-col gap-1 border border-gray-300 rounded py-1 px-1">
                  <div className='grow flex md:block overflow-auto hsb'>
                     <p onClick={handlePersonal} className='md:w-40 flex gap-1 items-center hover:bg-gray-100 py-1 px-2 rounded text-gray-500 active:text-cyan-500'>
                        <BsPerson /><span className='capitalize'>personal</span>
                     </p>
                     <p onClick={handleSecurity} className='flex gap-1 items-center hover:bg-gray-100 py-1 px-2 rounded text-gray-500 active:text-cyan-500'>
                        <BsLock /><span className="capitalize">security</span>
                     </p>
                     <p onClick={handleOrders} className='flex gap-1 items-center hover:bg-gray-100 py-1 px-2 rounded text-gray-500 active:text-cyan-500'>
                        <BsBag />
                        <span className="capitalize">orders</span>
                     </p>
                  </div>
                  <div className='md:border-t border-gray-300 md:pt-2'>
                     <p onClick={handleLogout} className='flex gap-1 items-center hover:bg-gray-100 py-1 px-2 rounded text-gray-500 active:text-cyan-500'>
                        <HiOutlineLogout />
                        <span className="capitalize">logout</span>
                     </p>
                  </div>
               </div>
                  {state == "personal" && (
                     <div className="grow flex flex-col gap-3 border border-gray-300 rounded px-3 pt-3 pb-5">
                        <div className="flex flex-col gap-1">
                           <label htmlFor="name">Name</label>
                           {user && user.name ? (
                              <div className='border border-gray-300 rounded py-1 px-2'>{user.name}</div>
                           ) : (
                              <input type="text" name="name" id="name" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" required />
                           )}
                        </div>
                        <div className="flex flex-col gap-1">
                           <label htmlFor="email">Email</label>
                           { user && user.email ? (
                              <div className='border border-gray-300 rounded py-1 px-2'>{user.email}</div>
                           ) : (
                              <input type="email" name="email" id="email" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" required />
                           )}
                        </div>
                        <div className="flex flex-col gap-1">
                           <label htmlFor='phone'>Phone</label>
                           {user && user.phone ? (
                              <div className='border border-gray-300 rounded py-1 px-2'>{user.phone}</div>
                           ) : (
                              <input type="text" value={phone} onChange={handlePhone} onKeyUp={handleChangePhone} name="address" id="address" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" required />
                           )}
                        </div>
                        <div className="flex flex-col gap-1">
                           <label htmlFor='address'>Address</label>
                           {user && user.address ? (
                              <div className='border border-gray-300 rounded py-1 px-2'>{user.address}</div>
                           ) : (
                              <input type="text" value={address} onChange={handleAddress} onKeyUp={handleChangeAddress} name="address" id="address" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" required />
                           )}
                        </div>
                     </div>
                  )}
                  {state == "security" && (
                     <div className="grow flex flex-col gap-3 border border-gray-300 rounded px-3 pt-3 pb-3">
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
                        <div className='flex justify-end'>
                           <button onClick={handleChangePassword} className="flex items-center justify-center gap-2 rounded bg-gray-500 px-3 py-1 font-medium text-white hover:bg-gray-600 focus:outline-none">
                              <BsUnlock />
                              Change Password
                           </button>
                        </div>
                     </div>
                  )}
                  {state == "orders" && (
                     <div className="grow flex flex-col border border-gray-300 rounded overflow-auto hsb">
                        <table>
                           <thead>
                              <tr className='border-b border-gray-300'>
                                 <th className='py-3 px-2 text-start'>Order ID</th>
                                 <th className='py-3 px-2 text-start'>Net Total</th>
                                 <th className='py-3 px-2 '>Date</th>
                                 <th className='py-3 px-2 '>Action</th>
                              </tr>
                           </thead>
                           <tbody>
                              {orders.filter((el) => el.customer.email==(user&&user.email) ).map((el) => (
                                 <tr key={el.id} className='text-gray-600 border-b last:border-none odd:bg-gray-100 even:bg-gray-50 border-gray-300'>
                                    <td className='py-1 px-2'>{el.orderId}</td>
                                    <td className='py-1 px-2'>{el.netTotal}</td>
                                    <OrderDate date={el.date} />
                                    <td><Link href={`/cart/checkout/confirm-order-${el.id}`} className='flex justify-center items-center'><BsArrowRight /></Link></td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  )}
            </div>
         </div>
      </Container>
   )
}

export default AccountSetup