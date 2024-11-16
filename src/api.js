import { getShopData } from "./axois/api_axios";


export const getData=async()=>{
    
try{
      const response= await getShopData();
      return response;

}
catch(error){
    console.log(error.message);

}
}
