import { useContext, useEffect, useState } from "react"
import { categoryProducts } from "../../axois/api_axios";
import { useParams } from "react-router-dom";
import { Card } from "../productCard/cardDetail";
import styles from "./category.module.css";
import { PiGreaterThanBold } from "react-icons/pi";
import { Loader } from "../loader/loader";
import { Shop } from "../../contextpi";















export function CategoryProduct(){
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(true);
    const parms=useParams();
    const {name}=parms;
    const {mode}=useContext(Shop);
    useEffect(()=>{
        setLoading(true);
   data();
    },[])


    async function data(){
        const res= await categoryProducts(name)
        setProduct(res.data.products);
        setLoading(false);
    }


 console.log(product);

  if(loading) return   <Loader /> 
   return ( 
    <div style={{marginTop:"100px", width:"95%", marginInline:"auto" }}>
    <div className={styles.CategoryNameCon}>
  
    
        <p className={styles.Categoryy} style={{color:mode?"#fff":"black"}}>
           Categories
        </p>
        <PiGreaterThanBold style={{fill:mode?"#fff":"black"}} />
        <p className={styles.CategoryName} style={{color:mode?"#fff":"black"}}>{name}</p>
        </div>

        <div style={{display:"flex",flexWrap:"wrap",gap:"20px",justifyContent:"center" }}>
            {
                product&& product.map((product,index)=>{
                  return  <Card product={product} key={index}/>
                })
            }
        </div>
    </div>
   
   
   
   
   
   
)
}