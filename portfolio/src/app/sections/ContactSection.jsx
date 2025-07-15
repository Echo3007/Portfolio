export const ContactSection = ({ onOpen }) => {
    return (
        <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
            <div className="container ">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 py-8 px-10 rounded-3xl text-center md:text-left ">
                    <div className="flex flex-col md:flex-row  gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">Let's create something incredible together</h2>
                            <p className="text-sm md:text-base mt-2">Let's connect and create something amazing together! Drop me an email and start brainstorming ideas!</p>
                        </div>
                        <div>
                            <button className=" group text-white bg-gray-900 inline-flex items-center px-6 h-12 
                            rounded-xl gap-2 w-max border border-white hover:bg-purple-300 hover:scale-110 hover:text-black 
                            active:scale-95 active:translate-y-0.5 active:bg-purple-500 duration-150 ease-in-out"
                                onClick={onOpen}>
                                <span className="font-semibold">Contact me</span>
                                <svg className="w-6 h-6 text-white dark:text-white rotate-45 group-hover:text-black 
                            active:scale-95 active:translate-y-0.5  duration-150 ease-in-out" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}