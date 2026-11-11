import {Link, useLocation} from 'react-router'
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function ProductCard({product}){
    const location = useLocation()
    const { addToCart, removeFromCart } = useContext(CartContext);
    
    const isCartPage = location.pathname === '/cart'
    
    return (
         <Link
            to={`/products/${product.id}`}
          >
        <div className='w-50 rounded-lg bg-white shadow-md hover:-translate-y-1 hover:shadow-xl'>
            <img 
                src={product.image}
                className='h-56 w-56 rounded-lg'
            />
            <div className='px-5 text-center pb-5'>
                <p>{product.name}</p>
                <p className='mb-4'>{product.price.toLocaleString()} AMD</p>
                { isCartPage ? ( <button 
                onClick={(e) => {
                    e.preventDefault()
                    removeFromCart(product)
                }}
                className='rounded-xl mt-4 w-full bg-black text-white p-1 mt-2 cursor-pointer hover:bg-gray-700 '>Remove </button>
            ): 
                <button 
                onClick={(e) => {
                    e.preventDefault()
                    addToCart(product)
                }}
                className='rounded-xl mt-4 w-full bg-black text-white p-1 mt-2 cursor-pointer hover:bg-gray-700 '>Add to cart </button>
            }
            </div>
        </div>
        </Link>
    )
}
export default ProductCard