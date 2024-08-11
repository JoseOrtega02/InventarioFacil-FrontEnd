import { handleFetchErrors } from "../../../utils/utils"
import { CreateTable } from "../yupSchemas/tableSchema"
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