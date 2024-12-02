import { getUser } from "@/src/utils/utils";
import { useState, useEffect, useCallback } from "react";
import Buttons from "./components/Buttons";
import { NavbarContainer } from "./components/containers";
import Navlinks from "./components/Navlinks";
import SaleCart from "./components/SaleCart";
import { SecondaryButton } from "../styledComponents/Buttons";
import { logOutFetch } from "@/src/pages/Login/utils/loginUtils";
import { useAuth } from "../AuthProvider";

function LogOut(){
  const { setIsLoggedIn } = useAuth();
  const handleLogout= async ()=>{
await logOutFetch()
setIsLoggedIn(false)
  }
  return (<SecondaryButton onClick={handleLogout}>LogOut</SecondaryButton>)
}

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  const [user, setUser] = useState<null | object>(null); // Replace `any` with the correct user type if available
 const fetchUser =useCallback(async () => {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
    },[user]) 
  useEffect(() => {
   

    fetchUser();
    console.log("fetched user")
  }, []);

  return (<NavbarContainer>
    <Navlinks />
    {isLoggedIn ? (<>
    <LogOut/>
    <SaleCart /></>) : (<Buttons></Buttons>)}
  </NavbarContainer>
  )
}
