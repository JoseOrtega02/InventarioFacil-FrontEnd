import Cookies from "js-cookie"
export const getCRSFToken= async ()=>{
    const url = import.meta.env.VITE_BACKEND_URL + "/csrf-token"
    await fetch(url,{method:"GET",credentials:"include"})
    .then(res=>res.json())
    .then((res)=>{

        Cookies.set("x-csrf-token",res.csrfToken)
        alert('cookieSetting correct');
    })
    .catch(err=>console.error(err))
} 