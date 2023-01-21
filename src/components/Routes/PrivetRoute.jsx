import { Navigate } from "react-router-dom";
import { useAuth } from "hook/useAuth";

export const PrivatRoute = ({ component , redirectTo='/'}) =>{
    const { isLogIn } = useAuth();
   
    return isLogIn ?<Navigate to={redirectTo }/> : component 
};