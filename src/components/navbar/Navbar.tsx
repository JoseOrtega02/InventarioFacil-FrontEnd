import Buttons from "./components/Buttons";
import { NavbarContainer } from "./components/containers";
import Navlinks from "./components/Navlinks";
import SaleCart from "./components/SaleCart";
import { SecondaryButton } from "../styledComponents/Buttons";
import { logOutFetch } from "@/src/pages/Login/utils/loginUtils";
import useLoggingStore from "@/src/pages/zustand/logginState";
import { ButtonsContainer } from "@/src/pages/Table/StyledComponents/Components";
import LogOutIcon from "../styledComponents/LogOutIcon";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "@/src/utils/utils";

function LogOut(){
  const { setIsLogging } = useLoggingStore();
  const navigate = useNavigate()
  const handleLogout= async ()=>{
await logOutFetch()
setIsLogging(false)
navigate("/")
  }
  return (<SecondaryButton onClick={handleLogout}><LogOutIcon/>LogOut</SecondaryButton>)
}

export default function Navbar() {
  const { isLogging } = useLoggingStore();
  const {setIsLogging} = useLoggingStore()
  const fetchUser = async()=>{
    await getUser()
    .then((data)=>{
      if(data){
        setIsLogging(true)
      }
    })
    .catch(()=>setIsLogging(false))
  }
useEffect(()=>{
  fetchUser()
},[])

  return (<NavbarContainer>
    <Navlinks />
    {isLogging ? (<ButtonsContainer>
    <LogOut/>
    <SaleCart /></ButtonsContainer>) : (<Buttons></Buttons>)}
  </NavbarContainer>
  )
}
