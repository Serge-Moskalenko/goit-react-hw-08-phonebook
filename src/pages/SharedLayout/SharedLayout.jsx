import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "redux/Auth/authOperetions";
import { useAuth } from "hook/useAuth";


const SharedLayout = () => {
    const dispatch = useDispatch();
    const { isLogIn, user } = useAuth()

    return (<>
        <header>
            <div>My Phonebook</div>
            {isLogIn ?
                <>
                    <b>Welcome {user.name}</b>
                    <nav onClick={() => dispatch(logOut())} >Log out</nav>
                </>
                :
                <nav>
                    <NavLink to='/register'>Register</NavLink>
                    <NavLink to='/login'>Log in</NavLink>
                </nav>}
           
        </header>
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
    </>)
};

export default SharedLayout;