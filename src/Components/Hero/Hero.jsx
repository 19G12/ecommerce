import React from "react";
import hand_icon from "../Assets/hand_icon.png"
import arrow from "../Assets/arrow.png"
import hero_img from "../Assets/hero_image.png"

const Hero = () => {
    return(
        <div className="flex flex-row items-center justify-center bg-gradient-to-b from-cyan-100 from-2% to-white to-90%">
            <div className="basis-1/2 justify-center items-center">
                <div className="flex flex-row justify-end items-center">
                    <div className="w-3/4 flex flex-col items-start">
                        <h2 className="w-fit my-3 font-medium">NEW ARRIVALS ONLY</h2>
                        <div className="w-full flex flex-row justify-start items-center my-2">
                                <p className="text-7xl font-medium tracking-normal	">new</p>
                                <img src={hand_icon} className="h-[70px] pl-[20px]" alt="hand_icon"/>
                            </div>
                            <p className="text-7xl my-2 font-medium tracking-normal	" >collections</p>
                            <p className="text-7xl my-2 font-medium tracking-normal	" >for everyone</p>
                            <div className="bg-red-800 mt-6 flex flex-row px-5 py-3 items-center rounded-full">
                                <span className="font-medium text-white">Latest collections</span>
                                <img className="px-3 h-[15px]" src={arrow} alt="arrow"/>
                            </div>
                    </div>
                </div>
            </div>
            <div className="basis-1/2 flex flex-row items-center justify-center" >
                <div>
                    <img src={hero_img} className="h-[85vh]" alt="hero"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;