import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavLogo = () => {
    const [logoSrc, setLogoSrc] = useState(determineInitialLogo());

    function determineInitialLogo() {
        return document.documentElement.classList.contains('dark') 
            ? '/logo/logo_white.svg' 
            : '/logo/logo_black.svg';
    }

    useEffect(() => {
        const themeChangeObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isDarkMode = document.documentElement.classList.contains('dark');
                    setLogoSrc(isDarkMode ? '/logo/logo_white.svg' : '/logo/logo_black.svg');
                }
            });
        });

        themeChangeObserver.observe(document.documentElement, {
            attributes: true
        });

        return () => themeChangeObserver.disconnect();
    }, []);

    return (
        <NavLink to="/" className='flex items-center'>
            <img src={logoSrc} alt="Logo" className='h-8 mr-2'/>
        </NavLink>
    );
}

export default NavLogo;