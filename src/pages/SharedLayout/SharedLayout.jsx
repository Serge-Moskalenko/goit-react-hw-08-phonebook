import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const SharedLayout = () => {
   return( <>
       <header>
           <div>My Phonebook</div>
            <nav>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/login'>Log in</NavLink>
            </nav>
        </header>
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
    
    </>)
}