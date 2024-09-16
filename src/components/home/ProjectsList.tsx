"use client"

import {AnimatedTooltip} from "@/ui/animated-tooltip";
import {FlipWords} from "@/ui/flip-words";
import {people} from "@/data/text-data";

export const ProjectsList = () => {
    const words = ["better", "cute", "beautiful", "modern"];
    return (
        <div className={"w-full h-auto flex flex-col items-center justify-center"}>
            <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Build
                <FlipWords words={words}/> <br/>
                websites with
            </div>
            <div className="flex flex-row items-center mt-24 justify-center w-full">
                <AnimatedTooltip items={people}/>
            </div>
        </div>
    )
}