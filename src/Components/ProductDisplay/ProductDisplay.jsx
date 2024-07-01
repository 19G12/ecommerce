import React, { useContext, useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({product}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    
    const {addToCart} = useContext(ShopContext);
    
    const [img, setImage] = useState(null);
    
    let array = [product.image,product.image,product.image,product.image];

    return (
        <div className="w-full flex flex-row justify-center items-center h-[80vh] py-[2%]">
            <div className="basis-1/2 justify-start items-center flex flex-row h-full">
                <div className="flex flex-col items-center justify-between h-full">
                    {
                        array.map((val,i) => <img key={i} onClick={() => {
                            setImage(val)
                        }} className="h-[24.5%] cursor-pointer" src={val} alt="product_image" />)
                    }
                </div>
                <img className="h-full ml-3" src={img ? img : array[0]} alt="main_img"/>
            </div>
            <div className="basis-1/2 h-full flex flex-col justify-between text-pretty items-center">
                <div className="w-full flex flex-col">
                    <h1 className="w-full font-normal text-2xl text-start">{product.name}</h1>
                    <div className="w-full flex flex-row justify-start items-center">
                        <Rating allowFraction={true} readonly={true} SVGclassName={`inline-block`} initialValue={4.4} size={16} iconsCount={5}/>
                        <span className="font-medium text-xs mt-[2px] ml-[5px]">(122)</span>
                    </div>
                </div>
                <div className="w-full justify-start items-center">
                    <span className="font-bold text-red-700 text-lg">&#x20B9; {product.new_price * 82}</span>
                    <span className=" ml-[20px] text-lg line-through font-bold decoration-2 decoration-solid">&#x20B9; {product.old_price * 82}</span>
                </div>
                <div className="w-full">
                    <p className="w-full text-start text-pretty text-base">
                        A light weight knitted, pullover shirt close-fitting and with a round neckline and short sleeves worn as an undershirt or outer garment
                    </p>
                </div>
                <div className="flex w-full flex-col justify-center items-start">
                    <h1 className="w-full text-start text-xl py-8">Select size</h1>
                    <div className="w-full flex flex-row justify-start items-center">
                        <div className="w-[50%] flex flex-row justify-between items-center">
                            <div className="cursor-pointer h-[50px] bg-gray-100 w-[50px] flex flex-col items-center justify-center font-medium rounded-md">S</div>
                            <div className="cursor-pointer h-[50px] bg-gray-100 w-[50px] flex flex-col items-center justify-center font-medium rounded-md px-2">M</div>
                            <div className="cursor-pointer h-[50px] bg-gray-100 w-[50px] flex flex-col items-center justify-center font-medium rounded-md px-2">L</div>
                            <div className="cursor-pointer h-[50px] bg-gray-100 w-[50px] flex flex-col items-center justify-center font-medium rounded-md px-2">XL</div>
                            <div className="cursor-pointer h-[50px] bg-gray-100 w-[50px] flex flex-col items-center justify-center font-medium rounded-md px-2">XXL</div>
                        </div>
                    </div>
                    <button onClick={() => {addToCart(product.id)}} className="w-[25%] mt-4 text-white text-md subpixel-antialiased py-2 border-solid border-2 border-red-700 bg-red-700" >ADD TO CART</button>
                </div>
                <div className="w-full py-2">
                    <p className="text-start"><span className="font-semibold">Category: </span>{product.category} T-shirt, crop-top </p>
                    <p className="text-start"><span className="font-semibold">Tags: </span>Modern, Latest</p>
                </div>
            </div>
        </div>
    )
};

export default ProductDisplay;