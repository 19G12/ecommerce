import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const BreadCrump = (props) => {

    const {product} = props;

    return (
        <div className="w-full flex flex-row justify-start items-center text-sm font-medium">
            HOME <img src={arrow_icon} className="mx-3 h-[12px]" alt="brdcrm arrow"/> 
            SHOP <img src={arrow_icon} className="mx-3 h-[12px]" alt="brdcrm arrow"/> 
            {product.category} <img src={arrow_icon} className="mx-3 h-[12px]" alt="brdcrm arrow"/>
            {product.name}
        </div>
    );
}

export default BreadCrump;