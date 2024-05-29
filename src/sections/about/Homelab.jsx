import Quote from "../../components/Quote.jsx";
import SecHead from "../../components/SecHead.jsx";

const Homelab = () => {
    return (
        <div>
            <SecHead
                subHead={"~/Hobby"}
                head={"Homelabber"}>
            </SecHead>
            <div className="px-4 flex flex-col md:flex-row md:items-center gap-4 md:pt-12">
                <div className="flex-1 basis-1/3 hidden md:block">
                    <img alt="Server overview" className="border-8 rounded-3xl border-accent-light dark:border-accent-dark"
                         src={"server-overview.png"}></img>
                </div>
                <div className="flex-1 basis-2/3 lg:pl-11 xl:pl-20 text-center md:text-left">
                    <div className={"py-4"}>
                        <p className="font-body tracking-wide lg:text-xl break-normal antialiased">
                            Ah, the homelab - a sanctuary for tech enthusiasts, a playground for the curious minds, and a source of endless amusement in the world of IT.
                        </p>
                        <br />
                        <p className="font-body tracking-wide lg:text-xl break-normal antialiased">
                            Picture a corner of your living space transformed into a mini data center, brimming with servers, switches , and cables galore. It’s where the magic happens, where experimentation meets innovation, and where the occasional “spaghetti monster” of cables reminds you that organization is a work in progress.
                        </p>
                    </div>
                    <div className={"py-6"}>
                        <Quote
                            p1={`"Just `}
                            p2={"one more"}
                            p3={` server... I promise it's the last one"`}
                            auth={"r/Homelab community"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homelab
