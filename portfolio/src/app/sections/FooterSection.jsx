import { ArrowComponent } from '../components/ArrowComponent';
import { PageLinks } from '../components/PageLinks';


const footerLinks = [
    {
        title: 'LinkedIn',
        link: "https://www.linkedin.com/in/angela-pellillo-846a55157/",
    },
    {
        title: 'YouTube',
        link: "https://www.youtube.com/@AngelaPellillo",
    }
];

export const FooterSection = () => {
    return (
        <div>
            <div className="container">
                <div className='border-t border-black/25 py-5 text-sm flex flex-col md:flex-row 
                md:justify-between items-center gap-4'>
                    <div className='text-black/80'>&copy; 2025. All rights reserved.</div>
                    <nav className='flex flex-col md:flex-row items-center gap-3'>
                        {footerLinks.map(link => (
                            <PageLinks href={link.link} key={link.title}
                                className='inline-flex items-center gap-1.5 hover:scale-110 active:scale-95 
                                active:translate-y-0.5 duration-150 ease-in-out'>
                                <span className='font-semibold'>{link.title}</span>
                                <ArrowComponent className='h-6 w-6 text-black'></ArrowComponent>
                            </PageLinks>

                        ))}

                    </nav>
                </div>
            </div>

        </div>
    )
}