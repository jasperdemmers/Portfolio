import PropTypes from "prop-types";

const Timeline = ({ logoSrc, title, span, description, className}) => {
    return (
        <li className={`mb-6 lg:mb-0 w-full font-display ${className}`}>
            <div className="flex items-center flex-col lg:flex-row">
                <div
                    className="z-10 flex items-center justify-center w-12 h-12 rounded-full ring-secondary-light bg-secondary-light dark:ring-secondary-dark dark:bg-secondary-dark ring-8 shrink-0">
                    <img alt={"Logo"} className={"rounded-full"} src={logoSrc}></img>
                </div>
                <div className="hidden lg:flex w-full bg-secondary-light h-0.5 dark:bg-secondary-dark"></div>
            </div>
            <div className="mt-3 lg:pe-8 text-center lg:text-left">
                <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">
                    {title}
                </h3>
                <time
                    className="block mb-2 text-sm font-normal leading-none text-text-light dark:text-text-dark">
                    {span}
                </time>
                <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                    {description}
                </p>
            </div>
        </li>
    )
}

Timeline.propTypes = {
    className: PropTypes.string,
    logoSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    span: PropTypes.string.isRequired,
    description: PropTypes.string,
}

export default Timeline
