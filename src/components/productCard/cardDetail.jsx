import styles from "./card.module.css";
import React,{useContext, useState} from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Shop } from "../../contextpi";
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

 export function Card({product}){
   
    const {cartId,mode}=useContext(Shop);
    const {title,rating ,price,id,thumbnail,category,discountPercentage}=product;
    const name=title.slice(0,15);
    const discountPrice = price - (price * (discountPercentage / 100));

    function cartAdd(){
      cartId(id);
      toast.success("item added to cart successfully",{
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        transition: Zoom,
        closeButton: false,
          bodyClassName: "custom-toast-body",
         className: "custom-toast",
          
        
      });
      
    }

    return (

      <>
      <div className={styles.cardContainer}  style={{backgroundColor:mode?"#1e293b":"#fff",borderColor:mode?"#fff":"#D7D5D1"}}>
        <div className={styles.CardImgCon}>
        <img src={thumbnail}></img>
        </div>
        <div className={styles.CardInfoCon}>
        <div style={{width:"240px",marginInline:"auto"}}>
        <div className={styles.titleCon}>
        <div >
        
          <p className={styles.category} style={{color:mode?"#fff":"black"}}>{category}</p>
         <NavLink to={`/product/${id}`} style={{textDecoration:"none"}}> <p className={styles.cardTitle} style={{color:mode?"#fff":"black"}}>{title}</p></NavLink>
      
        </div>
        </div>
        <div className={styles.rating}>
        
          <FaStar style={{fill: rating>=1? "yellow":"grey"}}/>
          <FaStar  style={{fill: rating>=2? "yellow":"grey"}} />
          <FaStar  style={{fill: rating>=3? "yellow":"grey"}} />
          <FaStar  style={{fill: rating>=4? "yellow":"grey"}} />
          <FaStar  style={{fill: rating>=5? "yellow":"grey"}} />

          <p style={{color:mode?"#fff":"black"}}>{rating}</p>
      
          </div>
          <div className={styles.priceCon}>
          <div className={styles.itemPrice} >
          <p className={styles.disPrice}>${discountPrice.toFixed(2)}</p>
          <p className={styles.orignalPrice}>${price}</p>
          <p className={styles.discount} style={{color:mode?"#fff":"black"}}>{discountPercentage}%</p>
          </div>


          <div className={styles.cartContainer} onClick={cartAdd}>
          <div className={styles.addCartIcon}>
          <AiOutlineShoppingCart   style={{fill:"white"}}/>
          </div>
          <div className={styles.cartText}>
          <span>ADD TO CART</span>
          </div>
        

          </div>
        </div>
        </div>
        

        </div>
      </div>
    </>

    )
}