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
      const errorMessage = errorData?.message || response.statusText || 'Unknown error';
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    return response;
  }