import React from 'react'
import { Navbar } from '../features/Navbar/Navbar'
import ProductList from '../features/ProductList/ProductList'

export const Home = () => {
  return (
    <div>
  <Navbar>
    <ProductList></ProductList>
  </Navbar>


    </div>
  )
}
