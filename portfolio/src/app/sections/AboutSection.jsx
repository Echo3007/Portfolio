import Image from 'next/image';

import { SectionHeader } from '../components/SectionHeader';
import { CardHeader } from '../components/CardHeader';
import { ToolboxItems } from '../components/ToolboxItems';
import { Card } from '../components/Card';
import HTML5 from '../assets/html5.svg';
import CSS3 from '../assets/css3.svg';
import GitHub from '../assets/github.svg';
import JavaScript from '../assets/square-js.svg';
import ReactIcon from '../assets/react.svg';
import mapImage from '../assets/map.png';
import smileMemoji from '../assets/smileMemoji.webp';
import { motion } from 'framer-motion';
import { useRef } from 'react';


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
        emoji: "🎸",
        left: '5%',
        top: '5%'
    },
    {
        title: "Photography",
        emoji: "📸",
        left: '50%',
        top: '25%'
    },
    {
        title: "Reading",
        emoji: "📖",
        left: '15%',
        top: '30%'
    },
    {
        title: "Coffee",
        emoji: "☕",
        left: '55%',
        top: '50%'
    },
    {
        title: "Going To The Beach",
        emoji: "🏖️",
        left: '30%',
        top: '75%'
    },
    {
        title: "Gaming",
        emoji: "🎮",
        left: '2%',
        top: '55%'
    },

]

export const AboutSection = () => {
    const constraintRef = useRef(null);
    return (
        <div id="about" className='py-16'>
            <div className='container'>
                <SectionHeader eyebrow={"About Me"} title={"A Glimpse Into My World"} description={"Tech Stack I usually play around with, and hobbies I like to pursue on my free time."} />
                <div className='mt-20 flex flex-col gap-8 '>
                    <div className='grid md:grid-cols-4 md:gap-8 gap-8'>
                        <Card className=" h-[320px] md:col-span-2 ">
                            <CardHeader
                                title='My Toolbox'
                                description='Some of the tools that I often use.'
                                className=''
                            ></CardHeader>
                            <ToolboxItems
                                toolBoxItems={toolBoxItems} className='' itemsWrapperClassName="animate-move-left " itemsWrapperClassStyle={{ animationDuration: "30s" }}>

                            </ToolboxItems>
                            <ToolboxItems
                                toolBoxItems={toolBoxItems}
                                className='mt-6 '
                                itemsWrapperClassName=' animate-move-right' itemsWrapperClassStyle={{ animationDuration: "15s" }}>

                            </ToolboxItems>

                        </Card>
                        <Card className="h-[320px] flex flex-col md:col-span-2">
                            <CardHeader
                                title='Beyond The Code'
                                description='I love making sure I can allocate some free time to any of my hobbies every day.'
                                className=''
                            ></CardHeader>

                            <div className='relative flex-1' ref={constraintRef}>
                                {hobbies.map(hobby => (
                                    <motion.div key={hobby.title} className='inline-flex items-center gap-2 px-6  bg-gradient-to-r 
                                    from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top
                                        }}
                                        drag
                                        dragConstraints={constraintRef}
                                    >
                                        <span className='font-medium text-gray-900'>{hobby.title}</span>
                                        <span>{hobby.emoji}</span>
                                    </motion.div>
                                ))}
                            </div>

                        </Card>
                    </div>
                    <div className='md:flex md:justify-center'>
                        <Card className='h-[320px] lg:w-[50%] p-0 relative '>
                            <Image src={mapImage} alt='Map'
                                className='h-full w-full object-cover '></Image>
                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/5
                            rounded-full 
                            after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 
                            after:-outline-offset after:rounded-full after:outline-gray-900/30'>
                                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping' style={{ animationDuration: "2s" }}></div>
                                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>

                                <Image src={smileMemoji} alt='Smile Memoji'
                                    className='size-20'></Image>
                            </div>

                        </Card>
                    </div>

                </div>
            </div>
        </div >
    )
}
