import JourneyTimeline from "../../components/JourneyTimeline.jsx";

const Journey = () => {
    return (
        <div>
            <div className="text-center pt-24 pb-12">
                <div className="font-body text-3xl">
                    ~/Location
                </div>
                <div className="pt-4 font-body text-6xl">
                    My Journey
                </div>
            </div>
            <div className={"antialiased"}>
                <JourneyTimeline />
            </div>
        </div>
    )
}
export default Journey
