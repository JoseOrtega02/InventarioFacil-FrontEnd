import { UserRegister } from "../schemaYup/UserSchema"
import Cookies from "js-cookie"
export const registerFetch =async (user:UserRegister)=>{
    const url= import.meta.env.VITE_BACKEND_URL +"/user/register"
    const csrfToken= Cookies.get("x-csrf-token")?.toString()
    console.log(csrfToken)
    const data= {
      username: user.username,
      password: user.password,
      email:user.email
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
    .then(res=>JSON.stringify(res))
    .then(res=>console.log(res))
    .catch(err=>console.error(err.json()))
}