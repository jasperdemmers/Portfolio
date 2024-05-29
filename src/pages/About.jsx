import Hero from '../sections/about/Hero.jsx'
import Whoami from '../sections/about/Whoami.jsx'
import Homelab from "../sections/about/Homelab.jsx";

const About = () => {
  return (
      <div className='text-text-light dark:text-text-dark mx-auto'>
        <div className={"constrained-container"}>
          <Hero />
          <Whoami />
          <Homelab />
        </div>
      </div>
  )
}

export default About