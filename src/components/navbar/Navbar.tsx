import { getUser } from "@/src/utils/utils";
import { useState, useEffect } from "react";
import Buttons from "./components/Buttons";
import { NavbarContainer } from "./components/containers";
import Navlinks from "./components/Navlinks";
import SaleCart from "./components/SaleCart";

export default function Navbar() {

  const [user, setUser] = useState<null | object>(null); // Replace `any` with the correct user type if available

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
    };

    fetchUser();
  }, []);

  return (<NavbarContainer>
    <Navlinks />
    {user ? (<SaleCart />) : (<Buttons></Buttons>)}
  </NavbarContainer>
  )
}
