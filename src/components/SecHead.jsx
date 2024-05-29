import PropTypes from "prop-types";

const SecHead = ({ subHead, head }) => {
    return (
        <div className={"text-center pt-24 pb-8"}>
            {subHead ? (
                <div className="font-body text-3xl">
                    {subHead}
                </div>
            ) : null}
            <div className="pt-4 font-body text-6xl">
                {head}
            </div>
        </div>
    )
}

SecHead.propTypes = {
    subHead: PropTypes.string,
    head: PropTypes.string.isRequired
}

export default SecHead
