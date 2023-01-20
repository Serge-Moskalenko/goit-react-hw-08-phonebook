import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "pages/SharedLayout/SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/contacts' element={<Contacts />} /> */}
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