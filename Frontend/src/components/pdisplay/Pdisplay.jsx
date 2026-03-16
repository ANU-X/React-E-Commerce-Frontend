import React, {useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Pdisplay.css";
import four_star from "../../assets/four-star.png";
import { MdContentCopy } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { AllDataProduct } from "../../contex/Context";



const Pdisplay = ({ product }) => {
  const {addTocart} = useContext(AllDataProduct)
  const [updown, setUpdown] = useState(null)

  
  // dropdown menu
  const DropDownHandle = (name) => {
    setUpdown(updown === name ? null: name)
  }

  const code = 'LPNCH14129'
  const [copied, setCopied] = useState(false)

  const copyHandle = async ()=>{
    try{
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }catch(err){
      alert('copied err', err)
    }
  }

  return (
    <div className="product">
      {/* left side */}
      <div className="product_style">
        <div className="short_style_p">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img"/>
          <img src={product.image} alt="img"/>
        </div>
        <div className="product_big_img">
          <img src={product.image} alt="img" />
        </div>
      </div>

      {/* right side */}
      <div className="p-datiles">
        <h3> {product.name} </h3>
        <div className="star-rating">
          <img src={four_star} alt="img" height={20} />
          <p>(18,000)</p>
        </div>

      <div className="copied-style">
        <p>SKU: LPNCH14129</p>
        <button onClick={copyHandle}>
          <MdContentCopy/>
        </button>
        {copied && <span className="copied">copied!</span> }
      </div>

        <div className="p-price">
          <h3 className="old"> ${product.old_price} </h3>
          <h3 className="new"> ${product.new_price} </h3>
          <p> +VAT </p>
        </div>

        <p>Select Size</p>
        <div className='p-size'>
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <span>XL</span>
          <span>XXL</span>
        </div>
        <div className="product-text">
          <p>
            Due to high demand, these Gray Mark sizes are currently unavailable online. Please check availability at the stores below.
          </p>
        </div>
        <button onClick={()=>addTocart(product.id)} className="add-cart"> ADD TO CART </button>
        <Link onClick={ ()=> (alert('not working, this link developing....')) }> Check Store availability </Link>
        <p> FREE DELIVERY at $200 purchase </p>
        <p> Product color may slightly vary, depending on your device's screen resolution </p>

        <div>
          <div onClick={()=>DropDownHandle('info')} className="dropdown-man">
            <p>Product Info</p>
          {updown === 'info' ? <RiArrowDropDownLine className="dro-icon"/> : <RiArrowDropUpLine className="dro-icon"/>}
          </div>
          {updown === 'info' && (
            <div className={`dropdown-content ${updown ? 'show': ''}`}>
              <p> Women’s winter hoodie style poncho in cotton flannel fabric. Waistbelt and frayed lace at the border. </p>
            </div>
          )} 
        </div>

        <div>
          <div onClick={()=>DropDownHandle('details')} className="dropdown-man">
            <p>Product details</p>
          {updown === 'details' ? <RiArrowDropDownLine className="dro-icon"/> : <RiArrowDropUpLine className="dro-icon"/>}
          </div>
          {updown === 'details' && (
          <div className={`dropdown-content ${updown ? 'show': ''}`}>
              <div className="color">
                <p>Color</p>
                <p>Checks</p>
              </div>
                <hr />
              <div className="color">
                <p>Size</p>
                <span> S, M, L, XL </span>
              </div>
              <hr />
              <div className="color">
              <p>Fabrick</p>
              <span>Flannel</span>
              </div>
              <hr />
              <div className="color">
              <p>Wash Care</p>
              <span> Wash separately in mild detergent</span>
              </div>
              <hr />
          </div>
          )}
        
        </div>
      </div>
    </div>
  );
};

export default Pdisplay;
