import React,{createContext, useEffect,useMemo,useState} from "react";
import { getShopData, matchingData } from "./axois/api_axios";

export const Shop=createContext();

export function  Getter({children}){

    const [apidata,setApiData]=useState([])
    const [cart,setCart]=useState([]);
    const [count,setCount]=useState(0);
    const [search,setSearch]=useState();
    const [defaultData,setDefault]=useState([]);
    const [mode,setMode]=useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [totals, setTotals] = useState({ subTotal: 0, tax: 0, shipping: 15, grandTotal: 0});
    const [checkOut,setCheckOut]=useState(true);
    const [page,setPage]=useState(0);
    const [limit,setLimit]=useState(8);
    const [loading,setLoading]=useState(true);
    const [dataMatch,setDataMatch]=useState([]);
    

    useEffect(()=>{
     cartMatchData();
   
    },[])



   async function cartMatchData(){
      const res= await matchingData();
      setDataMatch(res.data.products);
    }

    
 ///  infinite scrolling and optimizing 
    const handleScroll=()=>{
      const scrollHeight=document.documentElement.scrollHeight;
      const innerHeight=window.innerHeight;
      const scrollTop=document.documentElement.scrollTop;

      if(innerHeight+scrollTop+20>=scrollHeight){
        
        setPage((prev)=> prev+1);
      }

    }

    useEffect(()=>{
      data();
      window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    
    },[page])



        
   async function data(){
    setLoading(true);
    try{
      const res=await getShopData(limit,limit*page);
      setApiData((prev)=>[...prev,...res.data.products]);   
      setDefault((prev)=>[...prev,...res.data.products]);
    
    }
    catch(error){
      console.log(error.message);

    }
    finally{
      setLoading(false);

    }
    }

    // end here
   

    function add(id){
      
      setCart((prev)=>prev.map((item)=>item.id===id&& item.quantity<10?{...item,quantity:(item.quantity||1)+1}:item))

    }

    function sub(id){
      
      setCart((prev)=>prev.map((item)=>item.id===id && item.quantity>1 ?{...item,quantity:item.quantity-1}:item))


    }

    function cartId(id){

      const SingleCart = dataMatch.find((product)=> product.id===id);
      const itemExist = cart.some((item)=>item.id===id);
      if(itemExist){
  
        add(id)
      
    }

     else{
      setCart((prevCart)=>[...prevCart,{...SingleCart,quantity:1}])
}
    
    }

    function removeItem(id){
      setCart((cart)=>cart.filter((item)=>item.id!==id))
    }

    function totalPriceQuantity(id,quantityNo){
      setCart((prev)=>
        prev.map((item)=>item.id===id?{...item, quantity:quantityNo}:item)
      )
    }



      useEffect(() => {
        const subTotal = cart.reduce((total, product) => {
          const discountPrice = product.price - product.price * (product.discountPercentage / 100);
          return total + discountPrice * (product.quantity || 1);
        }, 0);
    
        const tax = subTotal * 0.05;
        const shipping = 15.0;
        const grandTotal = subTotal + tax + shipping;
    
        setTotals({ subTotal, tax, shipping, grandTotal });
      }, [cart]);


    function onSearch(product) {
      if (search) {
          const searchTerm = search.toLowerCase();
          return product.title.toLowerCase().includes(searchTerm);
      }
      return apidata;
  }

  const filterProducts = useMemo(() => 
    apidata.filter((product) => onSearch(product)), 
    [apidata, search]
);

  

  

    function PriceFilter(val){
        if(val==="low"){
            const Price =[...apidata].sort((a,b)=>a.price - b.price);
            setApiData(Price);
        }
        else if(val==="default"){
          setApiData(defaultData);
        }

        else{
            const Price =[...apidata].sort((a,b)=>b.price - a.price);
            setApiData(Price);
        }  
    }
     

    useEffect(() => {
      setCount(cart.length);
    }, [cart]);

  
    return <Shop.Provider value={{cartId,cart,removeItem,count,totalPriceQuantity,add,sub,
    filterProducts,totals,PriceFilter,search,setSearch,mode,setMode,isCartOpen, setIsCartOpen,
    checkOut,setCheckOut,setCart,loading,
    }}>{children}</Shop.Provider>
}




