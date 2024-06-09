const Hero = () => {
    return (
        <div className="px-4 md:pt-12 flex items-center justify-center">
            <div
                className="relative w-full h-48 md:h-[42rem] rounded-[5rem] md:rounded-[10rem] bg-fit bg-no-repeat bg-center bg-[url('/background/profile-back.svg')]"
            >
                <div className="absolute inset-0 flex items-center justify-center pt-8">
                    <div className={"text-center"}>
                        <h1 className={"antialiased text-text-dark font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"}>
                            Profile
                        </h1>
                        <span
                            className="block mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-text-dark max-w-2xl mx-auto">
                            You’ve come far! Here you will find my professional experience, and technologies I have worked with.
                        </span>
                        <div className={"block py-6 text-text-dark max-w-[700px]"}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;