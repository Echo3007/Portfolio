import { twMerge } from "tailwind-merge"

export const Card = ({ className, children }) => {
    return (
        <div className={twMerge("bg-white/80 rounded-3xl z-0 relative overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-gray-800 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:pointer-events-none", className)}>
            {children}
        </div>
    )
}