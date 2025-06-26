import { twMerge } from "tailwind-merge"

export const ArrowComponent = ({ className }) => {
    return (
        <div >
            <svg className={twMerge("text-white dark:text-white rotate-45",className)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
            </svg>
        </div>
    )
}