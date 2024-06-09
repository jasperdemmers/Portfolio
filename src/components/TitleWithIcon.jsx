import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const TitleWithIcon = ({ text1, text2, text3 }) => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isSmallScreen = windowSize.width <= 640; // sm breakpoint is 640px

    const commonSpanClasses = "font-display";

    return (
        <div className="flex items-center justify-between space-x-2 sm:pr-8 lg:pr-16">
            <span className={`${commonSpanClasses} font-bold text-md xs:text-xl sm:text-xl md:text-2xl lg:text-3xl`}>
                {isSmallScreen && text1.includes('Present') ? text1.replace('Present', 'Now') : text1}
            </span>
            <span className={`${commonSpanClasses} text-md xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-thin`}>{text2}</span>
            <span
                className={`${commonSpanClasses} text-md xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-thin truncate overflow-hidden whitespace-nowrap`}>{text3}</span>
        </div>
    );
};

TitleWithIcon.propTypes = {
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    text3: PropTypes.string.isRequired,
};

export default TitleWithIcon;