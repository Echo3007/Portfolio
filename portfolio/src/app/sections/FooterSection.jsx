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
                <div className='border-t border-white/15 py-5 text-sm'>
                    <div>&copy; 2025. All rights reserved.</div>
                    <nav>
                        {footerLinks.map(link => (
                            <a href='#' key={link.title}>
                                <span>{link.title}</span>
                                <ArrowComponent></ArrowComponent>
                            </a>

                        ))}

                    </nav>
                </div>
            </div>

        </div>
    )
}