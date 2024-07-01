import React from "react";
import exclusive_offer from "../Assets/exclusive_image.png"

const Offers = () => {
    return (
        <div className="h-screen flex flex-col px-[10%] items-center justify-center">
            <div className="h-3/4 p-[15px] w-full flex flex-row justify-center items-center bg-gradient-to-b from-cyan-100 from-2% to-white to-90%">
                <div className="flex flex-col justify-center items-center basis-1/2">
                    <div className="flex flex-col h-full justify-center items-evenly">
                        <h1 className="text-7xl font-medium py-2">Exclusive</h1>
                        <h1 className="text-7xl font-medium py-2">Offers For You</h1>
                        <p className="text-base	font-semibold py-2">ONLY ON BEST SELLERS</p>
                        <button className="mt-4 p-3 w-[35%] rounded-full bg-red-600 text-white font-semibold text-md">Check Now</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-start basis-1/2 h-full">
                    <img className="h-3/4" src={exclusive_offer} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Offers;