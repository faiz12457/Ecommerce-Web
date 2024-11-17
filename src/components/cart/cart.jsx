import React, { useContext, useState } from 'react';
import style from './cart.module.css';
import { Shop } from '../../contextpi';
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

 function Cart({ cart }) {
  const { removeItem,mode,add,sub } = useContext(Shop);
  
  const discountPrice = cart.price - (cart.price * (cart.discountPercentage / 100));

 
  return (
    <div className={style.cartInfo} style={{borderColor:mode?"#fff":"#D7D5D1",color:mode?"#fff":"black"}}>
      <div className={style.cartImgSecCon}>
        <img src={cart.thumbnail} alt={cart.title} className={style.cartImgSec} />
      </div>
      <div className={style.cartInfoSecCon}>
        <p className={style.cartInfoTitle} style={{color:mode?"#fff":"black"}}>{cart.title}</p>
        <div>
          <p className={style.cartInfoPrice}  style={{color:mode?"#fff":"black"}}>${(discountPrice * cart.quantity).toFixed(2)}</p> 
          <span className={style.cartInfoDisc}  style={{color:mode?"#fff":"black"}}>-{cart.discountPercentage}%</span>
        </div>
        <div className={style.cartAdd}>
          <FiMinusCircle onClick={()=>sub(cart.id)} style={{cursor:"pointer"}} />
          <span className={style.cartVal}>{cart.quantity||1}</span> 
          <FiPlusCircle onClick={()=>add(cart.id)} style={{cursor:"pointer"}} />
        </div> 
      </div>
      <div className={style.cartDeleteSecCon}>
        <p className={style.cartDPrice}>${(discountPrice * cart.quantity).toFixed(2)}</p>
        <RiDeleteBin6Line 
          style={{ fill: "red", cursor: "pointer" }} 
          size={25} 
          onClick={() => removeItem(cart.id)} 
        />
      </div>
    </div>
  );
}



export default Cart;
