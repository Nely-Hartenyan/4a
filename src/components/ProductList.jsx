import {products} from '../data/products'
import ProductCard from "./ProductCard";
function ProductList(){
    return(
        <section className='mt-5'>
            <div className='mb-5 text-center'>
                <h2 className='text-3xl font-bold text-gray-800'>Our products</h2>
                <p className='mt-2 text-gray-500'>Choose the perfect product for you</p>
            </div>
            <div className='flex  flex-wrap gap-4 justify-center'>
                {products.data.map(item => (
                    <ProductCard
                        product={item}
                        key={item.id}
                />
                ))}
            </div>
        </section>
    )
}
export default ProductList