function ProductCard({product,onAddToCart}){
    return (
        <div className='w-50 rounded-lg bg-white shadow-md hover:-translate-y-1 hover:shadow-xl'>
            <img 
                src={product.image}
                className='h-56 w-56 rounded-lg'
            />
            <div className='px-5 text-center pb-5'>
                <p>{product.name}</p>
                <p>{product.price.toLocaleString()} AMD</p>

                <button 
                onClick={() => onAddToCart(product)}
                className='rounded-xl w-full bg-black text-white p-1 mt-2 cursor-pointer hover:bg-gray-700 '>Add to cart </button>

            </div>
        </div>
    )
}
export default ProductCard