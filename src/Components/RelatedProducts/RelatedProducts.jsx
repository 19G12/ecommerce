import React from "react";
import data_product from "../Assets/data";
import Items from "../Items/Items";

const RelatedProducts = () => {
    return (
        <div className="w-full flex flex-col justify-start items-center pt-[5%]">
            <h1 className="w-full relative text-center text-4xl font-md tracking-tight subpixel-antialiased before:block before:absolute before:w-[10%] before:h-[4px] before:bg-[#000] before:left-[45%] before:bottom-[-20px]">RELATED PRODUCTS</h1>
            <div className="w-full flex flex-wrap flex-row justify-between items-center mt-[5%]">
                {data_product.map((item, i) => <Items key={i} id={item.id} source={item.image} name={item.name} old={item.old_price} new={item.new_price}/> )}
            </div>
        </div>
    )
};

export default RelatedProducts;