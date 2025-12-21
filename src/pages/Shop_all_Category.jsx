import React from "react";
import { useContext } from "react";
import { AllDataProduct } from "../contex/Context";
import Items from "../components/items/Items";
import { useLoaderData } from "react-router-dom";
import "../golobal css/Global.css";

const Shop_all_Category = (props) => {
  const { all_product } = useContext(AllDataProduct);
  const { category, banner } = useLoaderData();

  return (
    <div className="">
      <img src={banner} alt="" className="Shopping_banner" />
      <div className="shopcategory">
        <div>
          <p>Showing 1-12 out of 50 product </p>
        </div>
        <div>
          <select name="" id="" className="sort_by">
            <option value="">Sort By</option>
            <option value="">Sart</option>
            <option value="">Pant</option>
            <option value="">Shose</option>
          </select>
        </div>
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
            null;
          }
        })}
      </div>
    </div>
  );
};

export default Shop_all_Category;
