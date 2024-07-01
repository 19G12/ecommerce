import React from "react";
import { Link } from "react-router-dom";

const Items = (props) => {
    return (
        
        <div className="basis-1/4 p-6">
            <div className="flex py-2 rounded-lg flex-col items-center justify-center h-fit hover:scale-[1.02] ease-in-out duration-150 hover:cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
                    <Link className="w-3/4 rounded-lg" to={`/product/${props?.id}`}><img className="w-full rounded-lg" src={props.source} alt="item" /></Link>
                    <p className="w-3/4 text-balanced pt-3 leading-tight font-medium">{props.name}</p>
                    <div className="w-3/4 flex flex-row justify-start items-center py-2">
                        <span className="pr-4 text-xl font-medium">&#x20B9;{props.new * 82}</span>
                        <span className="line-through decoration-2 decoration-red-600 text-md font-medium">&#x20B9;{props.old * 82}</span>
                    </div>
            </div>
        </div>
        
    )
};

export default Items;