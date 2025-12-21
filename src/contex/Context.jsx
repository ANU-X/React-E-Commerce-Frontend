import { createContext } from "react";
import all_product from "../assets/all_product";


export const AllDataProduct = createContext(null)

const Shop_allcategory_contex = (props) => {
    const All_data ={all_product}
    return(
        <AllDataProduct.Provider value={All_data} >
            {props.children}
        </AllDataProduct.Provider>
    )
}


export default Shop_allcategory_contex;
