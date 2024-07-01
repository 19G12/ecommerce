import React from "react";
 
const LoginSignup = () => {
    return (
        <div className="h-[90vh] bg-cyan-100 flex flex-row justify-center items-start pt-[4%] px-[5%]">
            <div className="flex w-[40%] h-[90%] bg-white flex-col justify-evenly items-center px-6 py-4 rounded-md">
                <h1 className="w-full text-2xl font-medium">Sign Up..</h1>
                <input autoComplete="off" className="w-full basis-[5%] my-[10px] px-[10px] py-[2%] border-solid border-[1px] border-slate-300" type="text" placeholder="Your Name" name="name"/>
                <input autoComplete="off" className="w-full basis-[5%] my-[10px] px-[10px] py-[2%] border-solid border-[1px] border-slate-300" type="email" placeholder="Email Address" name="email"/>
                <input autoComplete="off" className="w-full basis-[5%] my-[10px] px-[10px] py-[2%] border-solid border-[1px] border-slate-300" placeholder="Password" name="password" type="password"/>
                <p className="w-full text-left">Already have an account? <span className="font-bold text-red-700">Login here</span></p>
                <div className="w-full flex flex-row justify-start items-center">
                    <input type="checkbox"/>
                    <p className="ml-[10px]">I accept the terms and conditions</p>
                </div>
                <div className="w-full flex flex-row justify-start items-center basis-[5%]">
                    <button className="w-[80%] py-[2%] bg-red-700 text-white">Continue</button>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;