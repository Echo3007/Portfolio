

export const HeroSection = () => {
    return (
        <div className="py-32 relative z-0">

            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-center items-center">
                    {/* //Image insertion here */}
                    <img></img>

                    <div className="bg-white/80 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                        <div className="bg-green-500 size-2.5 rounded-full"></div>
                        <div className="text-sm font-medium md:text-2xl lg:text-xl">Available for new projects</div>
                    </div>
                </div>
                <div className="max-w-lg mx-auto ">
                    <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Some title here</h1>
                    <p className="mt-4 text-center text-black/80 lg:text-xl md:text-lg">Some description here</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row justify-center items-center mt-8 ">
                <button className="inline-flex items-center gap-2 md:text-lg lg:text-xl border border-white bg-white/25 px-6 h-12 rounded-xl">
                    <span className="font-semibold">Explore work</span>
                </button>
                <button className="inline-flex items-center md:text-lg lg:text-xl
                gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
                    <span>Emoji here</span>
                    <span className="font-semibold">Connect</span>
                </button>
            </div>
        </div>
    )
}