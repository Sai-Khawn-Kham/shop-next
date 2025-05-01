"use client"

import useAccountsStore from "@/store/useAccountsStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
   const [ email, setEmail ] = useState("")
   const [ password, setPassword ] = useState("")
   const { accounts, loginAcc } = useAccountsStore();
   const router = useRouter();

   const handleEmail = (e) => {
      setEmail(e.target.value)
   }
   const handlePassword = (e) => {
      setPassword(e.target.value)
   }

   const handleLogin = () => {
      const con = accounts.find((account) => account.email==email && account.password==password)?true:false;
      if(con) {
         loginAcc(accounts.find((account) => account.email==email && account.password==password))
         router.push("/account")
      } else {
         toast.error("Login Fail")
      }
   }

   return (
      <div className="flex justify-center items-center w-screen h-screen bg-gray-200 absolute top-0 z-100">
         <div className="w-2/5 bg-gray-50 p-5 rounded-lg">
            <h1 className="text-3xl font-bold font-serif text-center">Login</h1>
            <div className="flex flex-col gap-3">
               <div className="flex flex-col gap-1">
                  <label htmlFor="email">Email</label>
                  <input type="text" value={email} onChange={handleEmail} name="email" id="email" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" placeholder="kyaw@gmail.com" required />
               </div>
               <div className="flex flex-col gap-1">
                  <label htmlFor="password">Password</label>
                  <input type="text" value={password} onChange={handlePassword} name="password" id="password" className="border border-gray-300 rounded py-1 px-2 focus:outline-none" required />
               </div>
               <div className="flex justify-between items-center">
                  <Link href={"/login"} className="text-cyan-700 underline">don't have account, register</Link>
                  <button onClick={handleLogin} className="bg-gray-500 text-gray-50 py-1 px-5 rounded-lg">Register</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LoginPage;
