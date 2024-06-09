import PropTypes from 'prop-types';

const LogoWithText = ({ text, imageSrc }) => {
    return (
        <div className="flex items-center">
            <div className="w-1/4 md:w-3/12 bg-secondary-light dark:bg-background-dark rounded-3xl md:rounded-[2rem] lg:rounded-[4rem] p-2 lg:p-5 scale-10 md:scale-90 lg:scale-75">
                <img
                    src={imageSrc}
                    alt="Logo"
                    className="w-full h-auto rounded-2xl md:rounded-[2rem] lg:rounded-[3rem]"
                />
            </div>
            <div className="w-3/4 md:w-9/12 text-left pl-2 md:pl-0">
                <p className="font-display md:text-xl">{text}</p>
            </div>
        </div>
    );
}

LogoWithText.propTypes = {
    text: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
};

export default LogoWithText;