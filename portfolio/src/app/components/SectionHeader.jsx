export const SectionHeader = ({
    title,
    eyebrow,
    description
}) => {
    return (
        <>
            <div className='flex justify-center'>
                <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-red-500 
                    via-yellow-400 via-green-400 via-blue-500 to-purple-500 
                    bg-clip-text text-transparent text-center text-shadow-xs md:text-lg lg:text-sm'>{eyebrow}</p>
            </div>
            <h2 className='font-serif text-3xl md:text-5xl lg:text-3xl text-center mt-6'>{title}</h2>
            <p className='text-center md:text-lg lg:text-sm text-black/80 mt-4 max-w-md mx-auto'>{description}</p>
        </>
    )
}