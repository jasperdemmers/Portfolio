import PropTypes from "prop-types";

const JourneyTimeline = () => {
    return (
        <div className={"relative container mx-auto px-6 flex flex-col space-y-8"}>
            <div
                className={"hidden md:block absolute z-0 w-2 h-full bg-secondary-dark dark:bg-secondary-light shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"}>
            </div>
            <Entry
                imgSrc={"/location/Venlo.jpeg"}
                imgAlt={"Venlo"}
                time={"2006"}
                head={"Venlo, the Netherlands"}
                body={"Lorem ipsum dolor, sit amet consectetur adipisicing\n" +
                    "elit. Ex iste suscipit reiciendis, perferendis vel\n" +
                    "consequuntur cupiditate ad commodi provident,\n" +
                    "sapiente veniam sed autem."}
            />
            <Entry
                isLeft={true}
                imgSrc={"/location/Singapore.png"}
                imgAlt={"Singapore"}
                time={"2010"}
                head={"Singapore"}
                body={"Lorem ipsum dolor, sit amet consectetur adipisicing\n" +
                    "elit. Ex iste suscipit reiciendis, perferendis vel\n" +
                    "consequuntur cupiditate ad commodi provident,\n" +
                    "sapiente veniam sed autem."}
            />
            <Entry
                imgSrc={"/location/Vancouver.png"}
                imgAlt={"Vancouver"}
                time={"2015"}
                head={"Vancouver, Canada"}
                body={"Lorem ipsum dolor, sit amet consectetur adipisicing\n" +
                    "elit. Ex iste suscipit reiciendis, perferendis vel\n" +
                    "consequuntur cupiditate ad commodi provident,\n" +
                    "sapiente veniam sed autem."}
            />
            <Entry
                isLeft={true}
                imgSrc={"/location/Venlo.jpeg"}
                imgAlt={"Venlo"}
                time={"2018"}
                head={"Venlo, the Netherlands"}
                body={"Lorem ipsum dolor, sit amet consectetur adipisicing\n" +
                    "elit. Ex iste suscipit reiciendis, perferendis vel\n" +
                    "consequuntur cupiditate ad commodi provident,\n" +
                    "sapiente veniam sed autem."}
            />
        </div>
    );
}

const Entry = ({ imgSrc, imgAlt, time, head, body, isLeft }) => {
    return (
        <div className={"relative z-10"}>
            <img
                src={imgSrc}
                alt={imgAlt}
                className={"timeline-img"}
            />
            <div className={`timeline-container ${isLeft ? 'timeline-container-left' : ''}`}>
                <div className={`timeline-pointer ${isLeft ? 'timeline-pointer-left' : ''}`} aria-hidden={"true"}></div>
                <div className={"bg-secondary-dark dark:bg-secondary-light p-6 rounded-md shadow-md"}>
                        <span className={"font-bold font-body text-sm tracking-wide text-primary-light dark:text-primary-dark"}>
                            {time}
                        </span>
                    <h1 className={"text-2xl font-bold font-display pt-1 text-text-light dark:text-text-dark underline-accent dark:underline-accent-dark"}>
                        {head}
                    </h1>
                    <p className={"pt-1 font-body text-text-light dark:text-text-dark"}>
                        {body}
                    </p>
                </div>
            </div>
        </div>
    );
}

Entry.defaultProps = {
    imgAlt: "Timeline image",
    isLeft: false
}

Entry.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string,
    time: PropTypes.string,
    head: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    isLeft: PropTypes.bool
}

export default JourneyTimeline
