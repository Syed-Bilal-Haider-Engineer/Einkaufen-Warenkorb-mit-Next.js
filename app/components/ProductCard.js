'use client'
import styles from './productCard.module.css';
import Link from 'next/link';
import { formatPrice } from '../util';

function ProductCard({product}) {
  return ( 
   <li className={styles.productCard}>
  <Link href={`/product/${product.id}`}>
    <img src={product.thumbnail} alt="product" />
    <div className={styles.info}>
      <h3>{product.title}</h3>
      <p>{formatPrice(product.price)}</p>
    </div>
  </Link>
</li>

  )
}

export default ProductCard