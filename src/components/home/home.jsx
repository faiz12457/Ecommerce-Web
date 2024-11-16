import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Shop } from "../../contextpi";
import styles from "./home.module.css"
import { NavLink} from "react-router-dom";
import heroImg from "./hero.png"
import heroImg2 from "./banner.jpg"
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { InfoCard } from "./infoCard";
import info from "./infoSection.json"
import { Card } from "../productCard/cardDetail";
import { getTendingProductData } from "../../axois/api_axios";

export function Home() {
     const [trending,setTrending]=useState([]);
     const {mode}=useContext(Shop);

     useEffect(()=>{
      trendingData();
        
      
     },[])

    async function trendingData(){
      const res= await getTendingProductData();
      setTrending(res.data.products);
     }

    
     

  const infoIcon={
          TbTruckDelivery:<TbTruckDelivery size={38} style={{color:mode?"white":"black"}} />,
          RiDiscountPercentLine:<RiDiscountPercentLine size={38} style={{fill:mode?"white":"black"}}/>, 
          RiRefund2Fill:<RiRefund2Fill size={38} style={{fill:mode?"white":"black"}}/>,
           MdSupportAgent:<MdSupportAgent size={38} style={{fill:mode?"white":"black"}} />
  }

  

  return (
    <>
    <div className={styles.homeContainer} style={{backgroundColor:mode?"#475569":"#e3edf6"}}>

    {/* HERO SECTION TEXT*/ }
    <div className={styles.homeInnerCon}>
    <div className={styles.heroSec}>
      <div className={styles.heroContent}>
      <div><p style={{color:mode?"#ffffff":"black"}}>Starting At $999</p></div>
      <div className={styles.HeroHeading}><p style={{color:mode?"#ffffff":"black"}}>The best notebook collection 2024</p></div>
      <div className={styles.HeroOffer}><p style={{color:mode?"#ffffff":"black"}}>Exclusive offer <span>-10% </span>off this week</p></div>
      <NavLink to="/products"><button className={styles.HeroButton}>Shop Now</button></NavLink>
      </div>
    </div>
      {/* HERO SECTION TEXT  END*/ }


  {/* HERO SECTION IMG*/ }
    <div className={styles.heroSecImg}>
      <img src={heroImg}></img>
    </div>
    </div>
    </div>
      {/* HERO SECTION IMG END*/ }



    <div className={styles.infoSection} style={{backgroundColor:mode?"#1e293b":"#fff"}}>
    {info.map((singleInfo,index)=>{
      return  <InfoCard singleInfo={singleInfo} Icon={infoIcon[singleInfo.icon]}  key={index} />

    })}
    </div>
    

    {/*       trending products              */}
    <div className={styles.trendingCon}>
    <p className={styles.trendingHeading} style={{color:mode?"#fff":"black"}}>Trending Products</p>
    <div className={styles.trending}>
      {
        trending&& trending.map((product,index)=>{
          return <Card product={product} key={index} />

        })
      }
    </div>
    </div>
    { /*    End of trending products      */}






    <div className={styles.secHero} style={{backgroundColor:mode?"#475569":"#e3edf6"}}>
    <div className={styles.secHeroImg}>
 
    <img src={heroImg2}></img>
    </div>
    <div className={styles.herosec2Content}>
    <div className={styles.herosec2Contentparent}>
      <h1 style={{color:mode?"#fff":"black"}}>Don't miss the offer</h1>
      <h1 style={{color:mode?"#fff":"black"}}>Grab it now</h1>
      <NavLink to="/products"><button className={styles.HeroButton} style={{marginTop:"10px",color:mode?"#fff":"black",backgroundColor:mode?"#1e293b":"#fff"}} >Shop Now</button></NavLink>
      </div>
    </div>

    </div>




    {/*       New Arrivals              */}
    <div className={styles.trendingCon}>
    <p className={styles.trendingHeading} style={{color:mode?"#fff":"black"}}>New Arrivals</p>
    <div className={styles.trending}>
      {
        trending&& trending.map((product,index)=>{
          return <Card product={product}  key={index}/>

        })
      }
    </div>
    </div>
    { /*    End of New Arrivals      */}
   
    </>
  
  );
}
