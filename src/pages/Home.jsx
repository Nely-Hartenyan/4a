import { useState } from "react";
import Header from '../components/Header'
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductList from '../components/ProductList'

function Home({addToCart, cartLength }) {

  return (
    <div className='min-h-screen bg-gray-100'>
      <Header cart={cartLength}/>
      <Hero/>
      <ProductList onAddToCart={addToCart}/>
      <Footer/> 
    </div>
  );
}

export default Home