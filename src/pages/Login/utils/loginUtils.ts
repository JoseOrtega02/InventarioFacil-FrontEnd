import { UserLogin } from "../schemaYup/UserSchema";
import Cookies from "js-cookie";
export const loginFetch =async (user:UserLogin)=>{
    const url= import.meta.env.VITE_BACKEND_URL +"/user/login"
    const csrfToken= Cookies.get("x-csrf-token")?.toString()
    console.log(csrfToken)
    const data= {
      username: user.userName,
      password: user.password
    }
    await fetch(url,{
        method: 'POST',
        credentials: 'include', // Include credentials
        headers: {
          'Content-Type': 'application/json',
          "x-csrf-token":csrfToken || ""
        },
        body: JSON.stringify(data),
      })
    
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}