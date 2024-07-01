import React from "react";
import collection_items from "../Assets/new_collections"
import Items from "../Items/Items";

const NewCollections = () => {
    return (
        <div className="flex flex-col items-evenly justify-evenly">
            <h1 className="w-full relative text-center text-4xl font-md tracking-tight subpixel-antialiased before:block before:absolute before:w-[10%] before:h-[4px] before:bg-[#000] before:left-[45%] before:bottom-[-20px]">NEW COLLECTIONS</h1>
            <div className="flex flex-row justify-center flex-wrap items-center mt-8">
                {collection_items.map((item, i) => {
                    return (
                        
                        <Items key={i} id={item.id} source={item.image} name={item.name} old={item.old_price} new={item.new_price}/>
                        
                    )
                })}
            </div>
        </div>
    )
};

export default NewCollections;