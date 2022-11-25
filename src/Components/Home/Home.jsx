import React from 'react'
import Cart from "../Cart/Cart"
import Products from "../Products/Products"
import styles from "./styles.module.scss"

function Home() {
  return (
    <div className={styles.home}> 
      <Cart/>
      <Products/>
    </div>
  )
}

export default Home