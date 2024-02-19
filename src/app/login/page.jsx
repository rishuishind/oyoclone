'use client';
import React from "react"

const Login = () => {
    return (
        <div>
            <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover">
                <div className="absolute w-full top-10 px-20 flex items-center">
                    <h2 className=" text-5xl text-white font-extrabold mr-5">OYO</h2>
                    <p className="font-bold text-2xl text-white">Hotels and homes across 800 cities, 24+ countries</p>
                </div>
                <div className="flex justify-center items-center w-9/12">
                    <div>
                        <p className="font-bold text-5xl text-justify text-white">There's a smarter way to  OYO around</p>
                        <p className="text-2xl mt-5 text-justify text-white">Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</p>
                    </div>
                    <div className="ml-20 pb-40 w-10/12 bg-slate-50 relative">
                        <p className="h-10 px-5 flex items-center text-white font-bold bg-gradient-to-r from-red-500 to-pink-400">Sign up & Get ₹500 OYO Money</p>
                        <div className="px-10 pt-5">
                            <h3 className="font-bold text-3xl text-gray-800">Login / Signup</h3>
                            <p className="font-semibold">Please enter your email to continue</p>
                            <input type="text" placeholder="enter your name" className=" outline-none border border-black my-3 px-5 py-1 w-96 h-10 rounded-sm" />
                            <input type="email" placeholder="enter your email" className=" outline-none border border-black my-3 px-5 py-1 w-96 h-10 rounded-sm" />
                            <input type="password" placeholder="enter your password" className=" outline-none border border-black my-3 px-5 py-1 w-96 h-10 rounded-sm" />
                            <button type="submit" className=" w-96 h-10 bg-red-500 rounded-lg my-5 text-white text-lg font-bold hover:bg-red-800">Signup</button>
                            <p className="my-1 text-xl">
                                <span className="font-semibold">Already have an account ? </span>
                                <span className=" text-red-500 font-bold border-b-2 border-red-500 hover:cursor-pointer">Login</span>
                            </p>
                        </div>
                        <div className="px-10 flex flex-col absolute bottom-5">
                            <span className=" font-semibold">Or sign in as</span>
                            <div className="">
                                <span className=" ml-1 border-r px-1 border-l border-black font-semibold">Travel Agent</span>
                                <span className="px-1 font-semibold">Corporate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login