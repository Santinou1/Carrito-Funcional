import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { ProductsData } from "../../Data/PoductsData";
import styles from "./styles.module.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Icon } from "@mui/material";

function Products() {
  const { AddItemToCart } = useContext(CartContext);



  return (
    
    <div className={styles.productsContainer}>
      {ProductsData.map((product, i) => (
        <div key={i} className={styles.product}>
          <img src={product.img} alt={product.name} />
          <div>
            <p>
              {product.name}
            </p>
            <p>
            ${product.price}
            </p>
            <p>
            {product.description}

            </p>
          </div>
          <button  className={styles.btn} onClick={() => AddItemToCart(product)}> 
          <AddShoppingCartIcon />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
