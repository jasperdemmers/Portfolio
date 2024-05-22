import Hero from '../sections/home/Hero'
import Whoami from '../sections/home/Whoami'
import Bin from '../sections/home/Bin'

const Home = () => {
    return (
        <div className='text-text-light dark:text-text-dark mx-auto'>
            <Hero />
            <Whoami />
            <Bin />
        </div>
    )
}

export default Home