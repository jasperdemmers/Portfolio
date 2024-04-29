import Hero from '../sections/home/Hero'

const Home = () => {
  // add a function to toggle the classList of dark
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className='text-text-light dark:text-text-dark mx-auto'>
      <Hero />
    </div>
  )
}

export default Home