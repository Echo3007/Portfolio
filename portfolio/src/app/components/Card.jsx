import { twMerge } from "tailwind-merge"

export const Card = ({ className, children, ...other }) => {
    return (
        <div className={twMerge("bg-white rounded-3xl z-0 relative overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-gray-800 after:outline-2 after:outline after:-outline-offset-1 after:rounded-3xl after:pointer-events-none", className)} {...other}>
            {children}

        </div>
    )
}