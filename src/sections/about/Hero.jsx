const Hero = () => {
    return (
        <div className="px-4 md:pt-12 flex items-center justify-center">
            <div
                className="relative w-full h-72 md:h-[42rem] rounded-[5rem] md:rounded-[10rem] bg-cover bg-center bg-[url('/portraits/side-look-wide-brightness-100.png')]"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1
                        className="tracking-wide font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light dark:from-primary-dark via-[#9BAECF] dark:via-[#9BAECF] to-accent-light dark:to-accent-dark"
                    >
                        JASPER DEMMERS
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Hero;