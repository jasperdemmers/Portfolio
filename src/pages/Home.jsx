import Hero from '../sections/home/Hero'
import Whoami from '../sections/home/Whoami'

const Home = () => {
    return (
        <div className='text-text-light dark:text-text-dark mx-auto'>
            <Hero />
            <Whoami />
        </div>
    )
}

export default Home