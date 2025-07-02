"use client";
import { PageLinks } from "../components/PageLinks";
import { useEffect, useState } from "react";


export const Header = () => {

    const [active, setActive] = useState('#hero');
    const navItems = [
        { href: "#hero", label: "Home" },
        { href: "#projects", label: "Projects" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
    ];


    useEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 3;

            let currentActive = navItems[0].href;

            for (const { href } of navItems) {
                const section = document.querySelector(href);
                if (section) {
                    const top = section.offsetTop;
                    const bottom = top + section.offsetHeight;
                    if (scrollPos >= top && scrollPos < bottom) {
                        currentActive = href;
                        break;
                    }
                }
            }

            const lastSelection = document.querySelector(navItems[navItems.length - 1].href);
            if (lastSelection && window.scrollY + window.innerHeight >= lastSelection.offsetTop) {
                currentActive = navItems[navItems.length - 1].href;
            }

            setActive(currentActive);
        };
        window.addEventListener("scroll", onScroll);
        // onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="flex justify-center items-center relative top-3 lg:sticky z-30 ">
            <nav className="flex gap-1 border border-white/80 rounded-full bg-sky-200/50 backdrop-blur">
                {navItems.map(({ href, label }) => (
                    <PageLinks
                        key={href}
                        href={href}
                        className={`nav-item ${active === href
                            ? "bg-white text-gray-900"
                            : "text-gray-600 hover:bg-white hover:text-gray-900"
                            }`}>
                        {label}

                    </PageLinks>
                ))}

            </nav>
        </div>
    );
};
