import React from 'react'
import ProductDetails from '../features/Product/Component/ProductDetails'
import { Navbar } from '../features/Navbar/Navbar'

export const ProductDetailsPage = () => {
  return (
    <div>
      <Navbar>
      <ProductDetails></ProductDetails>
      </Navbar>
       
    </div>
  )
}
