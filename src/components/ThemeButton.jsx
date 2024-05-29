import { CiDark, CiSun } from "react-icons/ci";
import { useEffect, useState } from "react";

const ThemeButton = () => {
    const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

    const toggleDark = () => {
        document.documentElement.classList.toggle('dark')
        setIsDark(!isDark);
    }

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsDark(document.documentElement.classList.contains('dark'));
                }
            });
        });


        observer.observe(document.documentElement, {
            attributes: true
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="fixed bottom-0 right-0 p-8">
            <button onClick={toggleDark} className="bg-primary-light dark:bg-primary-dark rounded-2xl p-1 md:p-2 flex justify-center items-center">
                {isDark ? 
                    <CiSun className="w-8 h-8 lg:w-12 lg:h-12 text-text-dark"/> 
                    : 
                    <CiDark className="w-8 h-8 lg:w-12 lg:h-12 text-text-dark"/>
                }
            </button> 
        </div>
    )
}

export default ThemeButton