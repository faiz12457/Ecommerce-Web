import React from 'react';
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import styles from './ShoppingCard.module.css';
import { useContext } from 'react';
import { Shop } from '../../contextpi';
import { categoryProducts, singleProductInfo } from '../../axois/api_axios';
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { Loader } from '../loader/loader';
import { Review } from './review';
import { Card } from '../productCard/cardDetail';
import { toast } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import "./toast.css";




export function ProductDetail(){


    const parms=useParams();
    const {id}=parms;
    const [product,setProduct]=useState({});
    const [loading,setLoading]=useState(true);
    const [categoryData,setCategoryData]=useState([]);
    const {cartId,mode,setIsCartOpen}=useContext(Shop);
    const {thumbnail,title,price,rating,reviews,description,stock,brand,category,
        discountPercentage
        }=product;

        const discountPrice = price - (price * (discountPercentage / 100));
 
     useEffect(()=>{
        data();
     },[parms,category])
 

     async function data() {
        const res = await singleProductInfo(id);
        setProduct(res.data);
    
        
            const res2 = await categoryProducts(res.data.category);
            setCategoryData(res2.data.products.slice(0, 4));
        
        
        setLoading(false);
    }

    function buyNow(){
        setIsCartOpen(true);
        cartId(product.id);

    }

    function cartAdd(){
        cartId(product.id);
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

      function wishListAdd(){
        toast.success("item added to your wishlist",{
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            transition: Zoom,
            closeButton: false,
          bodyClassName: "custom-toast-body",
         className: "custom-toast",
            
            
          })
      }



 if(loading) return   <Loader />
    return (
        <>
          
        <div className={styles.SingleInfoCon}>
      
            <div className={styles.SingleInfoImgCon}>
                <div><img src={thumbnail} alt={title} className={styles.SingleInfoImg} /></div>

            </div>
            <div className={styles.SingleInfoDetailsCon}>
                <div className={styles.SingleInfoTitle}><p style={{color:mode?"#fff":"black"}}>{title}</p></div>
                <div  className={styles.SingleInfoRating}>
                    
                    <FaStar style={{fill: rating>=1? "yellow":"grey"}}/>
                    <FaStar  style={{fill: rating>=2? "yellow":"grey"}} />
                    <FaStar  style={{fill: rating>=3? "yellow":"grey"}} />
                    <FaStar  style={{fill: rating>=4? "yellow":"grey"}} />
                    <FaStar  style={{fill: rating>=5? "yellow":"grey"}} />
                    <p style={{color:mode?"#fff":"black"}}>{rating}</p>
                          </div>

                <div className={styles.SingleInfoPriceCon}>
                    <p className={styles.SingleInfoPriceP}>${discountPrice.toFixed(2)}</p>
                    <div className={styles.SingleInfoDiscountCon}>
                    <p className={styles.orgPrice}>${price}</p>
                    <p className={styles.discount} style={{color:mode?"#fff":"black"}}>-{ discountPercentage}%</p>
                    
                    </div>
                </div>

                <div className={styles.brandSec} style={{color:mode?"#fff":"black"}}>
                    <div className={styles.brand}><p className={styles.title}>Brand :</p> <p className={styles.title}>Category :</p> <p className={styles.title}>Stock :</p> </div>
                    <div className={styles.brand}> <p className={styles.brandInfo}>{brand||"Unavailable"}</p><p className={styles.brandInfo}>{category||"Unavailable"}</p> <p className={styles.brandInfo}>{stock||"Unavailable"}</p></div>
                </div>

                <p className={styles.aboutProduct} style={{color:mode?"#fff":"black"}}>About the product</p>
                <p style={{color:mode?"#fff":"black"}}>{description}</p>

                <div className={styles.buttonCon}>
                    <button className={styles.cartButton} onClick={cartAdd}><AiOutlineShoppingCart style={{fill:"white" ,marginRight:"4px"}} size={17} />ADD TO CART</button>
                    <button className={styles.buyNowButton} onClick={buyNow}><FaHandHoldingDollar style={{fill:"white",marginRight:"4px"}} size={17}/>BUY NOW</button>
                    <button className={styles.wishListButton} onClick={wishListAdd}><CiHeart style={{fill:"white",marginRight:"2px"}} size={19} />ADD TO WISHLIST</button>
                </div>
          
            </div>


          
            <div className={styles.SingleInfoReviewCon} style={{color:mode?"#fff":"black"}}>
                <p className={styles.review}>Reviews</p>

                <div className={styles.reviewParent}>
                    {reviews.map((review,index)=> <Review  review={review} key={index} /> )}
                </div>
            </div>
        </div>


        {/*  SIMILAR PRODUCTS SECTION */}

        <div className={styles.similarProduct}>
        <p className={styles.similarTitle}  style={{color:mode?"#fff":"black"}}>Similar Products</p>
        <div className={styles.similarCardCon}>
        {categoryData&&categoryData.map((product,index)=>{
            return <Card product={product} key={index} />
        })}
            
        </div>
        </div>

         {/*  SIMILAR PRODUCTS SECTION END */}

</>


    )

  
  
}