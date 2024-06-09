import { useState, useRef, useEffect } from 'react';
import experiences from '../../data/experiences.jsx';
import SecHead from "../../components/SecHead.jsx";
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

const Experience = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    useEffect(() => {
        if (expandedIndex !== null) {
            contentRefs.current[expandedIndex].style.height = `${contentRefs.current[expandedIndex].scrollHeight}px`;
        }
    }, [expandedIndex]);

    return (
        <div className="space-y-0">
            <SecHead head={"Professional Experiences"} />
            {experiences.map((experience, index) => (
                <div
                    key={index}
                    className={`relative mx-auto w-full bg-gradient-to-r from-[#FF2E62] to-[#08D9D5] pl-1 pr-1 pt-1 cursor-pointer transition-all duration-300 ${
                        expandedIndex === index ? 'h-auto' : 'h-auto'
                    } ${index === experiences.length - 1 ? 'pb-1' : ''}`}
                    onClick={() => toggleExpand(index)}
                >
                    <div className="flex h-full w-full items-center justify-center bg-background-light dark:bg-background-dark p-4 shadow-inner">
                        <div className="w-full">
                            <div className="font-bold">{experience.title}</div>
                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                className={`overflow-hidden transition-height duration-500 ease-in-out ${expandedIndex === index ? 'h-auto' : 'h-0'}`}
                                style={{ height: expandedIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0' }}
                            >
                                <div className="mt-2">
                                    {experience.content}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`absolute ${expandedIndex === index ? 'bottom-4 right-4' : 'top-5 right-4'} transition-all duration-300`}>
                        <span className={`text-4xl transform transition-transform duration-300 hidden sm:inline`}>
                            {expandedIndex === index ? <GoTriangleUp /> : <GoTriangleDown />}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;