import { Navigate } from 'react-router-dom';
import { useAuth } from 'hook/useAuth';

export const PrivateRoute = ({ component:Component, redirectTo = '/' }) => {
  const { isLogIn } = useAuth();

  return isLogIn ? <Component/>: <Navigate to={redirectTo} />  ;
};