'use client'
import styles from './productCard.module.css';
import Link from 'next/link';
import { formatPrice } from '../util';

function ProductCard({product}) {
  console.log(product)
  return ( 
   <li className={styles.productCard}>
  <Link href={`/product/${product.id}`}>
    <img src={product.thumbnail} className={styles.productImage} alt="product" />
    <div className={styles.info}>
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>{formatPrice(product.price)}</p>
    </div>
  </Link>
</li>

  )
}

export default ProductCard