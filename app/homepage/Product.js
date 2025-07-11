'use client'
import styles from './products.module.css';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';

 function Products() {
    const [productList,setProductsList] = useState([]);
   useEffect(() =>{
     const fetchProductsList = async() => {
        try {
        const data = await fetch('https://dummyjson.com/products?sortBy=rating&order=desc&limit=12&skip=0');
        if (!data.ok) {
            throw new Error(`HTTP error! status: ${data.status}`);
        }
        const json = await data.json();
        setProductsList(json.products);
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }
     }
     fetchProductsList()
   },[])

    return ( 
        <div className={styles.products}>
            <div className={`${styles.wrapper} container`}>
                <h2>Highest Rated Products</h2>
                {productList.length > 0 ? (
                    <>
                        <p>
                            Check out below a curated list of
                            the products that received the highest ratings from our 
                            customers
                        </p>
                        <ul className={styles.productsList}>
                            {productList.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </ul>
                    </>
                ) : (
                    <p>Sorry, we couldn't load the products at this time. Please try again later.</p>
                )}
                <Link href="/products">
                    <button>
                        View All Products
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Products;