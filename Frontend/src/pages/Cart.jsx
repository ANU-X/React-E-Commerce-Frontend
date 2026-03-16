import { AllDataProduct } from "../contex/Context";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";


const Cart = () => {
      const {cartItems, all_product, removeFromCart} = useContext(AllDataProduct)

  return (
    <div>
   <div>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quintity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div>
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p>helow</p>
                <button>close</button>
                <p>helow</p>
                <button><IoClose onClick={()=>removeFromCart(e.id)}/></button>
              </div>
            </div>
          );
        }
      })}      
    </div>
  )
}

export default Cart;
