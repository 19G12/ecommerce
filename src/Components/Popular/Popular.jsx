import React from "react";
import data_product from "../Assets/data";
import Items from "../Items/Items";

const Popular = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-around">
            <h1 className="w-full relative text-center text-4xl font-md tracking-tight subpixel-antialiased before:block before:absolute before:w-[10%] before:h-[4px] before:bg-[#000] before:left-[45%] before:bottom-[-20px]">POPULAR IN WOMEN</h1>
            <div className="flex flex-row justify-evenly items-start flex-nowrap">
                {data_product.map((item,ind) => {
                    return <Items key={ind} id={item.id} source={item.image} name={item.name} old={item.old_price} new={item.new_price}/>
                })}
            </div>
        </div>
    )
}

export default Popular;