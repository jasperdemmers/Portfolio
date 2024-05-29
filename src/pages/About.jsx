import Hero from '../sections/about/Hero.jsx'
import Whoami from '../sections/about/Whoami.jsx'
import Homelab from "../sections/about/Homelab.jsx";
import Journey from "../sections/about/Journey.jsx";
import Education from "../sections/about/Education.jsx";

const About = () => {
  return (
      <div className='text-text-light dark:text-text-dark mx-auto'>
          <div className={"constrained-container"}>
              <Hero />
              <Whoami />
              <Homelab />
              <Journey />
              <Education />
          </div>
      </div>
  )
}

export default About