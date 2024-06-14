import React from 'react';
import styles from "./page.module.css";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div>
          <p className={styles.title}>Don't Think 55 Times - Just eat!</p>
        </div>
        <div>
          <p className={styles.subtitle}>The most delicious pizza you have ever tasted! Long-term heritage from the 1960s to the 2020s kept specially for pizza lovers! Visit us and you will never go back.</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>Order now</button>
          <button className={styles.button}>View menu</button>
        </div>
      </div>
      <div className={styles.image}>
        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pizza" className={styles.pizzaImage} />
      </div>
    </div>
  )
}

export default Page;
