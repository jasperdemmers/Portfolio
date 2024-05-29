import Timeline from "../../components/Timeline.jsx";
import SecHead from "../../components/SecHead.jsx";

const Profile = () => {
    return (
        <div>
            <SecHead
                subHead={".Profile"}
                head={"Experiences"}>
            </SecHead>
            <div className={"px-8"}>
                <ol className={"lg:flex items-stretch"}>
                    <Timeline
                        logoSrc={"/portfolio/karwei.png"}
                        title={"Karwei - Sales Employee"}
                        span={"2023 - Present"}
                        className={""}>
                    </Timeline>
                    <Timeline
                        logoSrc={"/portfolio/mediamarkt.png"}
                        title={"MediaMarkt - Smartbar Employee"}
                        span={"2023 - Present"}
                        className={""}>
                    </Timeline>
                    <Timeline
                        logoSrc={"/portfolio/citriclabs.png"}
                        title={"Citric Labs - Infrastructure Engineer"}
                        span={"2024 - Present"}
                        className={""}>
                    </Timeline>
                    <Timeline
                        logoSrc={"/portfolio/simplepark.png"}
                        title={"SimplePark - Cyber Security Engineer"}
                        span={"2024 - Present"}
                        className={""}>
                    </Timeline>
                </ol>
            </div>
            <div className={"flex pt-12 justify-center"}>
                <button
                    className={"text-center py-2 px-6 font-body text-2xl bg-primary-light flex-shrink-0 rounded-full dark:bg-primary-dark text-text-dark hover:bg-primary-dark dark:hover:bg-primary-light"}>
                    View Detailed Profile
                </button>
            </div>
        </div>
    )
}
export default Profile

