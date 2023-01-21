import { Routes, Route} from "react-router-dom";
import { SharedLayout } from "pages/SharedLayout/SharedLayout";
import { lazy } from "react";
import { PrivatRoute } from "./Routes/PrivetRoute";

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));



export const App = () => {

  return (
    <Routes>
      <Route exact path='/' element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path='/register' element={<PrivatRoute component={<Register />} redirectTo='/contacts' />} />
        <Route path='/login' element={<PrivatRoute component={<Login />} redirectTo='/contacts' />} />
        <Route path='/contacts' element={<PrivatRoute component={<Contacts />} redirectTo='/login' />} />
      </Route>
    </Routes>
  );
};


// import { Phonebook } from "PhonebookOnReact-hook-form/Phonebook";
// import { Contacts } from "./Contacts/Contacts";

// export function App() {

//   return (
//     <div
//         style={{
//         marginLeft:'20px'
//         }}>
        
//       <Phonebook  />
//       <Contacts />
      
//       </div>)
// };