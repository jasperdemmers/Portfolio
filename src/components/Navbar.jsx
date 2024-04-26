import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavLogo from './NavLogo'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false)
    };

    return (
        <nav className='bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark p-4 relative'>
            <div className='container flex mx-auto justify-between items-center'>
                <NavLogo />
                <button className="inline-flex items-center p-2 ml-3 text-sm md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
                <div className={`absolute top-full left-0 w-full bg-background-light dark:bg-background-dark z-10 transform ${isOpen ? 'scale-y-100' : 'scale-y-0'} md:scale-y-100 md:relative md:flex md:flex-row md:items-center md:w-auto md:bg-transparent transition-transform duration-300 ease-in-out`}>
                    <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 lg:space-x-16 md:mt-0 text-xl font-display'>
                        <li>
                            <NavLink className="block py-2 pr-4 pl-3 md:p-0" to="/" onClick={closeMenu}>Root(~)</NavLink>
                        </li>
                        <li>
                            <NavLink className="block py-2 pr-4 pl-3 md:p-0" to="/whoami" onClick={closeMenu}>$Whoami</NavLink>
                        </li>
                        <li>
                            <NavLink className="block py-2 pr-4 pl-3 md:p-0" to="/profile" onClick={closeMenu}>.Profile</NavLink>
                        </li>
                        <li>
                            <NavLink className="block py-2 pr-4 pl-3 md:p-0" to="/bin" onClick={closeMenu}>./Bin</NavLink>
                        </li>
                        <li>
                            <NavLink className="block py-2 pr-4 pl-3 md:p-0" to="/ping" onClick={closeMenu}>$Ping</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar