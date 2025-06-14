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
        <section className='pb-16'>
            <div className="container mx-auto px-4">
                <div className='flex justify-center'>
                    <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-center text-shadow-xs '>Real-World Results</p>
                </div>
                <h2 className='font-serif text-3xl text-center mt-6'>Featured Projetcs</h2>
                <p className='text-center text-black/80 mt-4'>Some text content here</p>
                <div className='flex flex-col mt-10 gap-20'>
                    {portfolioProjects.map(project => (
                        <div key={project.title} className='bg-white/80 rounded-3xl relative z-0 
                        overflow-hidden after:z-10 
                        after:content-[""] after:absolute after:inset-0 
                        after:outline-gray-800 after:outline-2 
                        after:outline after:-outline-offset-2 after:rounded-3xl 
                        px-8 pt-8'>
                            <div >
                                <div className='bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text text-shadow-xs'>
                                    <span>Nome corso, materia etc</span>
                                    <span>&bull;</span>
                                    <span>{project.year}</span>
                                </div>
                            </div>
                            <h3 className='font-serif text-2xl mt-2 '>{project.title}</h3>
                            <hr className='border-t-2 border-black/10 mt-4' />
                            <ul className='flex flex-col gap-4 mt-4'>
                                {project.techStack.map(techStack => (
                                    <li key={techStack.title} className='flex gap-2 text-sm text-black/80'>
                                        <div className="bg-green-500 size-2.5 rounded-full"></div>

                                        <span>{techStack.title}</span>
                                    </li>
                                ))}
                            </ul>
                            <hr className='border-t-2 border-black/10 mt-4' />

                            <div className='mt-4'>
                                <p>Description of Project</p>
                            </div>
                            <a href={project.link}>
                                <button className='bg-black mt-8 text-white h-12 w-full rounded-xl font-semibold 
                                inline-flex items-center justify-center gap-2'>
                                    <span>View GitHub</span>
                                </button>
                            </a>
                            <Image alt={project.title} className='mt-8 -mb-4'></Image>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}