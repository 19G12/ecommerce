import React from "react";

const NewsLetter = () => {
    return (
        <div className="h-[40vh] w-full flex flex-row justify-center items-center">
            <div className="w-3/4 h-full flex flex-col items-center justify-evenly bg-gradient-to-b from-cyan-100 from-2% to-white to-90%">
                <h1 className="w-full relative text-center text-4xl font-md tracking-tight subpixel-antialiased ">Get Exclusive Offers On Your Email</h1>
                <p>Subscribe to our newsletter and stay updated</p>
                <div className="w-[40%] flex flex-row items-center justify-center">
                    <input type="email" placeholder="Your mail id" className="basis-3/4 placeholder:text-slate-800 rounded-full border-black border border-solid px-[15px] py-[5px] mx-2"/>
                    <button className="basis-1/4 px-[15px] py-[5px] rounded-full text-white bg-black">Join now</button>
                </div>
            </div>
        </div>
    )
};

export default NewsLetter;