import ProductCard from "../components/ProductCard"
import {Link} from 'react-router'
function Cart({cart,removeFromCart}){

    if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-4xl p-8 text-center">
        <h1 className="text-3xl font-bold">
          Your Cart is Empty
        </h1>

        <p className="mt-3 text-gray-500">
          You haven't added any products yet.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

    return(
        <div className="flex">
            {cart.map(item => <ProductCard product={item} removeFromCart={removeFromCart}/>)}
        </div>
    )
}

export default Cart