import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../../utils/utils";
interface Props {
    component: React.ComponentType,
    path?: string
  }
export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    const [user, setUser] = useState<null | object>(null); // Replace `any` with the correct user type if available
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchUser = async () => {
        const fetchedUser = await getUser();
        setUser(fetchedUser);
        setLoading(false);
      };
      
      fetchUser();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>; 
    }
  
    if (!user) {
      return <Navigate to="/" />;
    }
  
    return <RouteComponent />;
  };