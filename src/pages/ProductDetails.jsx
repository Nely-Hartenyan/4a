import { useParams, Link } from "react-router"
import {products} from '../data/products'
function ProductDetails({onAddToCart}){
    const {productId} = useParams()
    
    const product = products.data.find(item => item.id === +productId)

     if (!product) {
    return (
      <div className="mx-auto max-w-4xl p-8">
        <h1 className="text-2xl font-bold text-red-600">
          Product Not Found
        </h1>

        <Link
          to="/"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    );
  }
    return (
    <section className="mx-auto max-w-5xl p-8">
      <Link
        to="/"
        className="mb-6 inline-block text-sm text-blue-600 hover:underline"
      >
        ← Back to Products
      </Link>

      <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2">
        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-full rounded-xl object-cover"
        />

        <div>
       
          <h1 className="mt-4 text-3xl font-bold">
            {product.name}
          </h1>

          <p className="mt-3 text-gray-500">
            Category: {product.category}
          </p>

          <p className="mt-6 text-2xl font-bold">
            ${product.price}
          </p>

          <button
            onClick={() => onAddToCart(product)}
            className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails