import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authUser } from '../store';
import { UserProvider } from '../views/contex/User';

function Navbar({children}) {
    const { user } = useRecoilValue(authUser);
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">Your App</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/users">Users</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/">
                    {user.email}
                </NavLink>
            </li>
            </ul>
        </div>
        <div className="form-inline my-2 my-lg-0">
        <NavLink exact className="btn btn-outline-white my-2 my-sm-0" to="/login">Login</NavLink>
        </div>
        </div>
    </nav>

    <div className="py-4">
        {children}
    </div>
    </div>
    
    );
}

export default Navbar;