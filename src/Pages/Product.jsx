import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrump from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
    
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    
    const product = all_product.filter((e,i) => e.id === Number(productId))[0];

    return (
        <div className="w-full px-[5%] py-8">
            <BreadCrump product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts/>
        </div>
    )
}

export default Product;