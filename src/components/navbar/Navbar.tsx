import { getUser } from "@/src/utils/utils";
import { useState, useEffect } from "react";
import Buttons from "./coponents/Buttons";
import { NavbarContainer } from "./coponents/containers";
import Navlinks from "./coponents/Navlinks";

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
    {user ? (<>Carrito</>) : (<Buttons></Buttons>)}
  </NavbarContainer>
  )
}
