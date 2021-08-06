import React from 'react';


const Nav = () => {
    return (
        
            <NavMenu>
                <Nav to='/home' activeStyle>
                    Home
                </Nav>
                <NavLink to='/profile' activeStyle>
                    Profile
                </NavLink>
                <NavLink to='/messages' activeStyle>
                    Messages
                </NavLink>
                <NavLink to='/posts' activeStyle>
                    Posts
                </NavLink>
                <NavLink to='/login' activeStyle>
                    Login
                </NavLink>
            </NavMenu>

            
    )
}

export default Nav

