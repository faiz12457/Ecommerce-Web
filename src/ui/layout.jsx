import React,{useContext, useEffect} from "react";
import { NavBar } from "../components/navbar/nav";
import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "../components/footer/footer";
import { Loader } from "../components/loader/loader";
import { Shop } from "../contextpi";


  export function Applayout(){

    const navigation=useNavigation();
    const {mode}=useContext(Shop);

    useEffect(() => {
      document.body.style.backgroundColor = mode ? "#1e293b" : "#ffffff";
      return () => {
          document.body.style.backgroundColor = ""; 
      };
  }, [mode]);
  

    if(navigation.state==="loading") return <Loader />

    return(
        
        <>
           <NavBar />
           <Outlet/>
           <Footer />
           </>
      


    )
    


}