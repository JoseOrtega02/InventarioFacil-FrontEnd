import { handleFetchErrors } from "../../../utils/utils";
import { AddItemType } from "../YupSchemas/ItemYupSchema";
import Cookies from "js-cookie";
const backendURL = import.meta.env.VITE_BACKEND_URL
export const postItems = async(values:AddItemType[],tableId:string | undefined) =>{
    const csrfToken = Cookies.get("x-csrf-token")?.toString()
    const body = JSON.stringify({
        tableId:tableId,
        items: values
    })
    await fetch(backendURL + "/table/item",{method:"POST",body:body,headers:{
       'Content-Type': 'application/json',
        "x-csrf-token":csrfToken || ""
    },credentials:"include"})
    .then(handleFetchErrors)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>{
        if(error instanceof TypeError){
            console.error("Network error: "+error)
        }else{
            console.error("error: "+error)
        }
    })
}