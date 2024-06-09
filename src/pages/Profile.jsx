import Hero from "../sections/profile/Hero.jsx";
import Experience from "../sections/profile/Experience.jsx";
import Skills from "../sections/profile/Skills.jsx";
import Quote from "../sections/profile/Quote.jsx";

const Profile = () => {
  return (
    <div className={"text-text-light dark:text-text-dark mx-auto"}>
        <div className={"constrained-container"}>
            <Hero/>
            <Quote/>
            <Experience/>
            <Skills/>
        </div>
    </div>
  )
}

export default Profile