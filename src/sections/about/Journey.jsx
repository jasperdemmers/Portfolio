import JourneyTimeline from "../../components/JourneyTimeline.jsx";
import SecHead from "../../components/SecHead.jsx";

const Journey = () => {
    return (
        <div>
            <SecHead
                subHead={"~/Location"}
                head={"My Journey"}>
            </SecHead>
            <div className={"antialiased"}>
                <JourneyTimeline />
            </div>
        </div>
    )
}
export default Journey
