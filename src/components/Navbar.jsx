import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false)
    };

    return (
        <nav className='bg-transparent text-text-light p-4 relative'>
            <div className='container flex mx-auto justify-between items-center'>
                <NavLink to="/" className='flex items-center'>
                    <img src="/banner.svg" alt="Logo" className='h-8 mr-2' />
                </NavLink>
                <button className="inline-flex items-center p-2 ml-3 text-sm text-text-light rounded-lg md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
                <div className={`absolute top-full left-0 w-full bg-background-light z-10 transform ${isOpen ? 'scale-y-100' : 'scale-y-0'} md:scale-y-100 md:relative md:flex md:flex-row md:items-center md:w-auto md:bg-transparent transition-transform duration-300 ease-in-out`}>
                    <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                        <li>
                            <NavLink className="block py-2 pr-4 pl-3 text-text-light text-xl hover:bg-accent-light rounded md:hover:bg-transparent md:p-0" to="/" onClick={closeMenu}>Root(~)</NavLink>
                        </li>
                        <li>
                            <NavLink className="block py-2 pr-4 pl-3 text-text-light text-xl hover:bg-accent-light rounded md:hover:bg-transparent md:p-0" to="/whoami" onClick={closeMenu}>$Whoami</NavLink>
                        </li>
                        <li>
                            <NavLink className="block py-2 pr-4 pl-3 text-text-light text-xl hover:bg-accent-light rounded md:hover:bg-transparent md:p-0" to="/profile" onClick={closeMenu}>.Profile</NavLink>
                        </li>
                        <li>
                            <NavLink className="block py-2 pr-4 pl-3 text-text-light text-xl hover:bg-accent-light rounded md:hover:bg-transparent md:p-0" to="/bin" onClick={closeMenu}>./Bin</NavLink>
                        </li>
                        <li>
                            <NavLink className="block py-2 pr-4 pl-3 text-text-light text-xl hover:bg-accent-light rounded md:hover:bg-transparent md:p-0" to="/ping" onClick={closeMenu}>$Ping</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar