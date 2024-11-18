import axios from "axios";


const api=axios.create({
    baseURL:"https://dummyjson.com/",

})



export const getShopData=(limit,skip)=>{

   return  api.get(`products?limit=${limit}&skip=${skip}`);

}


export function matchingData(){
    return api.get("products?limit=0");

}
export const singleCategory=({params})=>{
    const {category}=params;
    return api.get(`/${category}`);

}

export const categoryData=()=>{
    return api.get("/products/categories");
}

export const getTendingProductData=()=>{

    return  api.get("products?limit=8");
 
 }

 export const categoryProducts=(name)=>{
    return api.get(`products/category/${name}`)

 }

 export const singleProductInfo=(id)=>{
    return api.get(`products/${id}`)


 }










