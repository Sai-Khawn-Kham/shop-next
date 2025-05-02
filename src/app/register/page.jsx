"use client"

import useAccountsStore from "@/store/useAccountsStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const RegisterPage = () => {
   const [ name, setName ] = useState("")
   const [ email, setEmail ] = useState("")
   const [ password, setPassword ] = useState("")
   const [ confirmPassword, setConfirmPassword ] = useState("")
   const { accounts, registerAcc } = useAccountsStore();
   const router = useRouter();

   const handleName = (e) => {
      setName(e.target.value)
   }
   const handleEmail = (e) => {
      setEmail(e.target.value)
   }
   const handlePassword = (e) => {
      setPassword(e.target.value)
   }
   const handleConfirmPassword = (e) => {
      setConfirmPassword(e.target.value)
   }

   const handleRegister = () => {
      const con1 = accounts.find((account) => account.email==email)?false:true;
      const con2 = password==confirmPassword;
      console.log(con1);
      console.log(con2);
      if(con1 && con2) {
         registerAcc({
            id: accounts.length+1,
            name,
            email,
            password
         })
         router.push("/login");
      } else {
         toast.error("Register Fail!")
      }
   }

   return (
      <div className="flex justify-center items-center w-screen h-screen bg-gray-200 absolute top-0 z-100 p-3">
         <div className="w-full md:w-2/5 bg-gray-50 p-3 md:p-5 rounded-lg">
            <h1 className="text-3xl font-bold font-serif text-center">Register</h1>
            <div className="flex flex-col gap-3">
               <div className="flex flex-col gap-1">
                  <label htmlFor="name">Name</label>
                  <input type="text" value={name} onChange={handleName} name="name" id="name" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" placeholder="Kyaw Kyaw" required />
               </div>
               <div className="flex flex-col gap-1">
                  <label htmlFor="email">Email</label>
                  <input type="text" value={email} onChange={handleEmail} name="email" id="email" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" placeholder="kyaw@gmail.com" required />
               </div>
               <div className="flex flex-col gap-1">
                  <label htmlFor="password">Password</label>
                  <input type="text" value={password} onChange={handlePassword} name="password" id="password" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" required />
               </div>
               <div className="flex flex-col gap-1">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="text" value={confirmPassword} onChange={handleConfirmPassword} name="confirmPassword" id="confirmPassword" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" required />
               </div>
               <div className="flex justify-between items-center">
                  <Link href={"/login"} className="text-cyan-700 active:text-cyan-500 underline">already have account, login</Link>
                  <button onClick={handleRegister} className="bg-gray-500 text-gray-50 py-1 px-5 rounded-lg cursor-pointer">Register</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default RegisterPage;
