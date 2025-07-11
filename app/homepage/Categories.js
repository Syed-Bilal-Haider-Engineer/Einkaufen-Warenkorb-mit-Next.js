'use client';

import { useEffect, useState } from 'react';
import styles from './categories.module.css';
import Link from 'next/link';

function Categories() {
   const [categories,setCategories] = useState([])
   useEffect(() => {
        const fetchCategories = async() => {
            try {
                const data = await fetch('https://dummyjson.com/products/categories')
                if (!data.ok) {
                    throw new Error(`HTTP error! status: ${data.status}`);
                }
                setCategories(await data.json())
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        }
        fetchCategories()
   },[])

  return (
    <div className={styles.categories}>
        <h2>Explore Our Categories</h2>
        {categories.length > 0 ? (
            <ul className={`${styles.wrapper} container`}>
                {categories.map((category) => (
                    <Link key={category.id + category.name}  href={`/products/${category.slug}`}>
                        <li 
                            className={styles.category}
                            >
                            <h3>{category.name}</h3>
                        </li>
                    </Link>
                ))}
            
            </ul>
        ): (
            <p>Sorry, we couldn't load the categories at this time. Please try again later.</p>
        )}
        
    </div>
  )
}

export default Categories