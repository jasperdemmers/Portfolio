import PropTypes from 'prop-types';

const ProgressBar = ({ progress }) => {
    const gradient = 'bg-gradient-to-r from-accent-light  to-primary-light dark:from-accent-dark dark:to-primary-dark';

    return (
        <div className="w-full h-6 bg-secondary-light dark:bg-secondary-dark rounded-full overflow-hidden">
            <div
                className={`h-full rounded-full ${gradient}`}
                style={{
                    width: `${progress}%`,
                    backgroundSize: `${100 / progress * 100}% 100%`,
                    backgroundPosition: '0 0',
                }}
            ></div>
        </div>
    );
};

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
};

export default ProgressBar;