const Hero = () => {
  return (
    <div className="container flex mx-auto justify-between items-center">
        {/* Left hand text */}
        <div>
            <span>HELLO WORLD</span>
            <br />
            <span>ITS ME,</span>
            <br />
            <span
                className="font-display xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light dark:from-primary-dark to-accent-light dark:to-accent-dark"
            >
                JASPER DEMMERS
            </span>
            
        </div>
    </div>
  )
}

export default Hero