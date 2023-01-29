import { Routes, Route} from "react-router-dom";
import { useDispatch } from "react-redux";
import { lazy ,useEffect} from "react";
import SharedLayout  from "pages/SharedLayout/SharedLayout";
import { RestrictedRoute } from "./Routes/RestrictedRoute";
import { PrivateRoute } from "./Routes/PrivatRoute";
import { useAuth } from "hook/useAuth";
import PropagateLoader from 'react-spinners/PropagateLoader';
import { refreshUser } from "redux/Auth/authOperetions";

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (<>
    {
      isRefreshing
        ?
        < PropagateLoader color='#363cd6' size={20} cssOverride={{
          display: "block",
          margin: "40px"
        }} />
        :
        <Routes>
          <Route exact path='/' element={<SharedLayout />} >
            <Route index element={<RestrictedRoute component={Home} redirectTo='/contacts' />} />
            <Route path='/register' element={<RestrictedRoute component={Register} redirectTo='/contacts' />} />
            <Route path='/login' element={<RestrictedRoute component={Login} redirectTo='/contacts' />} />
            <Route path='/contacts' element={<PrivateRoute component={Contacts} redirectTo='/login' />} />
          </Route>
        </Routes>}
  </>
    
  );
};