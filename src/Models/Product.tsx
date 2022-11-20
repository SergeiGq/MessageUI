import {IProduct} from "../model";
import React from "react";

interface PropsProduct{
    product:IProduct
}
export function Product(product:PropsProduct){

    return(
        <div className="itemNickname">
            <div>{product.product.nickname}</div>
        </div>

    )
}