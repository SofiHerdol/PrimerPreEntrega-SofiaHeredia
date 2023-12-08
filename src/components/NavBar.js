import React from 'react'
import "./styles/NavBar.css"
import logo from "../media/LumiereLogo.png"
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
    <div>
        <nav>
            <a href='/'><img src={logo} alt="Lumiere Logo" className='Logo'></img></a>
            <ul>
                <li>
                    <Link to="/">I n i c i o</Link>
                </li>
                <li>
                    <Link to="/rings">A n i l l o s</Link>
                </li>
                <li>
                    <Link to="/necklaces">C o l l a r e s</Link>
                </li>
                <li>
                    <Link to="/earrings">P e n d i e n t e s</Link>
                </li>
                <li>
                    <Link to="/custom-pieces">P i e z a s ㅤÚ n i c a s</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar