const Whoami = () => {
    return (
        <div>
            <div className="text-center pt-24 pb-8">
                <div className="font-body text-3xl">
                    $Whoami
                </div>
                <div className="pt-4 font-body text-6xl">
                    Who Am I?
                </div>
            </div>
            <div className="px-4 flex flex-col md:flex-row md:items-center gap-4 md:pt-12">
                <div className="flex-1 basis-1/3 hidden md:block">
                    <img alt="Side look" className="border-8 rounded-3xl border-accent-light dark:border-accent-dark" src={"/portraits/side-look.png"}></img>
                </div>
                <div className="flex-1 basis-2/3 lg:pl-11 xl:pl-20 text-center md:text-left">
                    <div className={"py-4"}>
                        <p className="font-body tracking-wide lg:text-xl break-normal antialiased">
                            Hey there, I’m Japer, an 18-year-old passionate, diligent, and intellectually curious individual with a deep-seated fascination for IT.
                            My life’s journey is not just marked by the places I’ve called home but by an insatiable curiosity about how the world works.
                            My interests extend beyond the immediate tangible world. To me, there are no borders in the universe - what we do isn’t confined by the physical or the immediate.
                        </p>
                    </div>
                    <div className={"py-6"}>
                        <p className={"font-quotes text-3xl italic font-extralight tracking-wider"}>
                            “Dreams without goals, are just <span
                                className={"font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light dark:from-primary-dark to-accent-light dark:to-accent-dark"}
                            >dreams</span> and they ultimately fuel disappointment.”
                        </p>
                        <p className={"pt-3 font-quotes text-2xl italic font-extralight tracking-wide"}>
                            Denzel Washington
                        </p>
                    </div>
                    <div className={"flex mt-4 justify-center md:justify-start"}>
                        <button className={"text-center py-2 px-6 font-body text-2xl bg-primary-light flex-shrink-0 rounded-full dark:bg-primary-dark text-text-dark hover:bg-primary-dark dark:hover:bg-primary-light"}>
                            Get to know me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Whoami
