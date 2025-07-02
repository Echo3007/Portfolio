import { useCallback } from "react";



export const PageLinks = ({ href, children, ...props }) => {

    const isExternal = (href) => {
        if (!href) return false;
        try {
            const url = new URL(href, window.location.origin);
            return url.origin !== window.location.origin;
        } catch {
            return false;
        }
    };

    const handleClick = useCallback((e) =>{
        if(href && href.startsWith("#")){
            e.preventDefault();

            const targetId = href.slice(1);
            const targetElement = document.getElementById(targetId);

            if(targetElement){
                targetElement.scrollIntoView({behavior:'smooth'});
            }
        }
    }, [href])


    return (
        <>
            <a
                href={href}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onClick={href && href.startsWith('#') ? handleClick : undefined}
                {...props}
            >
                {children}
            </a>
        </>
    )
}

