import SecHead from "../../components/SecHead.jsx";
import PropTypes from "prop-types";

const Education = () => {
    return (
        <div>
            <SecHead
                subHead={"~/Education"}
                head={"Education"}>
            </SecHead>
            <div className={"grid gap-2 xl:gap-8 font-body grid-cols-2 lg:grid-cols-4 m-4"}>
                <Card
                    study={"Group 1 - 5"}
                    school={"HSL"}
                    imgAlt={"HSL Logo"}
                    time={"2010 - 2015"}
                    imgSrc={"/education/HSL.jpeg"}>
                </Card>
                <Card
                    study={"Grade 4 - 6"}
                    school={"Ecole Ross Road"}
                    imgAlt={"Ecole Ross Road Logo"}
                    time={"2015 - 2018"}
                    imgSrc={"/education/RR.png"}>
                </Card>
                <Card
                    study={"HAVO Nature & Tech"}
                    school={"College Den Hulster"}
                    imgAlt={"College Den Hulster Logo"}
                    time={"2018 - 2023"}
                    imgSrc={"/education/CDH.png"}>
                </Card>
                <Card
                    study={"Bachelor’s degree"}
                    school={"Fontys"}
                    imgAlt={"Fontys Logo"}
                    time={"2023 - 2027"}
                    imgSrc={"/education/Fontys.png"}>
                </Card>
            </div>
        </div>
    )
}

const Card = ({ imgSrc, imgAlt, school, study, time }) => {
    return (
        <div className={"rounded-3xl bg-secondary-light col-span-1"}>
            <div className={"p-4 flex flex-col"}>
                <img alt={imgAlt} className={"rounded-3xl h-40 md:h-60 object-cover bg-white"}
                     src={imgSrc}></img>
                <div className={"mt-2 sm:text-xl text-center text-text-light w-full px-2 py-1 rounded-full bg-secondary-dark"}>
                    <span>
                        {school}
                    </span>
                    <br />
                    <span>
                        {study}
                    </span>
                </div>
                <div className={"flex mt-2 text-center"}>
                    <span
                        className={"tracking-widest text-text-light text-xl md:text-3xl xl:text-4xl w-full p-2 rounded-full bg-secondary-dark"}>
                        {time}
                    </span>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    study: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
}

export default Education
