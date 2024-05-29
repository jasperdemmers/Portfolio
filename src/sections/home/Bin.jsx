import SecHead from "../../components/SecHead.jsx";

const Bin = () => {
    return (
        <div>
            <SecHead
                subHead={"./Bin"}
                head={"Portfolio"}>
            </SecHead>
            <div className={"grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 font-body m-4 md:m-0"}>
                <div className={"rounded-3xl bg-secondary-light dark:bg-background-dark"}>
                    <div className={"p-4 flex flex-col"}>
                        <img alt="Portfolio Webiste" className={"rounded-3xl h-40 md:h-60 object-cover"}
                             src={"/portfolio/portfoliowebsite.png"}></img>
                        <div className={"md:flex justify-evenly flex-row flex-wrap gap-2 py-4 text-center hidden"}>
                            <div className={"p-2 px-4 bg-secondary-dark rounded-full"}>
                                <span className={"text-text-light"}>
                                    Web Design
                                </span>
                            </div>
                            <div className={"p-2 px-4 bg-secondary-dark rounded-full"}>
                                <span className={"text-text-light"}>
                                    Web Development
                                </span>
                            </div>
                        </div>
                        <div className={"flex mt-4 md:mt-0"}>
                            <button className={"text-text-dark md:text-2xl w-full px-6 p-2 rounded-full bg-primary-light dark:bg-primary-dark hover:bg-primary-dark dark:hover:bg-primary-light"}>
                                Portfolio Website
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"rounded-3xl bg-secondary-light dark:bg-background-dark"}>
                    <div className={"p-4 flex flex-col"}>
                        <img alt="Portfolio Webiste" className={"rounded-3xl h-40 md:h-60 object-cover"}
                             src={"/portfolio/citriclabs.png"}></img>
                        <div className={"md:flex justify-evenly flex-row flex-wrap gap-2 py-4 text-center hidden"}>
                            <div className={"p-2 px-4 bg-secondary-dark rounded-full"}>
                                <span className={"text-text-light"}>
                                    Load-Testing
                                </span>
                            </div>
                            <div className={"p-2 px-4 bg-secondary-dark rounded-full"}>
                                <span className={"text-text-light"}>
                                    Cloud
                                </span>
                            </div>
                        </div>
                        <div className={"flex mt-4 md:mt-0"}>
                            <button
                                className={"text-text-dark md:text-2xl w-full px-6 p-2 rounded-full bg-primary-light dark:bg-primary-dark hover:bg-primary-dark dark:hover:bg-primary-light"}>
                                Greenroom - Citric Labs
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"rounded-3xl bg-secondary-light dark:bg-background-dark col-span-1"}>
                    <div className={"p-4 flex flex-col"}>
                        <img alt="Portfolio Webiste" className={"rounded-3xl h-40 md:h-60 object-cover"}
                             src={"/portfolio/simplepark.png"}></img>
                        <div className={"md:flex justify-evenly flex-row flex-wrap gap-2 py-4 text-center hidden"}>
                            <div className={"p-2 px-4 bg-secondary-dark rounded-full"}>
                                <span className={"text-text-light"}>
                                    Cyber
                                </span>
                            </div>
                            <div className={"p-2 px-4 bg-secondary-dark rounded-full"}>
                                <span className={"text-text-light"}>
                                    Logging
                                </span>
                            </div>
                            <div className={"p-2 px-4 bg-secondary-dark rounded-full"}>
                                <span className={"text-text-light"}>
                                    Data Laws
                                </span>
                            </div>
                        </div>
                        <div className={"flex mt-4 md:mt-0"}>
                            <button
                                className={"text-text-dark md:text-2xl w-full px-6 p-2 rounded-full bg-primary-light dark:bg-primary-dark hover:bg-primary-dark dark:hover:bg-primary-light"}>
                                SimplePark
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex justify-center mt-4"}>
                <button
                    className={"py-2 px-6 font-body text-2xl bg-primary-light rounded-full dark:bg-primary-dark text-text-dark hover:bg-primary-dark dark:hover:bg-primary-light"}>
                    More dope projects
                </button>
            </div>
        </div>
    )
}
export default Bin

