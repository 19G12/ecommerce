import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = (props) => {

    const {removeFromCart} = useContext(ShopContext);

    return (
        
        <div className="w-[70%] pl-2 flex flex-row justify-between items-center my-[10px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div className="w-[6%]">
                <img src={props.image} className="w-fit" alt="prd_cart_image"/>
            </div>
            <div className="w-[72%] flex flex-col justify-between">
                <div className="w-full my-2 text-sm	font-medium	text-wrap">
                    {props.name}
                </div>
                <div className="w-full my-2">
                    <span className="text-sm font-medium ">Total: </span>&#x20B9; {props.quant * props.price * 82}
                </div>
            </div>
            <div className="w-[12%] flex flex-col justify-between h-full">
                <div className="w-full flex flex-row justify-center items-center">
                    <img src={remove_icon} className="w-[15%] cursor-pointer my-1" alt="remove_from_cart" onClick={() => {removeFromCart(props.ID)}}/>
                </div>
                <div className="w-full pt-1 text-center "><span className="text-base font-medium ">Qty:  </span>{props.quant}</div>
            </div>
        </div>
    
    )
};

export default CartItems;