import React from "react";
import "./Popular.css";
import Items from "../items/Items";
import data_product from "../../assets/dataItem";

const Popular = () => {
  return (
    <div className="Popplur">
      <h1>POPPLUR IN WOMEN</h1>
      
      <div className="Popular_item">
        {data_product.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
