import { ArrowComponent } from '../components/ArrowComponent';

const footerLinks = [
    {
        title: 'LinkedIn',
        link: "#",
    },
    {
        title: 'YouTube',
        link: "#",
    }
];

export const FooterSection = () => {
    return (
        <div>
            <div className="container">
                <div className='border-t border-black/25 py-5 text-sm flex flex-col md:flex-row items-center gap-4'>
                    <div className='text-black/80'>&copy; 2025. All rights reserved.</div>
                    <nav className='flex flex-col items-center gap-3'>
                        {footerLinks.map(link => (
                            <a href='#' key={link.title}
                                className='inline-flex items-center gap-1.5'>
                                <span className='font-semibold'>{link.title}</span>
                                <ArrowComponent className='h-6 w-6 text-black'></ArrowComponent>
                            </a>

                        ))}

                    </nav>
                </div>
            </div>

        </div>
    )
}