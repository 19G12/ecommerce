import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null);

let cart = {};

const setDefaultCart = () => {
    
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = 0;
    }
    return cart;
    
}

const ShopContextProvider = (props) => {
    
    
    const addToCart = (itemId) => {
        setCart((prev) => (
            {...prev, [itemId]: prev[itemId] + 1}
        ));
    };
        
    const removeFromCart = (itemId) => {
        setCart((prev) => (
            {...prev, [itemId]: prev[itemId] - 1}
        ))
    };
    
    const getTotalCartValue = () => {
        let totalValue = 0;
        all_product.map((val,id) => {
            if(cartVal[String(val.id)]) {
                return totalValue += val.new_price*cartVal[String(val.id)]
            } else {
                return null
            }
        });
        return totalValue*82;
    }
    
    const [cartVal, setCart] = useState(setDefaultCart()); 
    
    const ContextValues = {all_product, cartVal, addToCart, removeFromCart, getTotalCartValue};
    
    return (
        <ShopContext.Provider value={ContextValues}>
            {props.children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;