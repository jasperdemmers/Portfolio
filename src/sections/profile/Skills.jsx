import SecHead from "../../components/SecHead.jsx";
import ProgressBar from "../../components/ProgressBar.jsx";
import { personalSkillsData, professionalSkillsData } from '../../data/skills.jsx'; // Adjust the import path as necessary

const Skills = () => {
    return (
        <div className="container mx-auto px-4">
            <SecHead head={"Personal Skills"} />
            {personalSkillsData.map((skill, index) => (
                <div className="grid grid-cols-12 gap-4 mt-4" key={index}>
                    <div className="col-span-12 md:col-span-4 md:col-start-3">
                        <p className="text-lg font-thin font-display">{skill.skillName}</p>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <ProgressBar progress={skill.progress} />
                    </div>
                </div>
            ))}

            <SecHead head={"Professional Skills"} />
            {professionalSkillsData.map((skill, index) => (
                <div className="grid grid-cols-12 gap-4 mt-4" key={index}>
                    <div className="col-span-12 md:col-span-4 md:col-start-3">
                        <p className="text-lg font-thin font-display">{skill.skillName}</p>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <ProgressBar progress={skill.progress} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;