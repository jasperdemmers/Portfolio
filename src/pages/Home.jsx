import Hero from '../sections/home/Hero'
import Whoami from '../sections/home/Whoami'
import Bin from '../sections/home/Bin'
import Profile from '../sections/home/Profile.jsx'

const Home = () => {
    return (
        <div className='text-text-light dark:text-text-dark mx-auto'>
            <Hero/>
            <Whoami/>
            <Bin/>
            <Profile/>
            <div className={"flex justify-center py-24"}>
                <button
                    className={"py-2 px-6 font-body bg-primary-light rounded-full dark:bg-primary-dark text-text-dark hover:bg-primary-dark dark:hover:bg-primary-light"}>
                    <h1 className={"text-3xl"}>
                        Get In Touch
                    </h1>
                    <h4 className={"text-2xl px-12"}>
                        I&apos;d love to hear from ya!
                    </h4>
                </button>
            </div>
        </div>
    )
}

export default Home