'use client';


import Header from "@/components/Header";
import React, {useState} from "react";
 const LoginPage = () => {
// const [reg, setReg] = useState('');
// const [pass, setPass] = useState('');

// const handleSubmit = (e) =>{
//     e.preventDefault();
//     console.log(reg); 
//  }
    return(
        <>
        <Header/>
       <div className="bg-white h-28 border-b-8 flex justify-center items-center gap-3 ml-0 ">
        <h2 classname="font-bold font-serif">Profile</h2>

       </div>
        <div className="flex justify-center items-center pt-6">

  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md border-4 font-serif">
    <div className="mb-8">
      <label
        className="block text-gray-700 text-2xl font-bold mb-2"
        htmlFor="username"
      >
        User ID:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl"
        id="username" type="text" placeholder="ID / REG Number"/>
    </div>
    <div className="mb-32">
      <label
        className="block text-gray-700 text-2xl font-bold mb-2"
        htmlFor="password"
      >
        Password:
      </label>
      <input
        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-8 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="******************"
      />
      <p className="text-red-500 text-base italic">Please Enter  password.</p>
      <p className="py-9 px-10 text-2xl">Not Registered: <a href="Signup" className="inline-block align-baseline font-bold text-2xl text-blue-500 hover:text-blue-800 "> Sign Up</a> </p>
    </div>
    <div className="flex items-center justify-between">
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xl"
        type="button"
      >
       <a href="/Dashboard" className="font-sans">Login</a> 
      </button>
      <a
        className="inline-block align-baseline font-bold text-xl text-blue-500 hover:text-blue-800"
        href="#"
      >
        Forgot Password?
      </a>
    </div>
  </form>
 
</div>

        </>
    )
}
export default LoginPage