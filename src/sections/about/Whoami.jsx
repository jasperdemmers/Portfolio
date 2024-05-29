import SecHead from "../../components/SecHead.jsx";

const Whoami = () => {
    return (
        <div>
            <SecHead
                subHead={"$Whoami"}
                head={"Who Am I?"}>
            </SecHead>
            <div className={"px-4 md:px-16 flex flex-col gap-4 md:pt-12"}>
                <p className={"text-balance text-center font-body lg:text-xl"}>
                    Glad you want to get to know me! My journey has taken me across continents, exposing me to diverse cultures and ways of life that have shaped my worldview. From a young age, I’ve been fascinated by the intricate workings of the world around me.
                    For me, the boundaries of exploration extend far beyond the physical realm. I believe that our actions and innovations are not constrained by borders. They have the power to transcend limitations and connect us in ways previously unimaginable.
                    Join me as I navigate this ever-evolving digital landscape. Together, let’s explore the endless possibilities that technology offers and strive to make a meaningful impact in the interconnected world we inhabit.
                </p>
            </div>
        </div>
    )
}
export default Whoami
