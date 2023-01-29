import { Navigate} from "react-router-dom";
import { useAuth } from "hook/useAuth";

export const RestrictedRoute = ({ component: Component, redirectTo='/'}) =>{
    const { isLogIn } = useAuth();
   
    return isLogIn ? <Navigate to={redirectTo}/>   : <Component/> 
};