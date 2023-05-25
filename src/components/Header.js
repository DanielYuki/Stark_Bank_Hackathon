import React from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../logoName.png"
import './Components.css'

export default function Header() {
    const activeStyles = {
        color: "white",
        backgroundColor: "#B325F6",
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">
                <img width="200px" src={logo} alt="logo" />
            </Link>
            <nav>
                <NavLink 
                    className="link validation-link"
                    to="/validation"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    VALIDATION
                </NavLink>
                <NavLink 
                    className="link forms-link"
                    to="/forms"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    FORMS
                </NavLink>
            </nav>
        </header>
    )
}