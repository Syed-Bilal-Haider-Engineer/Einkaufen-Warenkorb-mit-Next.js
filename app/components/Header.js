'use client';;
import Link from 'next/link';
import styles from './header.module.css'
export default function Header() {

  return (
    <header className={styles['app-header']}>
        <div className={`${styles.wrapper} container`}>
            <aside>
                <Link href="/">
                    <img src="/next-logo.png" alt="Site logo" />
                </Link>
            </aside>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li className={styles.basket}>
                        <Link href="/basket">
                        Shopping Bag 
                           0
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}