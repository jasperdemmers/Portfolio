import PropTypes from 'prop-types';

const TitleWithIcon = ({ text1, text2, text3 }) => {
    const commonSpanClasses = "font-display";

    return (
        <div className="flex items-center justify-between space-x-4 pr-56">
            <span className={`${commonSpanClasses} font-bold text-3xl`}>{text1}</span>
            <span className={`${commonSpanClasses} text-2xl font-thin`}>{text2}</span>
            <span className={`${commonSpanClasses} text-2xl font-thin`}>{text3}</span>
        </div>
    );
};

TitleWithIcon.propTypes = {
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    text3: PropTypes.string.isRequired,
};

export default TitleWithIcon;