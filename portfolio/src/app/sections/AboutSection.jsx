import Image from 'next/image';

import { SectionHeader } from '../components/SectionHeader';
import { CardHeader } from '../components/CardHeader';
import { ToolboxItems } from '../components/ToolboxItems';
import { Card } from '../components/Card';
import { TechIcon } from '../components/TechIcon';
import HTML5 from '../assets/html5.svg';
import CSS3 from '../assets/css3.svg';
import GitHub from '../assets/github.svg';
import JavaScript from '../assets/square-js.svg';
import ReactIcon from '../assets/react.svg';
import mapImage from '../assets/map.png';


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
                <div className='md:mt-20 mt-10 gap-20 '>
                    <Card className="mt-10 h-[320px] p-0">
                        <CardHeader
                            title='My Toolbox'
                            description='Some text here'
                            className='px-6 pt-6'
                        ></CardHeader>
                        <ToolboxItems
                            toolBoxItems={toolBoxItems} className='mt-6'>

                        </ToolboxItems>
                        <ToolboxItems
                            toolBoxItems={toolBoxItems} className='mt-6 -translate-x-1/2'>

                        </ToolboxItems>

                    </Card>
                    <Card className="mt-20 h-[320px]">
                        <CardHeader
                            title='Beyond The Code'
                            description='Some Text, Interests and Hobbies'
                        ></CardHeader>

                        <div>
                            {hobbies.map(hobby => (
                                <div key={hobbies.title} className='text-sm'>
                                    <span>{hobby.title}</span>
                                    <span>{hobby.emoji}</span>
                                </div>
                            ))}
                        </div>

                    </Card>
                    <Card className=' flex justify-center items-center mt-20'>
                        <Image src={mapImage} alt='Map'></Image>
                    </Card>

                </div>
            </div>
        </div>
    )
}