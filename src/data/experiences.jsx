import TitleWithIcon from '../components/TitleWithIcon.jsx'; // Adjust the import path as necessary
import { GoTriangleDown } from 'react-icons/go';
import LogoWithText from "../components/LogoWithText.jsx"; // Replace 'FaIconName' with the actual icon name you want to use

const experiences = [
    {
        title: (
            <TitleWithIcon
                text1="2023 - Present"
                text2="SimplePark"
                text3="Cyber Security Engineer"
                icon={<GoTriangleDown />}
            />
        ),
        content: (
            <LogoWithText
                imageSrc={"/portfolio/simplepark.png"}
                text={"SimplePark is amazing - Coming Soon"} // ToDo: Add description
            />
        ),
    },
    {
        title: (
            <TitleWithIcon
                text1="2023 - Present"
                text2="CitricLabs"
                text3="Infrastructure Engineer"
                icon={<GoTriangleDown />}
            />
        ),
        content: (
            <LogoWithText
                imageSrc={"/portfolio/citriclabs.png"}
                text={"CitricLabs is amazing - Coming Soon"} // ToDO: Add description
            />
        ),
    },
    {
        title: (
            <TitleWithIcon
                text1="2023 - Present"
                text2="MediaMarkt"
                text3="Smartbar Employee"
                icon={<GoTriangleDown />}
            />
        ),
        content: (
            <LogoWithText
                imageSrc={"/portfolio/mediamarkt.png"}
                text={"Started in June 2023 as a sales employee at the IT department.\n" +
                    "I’ve always been fascinated about how things work, so became a Smartbar employee in July 2023.\n" +
                    "Offer technical support to customers, smartphone repairs, technical advice"}
            />
        ),
    },
    {
        title: (
            <TitleWithIcon
                text1="2021 - 2023"
                text2="Karwei"
                text3="Sales Employee"
                icon={<GoTriangleDown />}
            />
        ),
        content: (
            <LogoWithText
                imageSrc={"/portfolio/karwei.png"}
                text={"Karwei is amazing - Coming Soon"} // ToDo: Add description
            />
        ),
    },
];

export default experiences;