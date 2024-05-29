import PropTypes from "prop-types";

const Quote = ({ p1, p2, p3, auth}) => {
    return (
        <div>
            <p className={"font-quotes text-3xl italic font-extralight tracking-wider"}>
                {p1} <span
                className={"font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light dark:from-primary-dark to-accent-light dark:to-accent-dark"}
            >{p2}</span> {p3}
            </p>
            <p className={"pt-3 font-quotes text-2xl italic font-extralight tracking-wide"}>
                {auth}
            </p>
        </div>
    )
};

Quote.propTypes = {
    p1: PropTypes.node.isRequired,
    p2: PropTypes.node.isRequired,
    p3: PropTypes.node.isRequired,
    auth: PropTypes.node.isRequired,
}

export default Quote
