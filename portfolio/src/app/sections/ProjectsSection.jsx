import Image from 'next/image';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import app_ecommerce from '../assets/app_ecommerce.png';
import ecommerce_website from '../assets/ecommerce_website.png';

const portfolioProjects = [
    {
        year: "2023",
        title: "Ecommerce App",
        techStack: [
            { title: "Android Studio" },
            { title: "Firebase" },
            { title: "Java" }
        ],
        link: "https://github.com/Echo3007/FanArt_ecommerce_Android/tree/master",
        linkYoutube: "https://www.youtube.com/watch?v=9fRwIvrSFYE",
        image: app_ecommerce,
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
        image: ecommerce_website,
    },

]



export const ProjectsSection = () => {
    return (
        <section className='pb-16 lg:py-12'>
            <div className="container">
                <SectionHeader eyebrow={"Real-World Results"} title={"Featured Projects"} description={"Some text content here"} />
                <div className='flex flex-col mt-20 gap-8 '>
                    {portfolioProjects.map((project, projectIndex) => (
                        <Card key={project.title} className=' 
                        px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky '
                            style={{ top: `calc(64px + ${projectIndex * 40}px)`, }}>
                            <div className='lg:grid lg:grid-cols-2 lg:gap-16' >
                                <div className='lg:pb-16'>
                                    <div className='bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500 inline-flex 
                                    gap-2 font-bold uppercase tracking-widest text-sm md:text-base lg:text-sm 
                                    text-transparent bg-clip-text text-shadow-xs'>
                                        <span>Nome corso, materia etc</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>

                                    <h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl lg:text-xl'>{project.title}</h3>
                                    <hr className='border-t-2 border-black/10 mt-4 md:mt-5' />
                                    <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                                        {project.techStack.map(techStack => (
                                            <li key={techStack.title} className='flex gap-2 text-sm md:text-xl lg:text-sm text-black/80'>
                                                <div >
                                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
                                                    </svg>

                                                </div>

                                                <span>{techStack.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <hr className='border-t-2 border-black/10 mt-4 md:mt-5' />

                                    <div className='mt-4 md:mt-5 md:text-xl lg:text-sm'>
                                        <p>Description of Project</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <a href={project.link}>
                                            <button className='bg-black mt-8 text-white md:text-xl lg:text-sm h-12 w-full md:w-auto lg:h-10 px-6 rounded-xl font-semibold 
                                        inline-flex items-center justify-center gap-2'>

                                                <span>View GitHub</span>
                                                <svg className="w-6 h-6 text-white dark:text-white rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                                                </svg>

                                            </button>
                                        </a>
                                        {project.linkYoutube && (
                                            <a href={project.linkYoutube}>
                                                <button className='bg-black mt-8 text-white md:text-xl lg:text-sm h-12 w-full md:w-auto lg:h-10 px-6 rounded-xl font-semibold 
                                        inline-flex items-center justify-center gap-2'>

                                                    <span>View Youtube Video</span>
                                                    <svg className="w-6 h-6 text-white dark:text-white rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                                                    </svg>

                                                </button>
                                            </a>)}
                                    </div>

                                </div>
                                <div className='relative'>
                                    <Image src={project.image} alt={project.title} className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl'></Image>
                                </div>
                            </div>

                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}