import Hero from "../sections/profile/Hero.jsx";
import Experience from "../sections/profile/Experience.jsx";

const Profile = () => {
  return (
    <div className={"text-text-light dark:text-text-dark mx-auto"}>
        <div className={"constrained-container"}>
            <Hero/>
            <Experience/>
        </div>
    </div>
  )
}

export default Profile