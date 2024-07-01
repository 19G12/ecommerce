import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import CartItems from "../Components/CartItems/CartItems";

const Cart = () => {

const {cartVal, all_product, getTotalCartValue} = useContext(ShopContext);

    return (
        <div className="px-[5%] py-8 flex flex-col justify-start items-center w-full">
            {all_product.map((val, id) => {
                if(cartVal[val.id]){
                    return (<CartItems image={val.image} count={cartVal[val.id]} ID={val.id} quant={cartVal[val.id]} name={val.name} price={val.new_price} />)
                }
                else{
                    return null
                }
            })}
            <div className="w-[70%] p-2 flex flex-row justify-between items-start">
                <div className="w-[40%] flex flex-col">
                    <h1 className="font-medium text-2xl my-[10%]">cart Totals</h1>
                    <div className=" flex flex-col w-full">
                        <div className="w-full my-2 flex flex-row justify-between items-center">
                            <p className="text-sm">Subtotal</p>
                            <span className="text-sm">&#x20B9;{getTotalCartValue()}</span>
                        </div>
                        <hr/>
                        <div className="w-full my-2 flex flex-row justify-between items-center">
                            <p className="text-sm">Shipping</p>
                            <span className="text-sm">*free</span>
                        </div>
                        <hr/>
                        <div className="w-full my-2 flex flex-row justify-between items-center">
                            <p className="font-semibold text-sm">Total</p>
                            <span className="font-semibold text-sm">&#x20B9;{getTotalCartValue()}</span>
                        </div>
                        
                    </div>
                </div>
                <div className="w-[40%] flex flex-col justify-start items-start">
                    <p className="mt-[10%] font-medium text-sm text-gray-400">Add your promo code here</p>
                    <div className="w-full flex flex-row justify-start items-start mt-[5%]">
                        <input type="text" placeholder="promo code" className="p-2 text-black w-[70%] shadow-[inset_-12px_-8px_40px_#46464620]"/>
                        <button className="text-center px-4 h-full bg-black text-white py-2">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;