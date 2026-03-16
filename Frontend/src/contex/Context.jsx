import { createContext, useState } from "react";
import all_product from "../assets/all_product";
import heroSlide from '../assets/heroSlide.js'


export const AllDataProduct = createContext(null)
const getDefaultCart = ()=>{
    let cart = {};
    all_product.forEach( (index)=>{
        cart[index.id] = 0
    } )
    return cart;
}

const Shop_allcategory_contex = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart)
    const addTocart = (itemsId)=> {
        setCartItems( (prev)=> ({...prev, [itemsId]:prev[itemsId]+1}) )
    }

    const removeFromCart = (itemsId) =>{
        setCartItems((prev) => ({...prev,[itemsId]:prev[itemsId]-1}))
    }

    const All_data ={all_product, cartItems, addTocart, removeFromCart, heroSlide}

    return(
        <AllDataProduct.Provider value={All_data} >
            {props.children}
        </AllDataProduct.Provider>
    )
}


export default Shop_allcategory_contex;
