import { PageLinks } from '../components/PageLinks';

export const HeroSection = () => {

    return (
        <div id="hero" className="py-32 relative z-0">

            <div className="container">
                <div className="flex flex-col justify-center items-center">
                    {/* //Image insertion here */}
                    <img></img>

                    <div className="bg-white/80 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                        <div className="bg-green-500 size-2.5 relative rounded-full ">
                            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
                        </div>
                        <div className=" font-medium md:text-2xl lg:text-sm">Available for new projects</div>
                    </div>
                </div>
                <div className="max-w-lg mx-auto ">
                    <h1 className="font-serif text-3xl md:text-5xl lg:text-3xl text-center mt-8 tracking-wide">Some title here</h1>
                    <p className="mt-4 text-center text-black/80 lg:text-sm md:text-xl">Some description here</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row justify-center items-center mt-8 ">
                <PageLinks href={"https://github.com/Echo3007"}>
                    <button className="inline-flex items-center gap-2 md:text-xl lg:text-sm border border-white bg-white/25 px-6 h-12 lg:h-10 rounded-xl
                    hover:bg-green-400 hover:text-white active:scale-95 active:translate-y-0.5 active:bg-green-600 duration-150 ease-in-out">
                        <span className="font-semibold lg:text-lg">Explore work</span>
                    </button>
                </PageLinks>
                <PageLinks href={"https://www.linkedin.com/in/angela-pellillo-846a55157/"}>
                    <button className="inline-flex items-center md:text-lg lg:text-sm
                    gap-2 border border-white bg-white text-gray-900 px-6 h-12 lg:h-10 rounded-xl hover:bg-blue-400 hover:text-white hover:border-white
                    active:scale-95 active:translate-y-0.5 active:bg-blue-500  transition duration-150 ease-in-out">
                        <span className="lg:text-xl">👋</span>
                        <span className="font-semibold lg:text-lg">Connect</span>
                    </button>
                </PageLinks>

            </div>
        </div>
    )
}