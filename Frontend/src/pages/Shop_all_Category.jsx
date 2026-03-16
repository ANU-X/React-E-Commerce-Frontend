import React from "react";
import { useContext } from "react";
import { AllDataProduct } from "../contex/Context";
import Items from "../components/items/Items";
import { useLoaderData } from "react-router-dom";
import "../golobal css/Global.css";

const Shop_all_Category = () => {
  const { all_product } = useContext(AllDataProduct);
  const { category, banner } = useLoaderData();

  return (
    <div className="">
      <div className="Shopping_banner">
      <img src={banner} alt="img" loading="lazy" />        
      </div>

      <div className="Shop-all">
        {all_product.map((items, i) => {
          if (category === items.category) {
            return (
                <Items 
                key={i}
                id={items.id}
                name={items.name}
                image={items.image}
                old_price={items.old_price}
                new_price={items.new_price}
              />
            );
          } else {
            return null;
          }
        })}
        <p>Loding more...</p>
      </div>
    </div>
  );
};

export default Shop_all_Category;
