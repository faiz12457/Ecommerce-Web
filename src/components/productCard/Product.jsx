import { useLoaderData } from "react-router-dom";
import styles from "./card.module.css";
import { useContext} from "react";
import { Shop } from "../../contextpi";
import { Card } from "./cardDetail";


const style={
  width:"100%",
  marginInline:"auto",
  display:"flex",
  gap:"20px",
  flexWrap:"wrap",
  justifyContent:"center",
}

export  function Product(){
  const {filterProducts,PriceFilter,mode} =useContext(Shop); 
  
 
    
    return (
        <>
        <div style={{width:"95%",marginInline:"auto",marginTop:"95px"}}>
        <div className={styles.productTitle}>
        <p style={{color:mode?"#fff":"black"}}>Products</p>

        <select name="Default" className={styles.productSelect} style={{background:mode?"#475569":"#fff",color:mode?"#fff":"black"}} onChange={(e)=> PriceFilter(e.target.value)} >
  <option value="default">Default</option>
  <option value="low">Price (low to high)</option>
  <option value="high">Price (high to low)</option>
  
</select>
        
        </div>
        
        <div style={style}>
        {filterProducts && filterProducts.map((products)=><Card product={products} key={products.id} />) }
       
        </div>
        </div>
        </> 
    )
}


