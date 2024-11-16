import styles from "./category.module.css";
import React,{useContext, useState} from "react";
import { CgDetailsLess } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { IoBookmark } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Shop } from "../../contextpi";

import { NavLink } from "react-router-dom";

 export function CategoryCard({name,slug}){
   /* const [color,setColor]=useState(false);
   
    const {title,rating ,price,images,id,thumbnail}=product;
    const name=title.slice(0,15);*/
    const {mode}=useContext(Shop);
    return (

 <>
   <div className={styles.CategoryCardcontainer} style={{backgroundColor:mode?"#475569":"#f3f4f6"}}>
   <p style={{color:mode?"#fff":"black"}}>{name}</p>
   <NavLink to={`/category/${slug}`}>View products</NavLink>

   </div>
 </>

    )
}