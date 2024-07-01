import React from "react";
import logo from "../Assets/logo_big.png";
import whatsapp from "../Assets/whatsapp_icon.png";
import pintester from "../Assets/pintester_icon.png";
import instagram from "../Assets/instagram_icon.png";

const Footer = () => {
    return (
        <div className="relative h-[60vh] flex flex-col justify-start items-center">
            <div className="w-1/3 flex flex-row justify-center items-center py-[2%]">
                <img src={logo} alt="logo"/>
                <span className="text-center text-4xl font-md ml-2">KAPDA BAZAAR</span>
            </div>
            <div className="w-1/3 flex flex-row justify-evenly items-center py-[2%]">
                <span className="text-md font-medium">Company</span>
                <span className="text-md font-medium">Offices</span>
                <span className="text-md font-medium">Products</span>
                <span className="text-md font-medium">About</span>
                <span className="text-md font-medium">Contact</span>
            </div>
            <div className="w-1/5 flex flex-row justify-evenly items-center py-[2%]">
                <img src={whatsapp} alt="whatsapp" />
                <img src={pintester} alt="pintrest" />
                <img src={instagram} alt="instagram" />
            </div>
            <div className="w-1/4 absolute bottom-[10px] left-[38.5%] italic text-slate-600">
                Copyright @ 2023 - All rights reserved
            </div>
        </div>
    )
};

export default Footer;