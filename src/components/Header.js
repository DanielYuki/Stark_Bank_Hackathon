import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">#STARKBANK</Link>
            <nav>
                <NavLink 
                    to="/forms"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Forms
                </NavLink>
                <NavLink 
                    to="/validation"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Validation
                </NavLink>
            </nav>
        </header>
    )
}