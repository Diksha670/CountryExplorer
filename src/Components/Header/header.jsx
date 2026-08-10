import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from "react-router-dom"

export const Header=()=>
{
    const [show,setShow]=useState(false)
    const handleButtonToggle=()=>
    {
        setShow(!show);
    }
    return <header>
        <div className="container">
            <div className="navbargrid">
            <div className="logo">
                <NavLink to='/'>
                <h1>WorldAtlas</h1>
                </NavLink>

            </div>
            <div>
                <nav className={show?'menu-mobile':'menuweb'}>
                <ul className="ulList">
                    <li><NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
                    <li><NavLink to='/about' className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink></li>
                    <li><NavLink to='/country' className={({ isActive }) => isActive ? 'active-link' : ''}>Country</NavLink></li>
                    <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'active-link' : ''}>Contact</NavLink></li>
                </ul>
            </nav>
            </div>
            
            <div className="ham-menu">
                <button onClick={handleButtonToggle} className="ham-Btn">
                    <GiHamburgerMenu></GiHamburgerMenu>
                </button>
            </div>
            </div>
        </div>
    </header>
}
