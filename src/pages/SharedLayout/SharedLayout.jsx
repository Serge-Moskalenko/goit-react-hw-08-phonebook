import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "redux/Auth/authOperetions";
import { useAuth } from "hook/useAuth";
import { Container} from '@mui/material';
import { StyledHeader } from "./SharedLayout.styled";


const SharedLayout = () => {
    const dispatch = useDispatch();
    const { isLogIn, user } = useAuth()

    return (<main style={{ backgroundColor: '#f7d28e', minHeight:'1000px', maxHeight:'auto'}}>
        <StyledHeader>
            <b >My Phonebook</b>
            {isLogIn ?
                <>
                    <b>Welcome {user.name}</b>
                    <nav onClick={() => dispatch(logOut())} >Log out</nav>
                </>
                :
                <nav >
                    <NavLink to='/register'>Register</NavLink>
                    <br/>
                    <NavLink to='/login'>Log in</NavLink>
                </nav>}
           
        </StyledHeader>
        <Suspense fallback={null}>
            <Container
                style={{ maxWidth: 1240, margin: '0 auto', padding: '0 16px' }}>
                
            <Outlet />
            </Container>
        </Suspense>
    </main>)
};

export default SharedLayout;