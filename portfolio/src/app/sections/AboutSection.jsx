import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';

const toolBoxItems = [
    {
        title: "Java",
        icon: "",
    },
    {
        title: "HTML5",
        icon: "",
    },
    {
        title: "CSS3",
        icon: "",
    },
    {
        title: "JavaScript",
        icon: "",
    },
    {
        title: "React",
        icon: "",
    },
    {
        title: "NextJS",
        icon: "",
    }
]

export const AboutSection = () => {
    return (
        <div className='pb-96'>
            <div className='container mx-auto p-4'>
                <SectionHeader eyebrow={"About Me"} title={"A Glimpse Into My World"} description={"Some description here"} />
                <div className='md:mt-20 mt-10 gap-20 '>
                    <Card className="mt-10">
                        <div>
                            <svg class="w-6 h-6 text-gray-800 dark:text-white -rotate-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                            </svg>
                            <h3>My Toolbox</h3>
                            <p>Some Text Here</p>
                        </div>
                        <div>
                            {toolBoxItems.map(item => (
                                <div key={item.title}>
                                    <span>{item.icon}</span>
                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>

                    </Card>
                    <Card className="mt-10">
                        <div>
                            <svg class="w-6 h-6 text-gray-800 dark:text-white -rotate-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                            </svg>
                            <h3>My Toolbox</h3>
                            <p>Some Text Here</p>
                        </div>
                        <div>
                            Some Image here
                        </div>



                    </Card>
                </div>
            </div>
        </div>
    )
}