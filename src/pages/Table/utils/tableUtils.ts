import { handleFetchErrors } from "../../../utils/utils"
import { CreateTable, DeleteTable } from "../yupSchemas/tableSchema"
import Cookies from "js-cookie"
const urlBackend= import.meta.env.VITE_BACKEND_URL

export const  createTable=async (body:CreateTable) =>{
    const csrfToken= Cookies.get("x-csrf-token")?.toString()
    const url = urlBackend + "/table/create"
    await fetch(url,{method:"POST",body:JSON.stringify(body),credentials:"include",headers: {
        'Content-Type': 'application/json',
        "x-csrf-token":csrfToken || ""
      },})
      .then(handleFetchErrors)
      .then(res=>res.json())
      .then(data=>console.log(data))
      .catch(error=>{
        if (error instanceof TypeError) {
            console.error('Network error or request was aborted:', error);
          } else {
            console.error('Fetch error:', error);
          }
      })
}
interface TableData {
  _id: string;
  owner: string;
  tableName: string;
  items: string[];
}
export const fetchTables= async(setTables: React.Dispatch<React.SetStateAction<TableData[]>>)=>{
  try{
      const response =await fetch(urlBackend+"/table",{method:"GET",credentials:"include"})
      if(response.ok){
          const result = await response.json();
          setTables(result)
      }else{
          console.log("failde to fetch")
      }
      
  }catch(error){
      if (error instanceof TypeError){
          console.error("Network shut down")
      }
      else{
          console.log("error:"+error)
      }
  }
  
}

export const deleteTable = async (values:DeleteTable) =>{
  const csrfToken= Cookies.get("x-csrf-token")?.toString()
  await fetch(urlBackend +"/table/delete",{method:"DELETE",body:JSON.stringify(values),headers:{
    'Content-Type': 'application/json',
        "x-csrf-token":csrfToken || ""
  },credentials:"include"})
  .then(handleFetchErrors)
  .then(res=>res.json())
  .then(data=>data)
  .catch(error=>{
    if(error instanceof TypeError){
      console.error("Network error")
    }else{
      console.error("error:"+error)
    }
  })
}