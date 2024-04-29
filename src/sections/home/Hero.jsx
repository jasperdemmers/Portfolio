import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const Hero = () => {
    const [iconColor, setIconColor] = useState(determineInitialIconColor());

    function determineInitialIconColor() {
        return document.documentElement.classList.contains('dark') 
            ? { github: '#EBEBEB', linkedin: '#EBEBEB' } 
            : { github: '#232930', linkedin: '#0D67C2' };
    }

    useEffect(() => {
        const themeChangeObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isDarkMode = document.documentElement.classList.contains('dark');
                    setIconColor(isDarkMode ? { github: '#EBEBEB', linkedin: '#EBEBEB' } : { github: '#232930', linkedin: '#0D67C2' });
                }
            });
        });

        themeChangeObserver.observe(document.documentElement, {
            attributes: true
        });

        return () => themeChangeObserver.disconnect();
    }, []);

    return (
        <div className="px-4 flex flex-col md:flex-row items-center gap-4 md:pt-12">
            {/* Left hand text */}
            <div className="flex-1">
                <div className="tracking-wide font-body">
                    <span>HELLO WORLD</span>
                    <br />
                    <span>ITS ME,</span>
                </div>
                <span
                    className="tracking-wide font-display text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light dark:from-primary-dark to-accent-light dark:to-accent-dark"
                >
                    JASPER DEMMERS
                </span>
                <br />
                <span className="tracking-wide break-normal font-body antialiased">
                    I am not just living in the era of technology, I am actively shaping it.
                </span>
                <div className='mt-4 flex justify-start gap-4 pt-0 md:pt-8'>
                    <a href="https://url.jasperdemmers.com/1eIBE" target="_blank">
                        <FaLinkedin className="w-12 h-12" style={{ color: iconColor.linkedin }}/>
                    </a>
                    <a href="https://url.jasperdemmers.com/Wsifh" target="_blank">
                        <FaGithub className="w-12 h-12" style={{ color: iconColor.github }}/>
                    </a>
                </div>
            </div>
            <div className="flex-1">
                <img className="border-8 rounded-3xl border-accent-light dark:border-accent-dark" src="/portraits/straight-look.png"></img>
            </div>
        </div>
    )
}

export default Hero