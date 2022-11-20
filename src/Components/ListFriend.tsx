import React, {useEffect, useState} from "react";
import axios from "axios";
import {IProduct} from "../model";
import {Product} from "../Models/Product";
import {token} from "./AuthComponent";


export function ListFriend() {
    const [product, setProduct] = useState<IProduct[]>([])

    async function fetchProducts() {
        const response = await axios.get<IProduct[]>('https://localhost:44372/Message/GetListNickAndIdFriend', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setProduct(response.data)
        console.log(response)
    }
fetchProducts()
    return (

        <div className="ListTitleFriend">
            <div className="messages">Messages</div>
            <input className="Search">

            </input>
            <div className="NickNameColumn">
                {product.map(product => <Product product={product}/>)}
            </div>


        </div>

    )
}