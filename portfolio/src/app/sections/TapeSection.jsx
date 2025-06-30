"use client";

import { useEffect, useState } from "react";

const words = [
    "Performant",
    "Accessible",
    "User Friendly",
    "Scalable",
    "Maintanable",
    "Usable",
    "Reliable",
    "Secure",
    "Responsive",
    "Interactive",
    "Search Optimised",

]

export const TapeSection = () => {
    const [repeatedWords, setRepeatedWords] = useState(words);

    useEffect(() => {
        const repeatedWords = () => {
            const repeatCount = 10;
            const extendedWords = Array(repeatCount).fill(words).flat();
            setRepeatedWords(extendedWords);
        };

        repeatedWords();
    }, []);

    return (
        <div className="py-16 overflow-x-clip">
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
                <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex flex-none gap-4 py-3 lg:gap-6 -translate-x-1/2 animate-move-left
                    "
                        style={{ animationDuration: "120s" }}>
                        {repeatedWords.map((word, index) => (
                            <div key={index} className="inline-flex gap-4 items-center" >
                                <span className="text-gray-800 uppercase font-extrabold text-sm">{word}</span>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white -rotate-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                                </svg>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

