export const TechIcon = ({ component }) => {
    const Component = component;
    return (
        <>
            <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
            <svg className="siex-0 absolute ">
                <linearGradient id='tech-icon-gradient'>
                    <stop offset="0%" stopColor="rgb(252, 165, 165)"></stop>
                    <stop offset="100%" stopColor="rgb(255, 154, 112)"></stop>
                </linearGradient>
            </svg>
        </>
    );
}