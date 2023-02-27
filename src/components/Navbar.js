import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'
export default function Navbar() {
    const auth = useAuth();
    return (
        <nav className='navc'>
            <ul>
                <NavLink to="/">Home</NavLink>&emsp;&emsp;
                <NavLink to="/about">About</NavLink>&emsp;&emsp;
                <NavLink to="/product">Products</NavLink>&emsp;&emsp;
                <NavLink to="/users">Users</NavLink>&emsp;&emsp;
                <NavLink to="/profile">Profile</NavLink>&emsp;&emsp;
                {
                    !auth.user&&
                        <NavLink to="/login">Login</NavLink>
                }
             
            </ul>
        </nav>
    )
}
