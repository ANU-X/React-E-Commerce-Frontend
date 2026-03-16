import React, { useContext } from 'react'
import { AllDataProduct } from '../contex/Context'
import { useParams } from 'react-router-dom'
import Pdisplay from '../components/pdisplay/Pdisplay'


const Product = () => {
    const {all_product} = useContext(AllDataProduct)
    const {productId} = useParams()
    const product = all_product.find((e)=> e.id === parseInt(productId))
    console.log(product)
  return (
    <div>
      <Pdisplay product={product}/>
    </div>
  )
}

export default Product
