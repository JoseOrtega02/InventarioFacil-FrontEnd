import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../../utils/utils";

interface Props{
    component: React.ComponentType,
    path?: string
}

export const PrivateRoute: React.FC<Props> = ({component:RouteComponent})=>{
    const user = getUser()
    if(!user){
        return <RouteComponent/>
    }
    return <Navigate to="/"/>
} 