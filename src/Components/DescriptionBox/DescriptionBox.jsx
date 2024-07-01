import React, { useState } from "react";

const DescriptionBox = () => {

    const [style, setStyle] = useState(0)

    return (
        <div className="w-full flex flex-col justify-center items-start">
            <div className="pt-[2%] w-[30%] flex flex-row justify-start items-center">
                <div onClick={() => {
                    setStyle(0);
                }} className={`p-4 cursor-pointer text-center rounded-t-lg ${style ? "bg-rose-100" : "bg-rose-200"}`}>Description</div>
                <div onClick={() => {
                    setStyle(1);
                }} className={`p-4 cursor-pointer text-center rounded-t-lg ${style ? "bg-rose-200" : "bg-rose-100"}`}>Reviews (122)</div>
            </div>
            <div className="w-full bg-rose-200 px-[7%] py-[2%]">
                <p className="text-balance break-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci phasellus egestas tellus rutrum tellus pellentesque. Vitae turpis massa sed elementum tempus egestas sed sed risus. Ac orci phasellus egestas tellus. Velit dignissim sodales ut eu sem integer. Suspendisse sed nisi lacus sed viverra. Arcu cursus vitae congue mauris. Sed nisi lacus sed viverra. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Varius quam quisque id diam vel quam elementum pulvinar etiam. Donec ac odio tempor orci dapibus.
                </p>
                <p className="text-balance break-normal pt-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci phasellus egestas tellus rutrum tellus pellentesque. Vitae turpis massa sed elementum tempus egestas sed sed risus. Ac orci phasellus egestas tellus. Velit dignissim sodales ut eu sem integer. Suspendisse sed nisi lacus sed viverra. Arcu cursus vitae congue mauris. Sed nisi lacus sed viverra. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Varius quam quisque id diam vel quam elementum pulvinar etiam. Donec ac odio tempor orci dapibus.
                </p>
            </div>
        </div>
    )
};

export default DescriptionBox;