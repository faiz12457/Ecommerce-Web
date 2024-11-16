

import { useContext, useEffect, useState } from "react";
import { Shop } from "../../contextpi";

import { CategoryCard } from "./categoryCard";
import { useParams } from "react-router-dom";
import { Loader } from "../loader/loader";
import { categoryData } from "../../axois/api_axios";



const style={
    display:"flex",
    gap:"20px",
    flexWrap:"wrap",
    marginTop:"15px",
    
    justifyContent:"center",


}
export  function Category(){

    

    const [category,setCategory]=useState([]);
    const [loading,setLoading]=useState(true);
    const {mode}=useContext(Shop);

    const styles={
        width:"95%",
        marginInline:"auto",
       
       /* padding:"10px",*/
        
        marginTop:"95px",
        backgroundColor:mode?"#1e293b":"#fff",
       
      
      }
      

useEffect(()=>{

    getData();
   
   
},[])

   async  function getData(){
   const res= await categoryData();
    setCategory(res.data);
    setLoading(false);
    }
  
    
    
  
 
     if(loading) return <Loader />
    return (

    
        <>
         
        <div style={styles} >
        <h2 style={{color:mode?"#fff":"black"}}>Categories</h2>
       <div style={style}>
        
        {category && category.map((category,index)=><CategoryCard name={category.name} key={index} slug={category.slug} />) }
        </div>
        </div>
        </> 
    )
}