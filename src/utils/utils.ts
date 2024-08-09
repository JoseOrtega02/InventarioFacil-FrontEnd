import Cookies from "js-cookie"
export const getCRSFToken= async ()=>{
    const url = import.meta.env.VITE_BACKEND_URL + "/csrf-token"
    await fetch(url,{method:"GET",credentials:"include"})
    .then(res=>res.json())
    .then((res)=>{
        Cookies.set("x-csrf-token",res.csrfToken)
    })
    .catch(err=>console.error(err))
} 
export const handleFetchErrors = async (response: { ok: any; json: () => Promise<any>; statusText: any; status: any }) => {
    if (!response.ok) {
      const errorData = await response.json().catch(() => null); // Try to parse JSON error body
      const errorMessage = errorData?.message ||errorData?.error || response.statusText || 'Unknown error';
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    return response;
  }

export const getUser=async () =>{
    const backendUrl = import.meta.env.VITE_BACKEND_URL + "/user"
    const user = fetch(backendUrl)
    .then(handleFetchErrors)
    .then(res=>res.json())
    .then(data=>data)
    .catch((error)=>{
      if (error instanceof TypeError) {
        console.error('Network error or request was aborted:', error);
      } else {
        console.error('Fetch error:', error);
      }
    })
    return user
}