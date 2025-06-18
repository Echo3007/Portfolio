import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";

export const ToolboxItems = ({ toolBoxItems, className }) => {
    return (
        <div className={twMerge("flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div className="flex flex-none py-0.5 gap-6">
                {toolBoxItems.map(item => (
                    <div key={item.title} className='inline-flex items-center gap-4 py-2 px-3 outline -outline-2 rounded-lg'>
                        <TechIcon component={item.iconType} />
                        <span className='font-semibold'>{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}