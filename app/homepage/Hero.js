import styles from './hero.module.css';

function Hero() {
  return (
       <div className={styles.hero}>
      <img src="/hero.png" alt="hero image" />
    </div>

  )
}

export default Hero
