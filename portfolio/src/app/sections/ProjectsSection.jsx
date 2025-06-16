import Image from 'next/image'

const portfolioProjects = [
    {
        year: "2023",
        title: "Ecommerce App",
        techStack: [
            { title: "Android Studio" },
            { title: "Firebase" },
            { title: "Java" }
        ],
        link: "GitHubLink",
        image: "someImage"
    },
    {
        year: "2023",
        title: "Ecommerce Website",
        techStack: [
            { title: "Android Studio" },
            { title: "Firebase" },
            { title: "Java" }
        ],
        link: "GitHubLink",
        image: "someImage"
    },
]



export const ProjectsSection = () => {
    return (
        <section className='pb-16 lg:py-12'>
            <div className="container mx-auto px-4">
                <div className='flex justify-center'>
                    <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-red-500 
                    via-yellow-400 via-green-400 via-blue-500 to-purple-500 
                    bg-clip-text text-transparent text-center text-shadow-xs md:text-lg lg:text-xl'>Real-World Results</p>
                </div>
                <h2 className='font-serif text-3xl md:text-5xl  text-center mt-6'>Featured Projects</h2>
                <p className='text-center md:text-lg lg:text-xl text-black/80 mt-4 max-w-md mx-auto'>Some text content here</p>
                <div className='flex flex-col md:mt-20 mt-10 gap-20'>
                    {portfolioProjects.map(project => (
                        <div key={project.title} className='bg-white/80 rounded-3xl relative z-0 
                        overflow-hidden after:z-10 
                        after:content-[""] after:absolute after:inset-0 
                        after:outline-gray-800 after:outline-2 
                        after:outline after:-outline-offset-2 after:rounded-3xl 
                        px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none'>
                            <div className='lg:grid lg:grid-cols-2 lg:gap-16' >
                                <div className='lg:pb-16'>
                                    <div className='bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500 inline-flex 
                                    gap-2 font-bold uppercase tracking-widest text-sm md:text-base lg:text-sm text-transparent bg-clip-text text-shadow-xs'>
                                        <span>Nome corso, materia etc</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>

                                    <h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl lg:text-3xl'>{project.title}</h3>
                                    <hr className='border-t-2 border-black/10 mt-4 md:mt-5' />
                                    <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                                        {project.techStack.map(techStack => (
                                            <li key={techStack.title} className='flex gap-2 text-sm md:text-xl lg:text-lg text-black/80'>
                                                <div className="bg-green-500 size-4 rounded-full"></div>

                                                <span>{techStack.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <hr className='border-t-2 border-black/10 mt-4 md:mt-5' />

                                    <div className='mt-4 md:mt-5 md:text-xl lg:text-lg'>
                                        <p>Description of Project</p>
                                    </div>
                                    <a href={project.link}>
                                        <button className='bg-black mt-8 text-white md:text-xl lg:text-lg h-12 w-full md:w-auto px-6 rounded-xl font-semibold 
                                        inline-flex items-center justify-center gap-2'>
                                            <span>View GitHub</span>
                                        </button>
                                    </a>
                                </div>
                                <div className='relative'>
                                    <Image alt={project.title} className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'></Image>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}