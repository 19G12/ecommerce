import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import sortBy_Icon from "../Components/Assets/dropdown_icon.png"
import Items from "../Components/Items/Items";

const ShopCategory = (props) => {

    const {all_product} = useContext(ShopContext);

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <img className="w-4/5 p-[4%]" src={props.banner} alt="banner_png"/>
            <div className="flex flex-row justify-between px-[5%] items-center w-full">
                <p>
                    <span>Showing 1-12</span> of 36 products
                </p>
                <div className="px-[10px] py-[5px] rounded-full border-solid border-2 border-black	">
                    Sort by <img className="inline-block" src={sortBy_Icon} alt="sort_icon" />
                </div>
            </div>
            <div className="flex flex-row flex-wrap">
                {all_product.map((item,i) => {
                    if(props.category === item.category){
                        return (<Items key={i} id={item.id} source={item.image} new={item.new_price} old={item.old_price} name={item.name}/>)
                    }
                    else{
                    return null;
                    }
                })}
            </div>
        </div>
    )
}

export default ShopCategory;