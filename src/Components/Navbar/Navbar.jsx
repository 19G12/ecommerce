import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
        
    const {cartVal} = useContext(ShopContext);
    
    const [menu, setMenu] = useState("")
    
    var sum = 0
    
    Object.keys(cartVal).map((val,ind) => {
        if(cartVal[val]) {
            return (sum = sum + 1)
        } else{
            return null 
        }
    });
    
    return (
        <div className="flex flex-row py-2 px-24 items-center">
            <div className="basis-1/4 justify-center flex flex-row items-center gap-x-3">
                <img src={logo} alt="company-logo" />
                <p className="h-fit text-xl font-medium ">KAPDA BAZAAR</p>
            </div>
            <div className="basis-1/2 flex flex-row gap-x-6 justify-center items-center">
                <span onClick={() => {setMenu("shop")}} className={`font-normal hover:cursor-pointer ${menu === 'shop' ? "-translate-y-3 ease-linear decoration-solid decoration-gray-300 underline decoration-4 underline-offset-8" : ""}`}><Link to='/'>Shop</Link></span>
                <span onClick={() => {setMenu("men")}} className={`font-normal hover:cursor-pointer ${menu === 'men' ? "-translate-y-3 ease-linear decoration-solid decoration-gray-300 underline decoration-4 underline-offset-8" : ""}`}><Link to='/mens'>Men</Link></span>
                <span onClick={() => {setMenu("women")}} className={`font-normal hover:cursor-pointer ${menu === 'women' ? "-translate-y-3 ease-linear decoration-solid decoration-gray-300 underline decoration-4 underline-offset-8" : ""}`}><Link to='/womens'>Women</Link></span>
                <span onClick={() => {setMenu("kids")}} className={`font-normal hover:cursor-pointer ${menu === 'kids' ? "-translate-y-3 ease-linear decoration-solid decoration-gray-300 underline decoration-4 underline-offset-8" : ""}`}><Link to='/kids'>Kids</Link></span>
            </div>
            <div className="basis-1/4 flex justify-center gap-x-6 h-10 items-center">
                <Link to='/login'><div className="py-2 px-5 test-lg border-solid border-2 border-gray-400 rounded-lg font-semibold text-black hover:bg-green-500 hover:cursor-pointer">
                    Login
                </div></Link>
                <div className="h-fit relative">
                    <Link to='/cart'><img src={cart_icon} alt="cart-icon" /></Link>
                    <div className="absolute top-0 right-[-8px] h-4 w-4 rounded-full text-white bg-red-800 text-[10px] text-center font-medium">
                        {sum}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar