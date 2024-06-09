import PropTypes from 'prop-types';

const LogoWithText = ({ text, imageSrc }) => {
    return (
        <div className="flex items-center">
            <div className="w-3/12 bg-secondary-light dark:bg-background-dark rounded-[5rem] p-8 scale-75">
                <img
                    src={imageSrc}
                    alt="Logo"
                    className="w-full h-auto rounded-[3rem]"
                />
            </div>
            <div className="w-9/12 text-left">
                <p className="font-display text-xl">{text}</p>
            </div>
        </div>
    );
}

LogoWithText.propTypes = {
    text: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
};

export default LogoWithText;