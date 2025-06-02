import React from 'react'
import { products } from './data'
import Product from './Product'
import './Products.css'
const Products = () => {
  return (
    <div className='productsAll'>
       {
        products.products.map((p)=>{
            return (
                <div className='productsAll'>
                    <Product singleP={p}/>
                </div>
            )
        })
       }
    </div>
  )
}

export default Products