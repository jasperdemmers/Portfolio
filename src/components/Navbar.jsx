import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavLogo from './NavLogo'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false)
    };

    useEffect(() => {
        const handleResize = () => {
            const navbarMenu = document.getElementById('navbarMenu');
            if (navbarMenu) {
                navbarMenu.classList.add('disable-transition');

                setTimeout(() => {
                    navbarMenu.classList.remove('disable-transition');
                }, 100);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    return (
        <nav className='bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark p-4 relative'>
            <div className='flex justify-between'>
                <NavLogo />
                <button className="inline-flex items-center p-2 ml-3 text-sm md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
                <div id="navbarMenu" className={`absolute top-full w-full text-center bg-background-light dark:bg-background-dark z-10 transform origin-top duration-500 ${isOpen ? 'scale-y-100' : 'scale-y-0'} md:scale-y-100 md:relative md:flex md:justify-end md:items-center md:w-auto md:bg-transparent transition-transform duration-300 ease-in-out`}>
                    <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 lg:space-x-16 md:mt-0 text-xl font-display'>
                        <li>
                            <NavLink 
                                className={({ isActive }) =>
                                    `inline-block py-2 pr-4 pl-3 md:p-0 hover:text-primary-light dark:hover:text-primary-dark ${isActive ? 'active' : ''}`
                                }
                                to="/" 
                                onClick={closeMenu}
                            >
                                <span className='nav-link'>
                                    Root(~)
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({ isActive }) =>
                                    `inline-block py-2 pr-4 pl-3 md:p-0 hover:text-primary-light dark:hover:text-primary-dark ${isActive ? 'active' : ''}`
                                }
                                to="/whoami" 
                                onClick={closeMenu}
                            >
                                <span className='nav-link'>
                                    $Whoami
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({ isActive }) =>
                                    `inline-block py-2 pr-4 pl-3 md:p-0 hover:text-primary-light dark:hover:text-primary-dark ${isActive ? 'active' : ''}`
                                }
                                to="/profile" 
                                onClick={closeMenu}
                            >
                                <span className='nav-link'>
                                    .Profile
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({ isActive }) =>
                                    `inline-block py-2 pr-4 pl-3 md:p-0 hover:text-primary-light dark:hover:text-primary-dark ${isActive ? 'active' : ''}`
                                }
                                to="/bin" onClick={closeMenu}
                            >
                                <span className='nav-link'>
                                    ./Bin
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({ isActive }) =>
                                    `inline-block py-2 pr-4 pl-3 md:p-0 hover:text-primary-light dark:hover:text-primary-dark ${isActive ? 'active' : ''}`
                                }
                                to="/ping" 
                                onClick={closeMenu}
                            >
                                <span className='nav-link'>
                                    $Ping    
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar