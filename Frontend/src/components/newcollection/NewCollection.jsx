import React from "react";
import './Ncoll.css'
import new_product from "../../assets/newdata";
import Items from "../items/Items";

const NewCollection = () => {
  return (
    <div className="Collections">
        <h1>NEW COLLECTIONS</h1>
    <div className="new_collection">
      {new_product.map((items, i) => {
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
      })}
    </div>
    </div>
  );
};

export default NewCollection;
