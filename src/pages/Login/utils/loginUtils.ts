import { UserLogin } from "../schemaYup/UserSchema";

export const loginFetch =async (user:UserLogin) =>{
    const url = import.meta.env.VITE_BACKEND_URL + "login"
    await fetch(url,{method:"POST",body:JSON.stringify(user)})
    .then(res=>JSON.stringify(res))
    .then((res)=>{
        console.log(res)
        alert(res)
    })
    .catch((err)=>{
        console.log(err.msg)
        alert(err)
    })
}