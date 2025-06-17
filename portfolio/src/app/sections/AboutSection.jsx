import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { TechIcon } from '../components/TechIcon';
import HTML5 from '../assets/html5.svg';
import CSS3 from '../assets/css3.svg';
import GitHub from '../assets/github.svg';
import JavaScript from '../assets/square-js.svg';
import ReactIcon from '../assets/react.svg';


const toolBoxItems = [

    {
        title: "HTML5",
        iconType: HTML5,
    },
    {
        title: "CSS3",
        iconType: CSS3,
    },
    {
        title: "JavaScript",
        iconType: JavaScript,
    },
    {
        title: "React",
        iconType: ReactIcon,
    },

    {
        title: "GitHub",
        iconType: GitHub,
    }
]

const hobbies = [
    {
        title: "Playing Music",
        emoji: "🎸"
    },
    {
        title: "Photography",
        emoji: "📸"
    },
    {
        title: "Reading",
        emoji: "📖"
    },
    {
        title: "Coffee",
        emoji: "☕"
    },
]

export const AboutSection = () => {
    return (
        <div className='py-16'>
            <div className='container mx-auto p-4'>
                <SectionHeader eyebrow={"About Me"} title={"A Glimpse Into My World"} description={"Some description here"} />
                <div className='md:mt-20 mt-10 gap-20 lg:ml-30 lg:mr-30'>
                    <Card className="mt-10">
                        <div className='flex flex-col'>
                            <div className='inline-flex items-center gap-2'>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white -rotate-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                                </svg>
                                <h3 className='font-serif text-3xl lg:text-xl'>My Toolbox</h3>
                            </div>
                            <p className='text-sm mt-2'>Some Text Here</p>
                        </div>
                        <div>
                            {toolBoxItems.map(item => (
                                <div key={item.title}>
                                    <TechIcon component={item.iconType} />
                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>

                    </Card>
                    <Card className="mt-20">
                        <div>
                            <div className='inline-flex'>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white -rotate-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                                </svg>
                                <h3 className='font-serif text-3xl lg:text-xl'>Beyond The Code</h3>
                            </div>
                            <p className='lg:text-sm md:text-xl mt-2'>Some Text Here/Interest And Hobbies etc a</p>
                        </div>
                        <div>
                            {hobbies.map(hobby => (
                                <div key={hobbies.title} className='text-sm'>
                                    <span>{hobby.title}</span>
                                    <span>{hobby.emoji}</span>
                                </div>
                            ))}
                        </div>

                    </Card>

                </div>
            </div>
        </div>
    )
}