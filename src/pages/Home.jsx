import React from 'react'

const Home = () => {
  // add a function to toggle the classList of dark
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className='text-text-light dark:text-text-dark'>
      <h1>React App</h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={toggleDark}>Toggle Dark Mode</button>
    </div>
  )
}

export default Home