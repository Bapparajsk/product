"use client"

import {BackgroundLines} from "@/ui/background-lines";
import {TypewriterEffectSmooth} from "@/ui/typewriter-effect";
import {ShimmerButton} from "@/ui/moving-border";
import {BackgroundBeamsWithCollision} from "@/ui/background-beams-with-collision";
import {StickyScrollRevealDemo} from "@/components/home/ScrollReveal";
import {InfiniteMovingCards} from "@/ui/infinite-moving-cards";
import {Ripple} from "@/ui/ripple-background";
import {IconsModals} from "@/home/Modal";
import {Footer} from "@/home/Footer";
import {ProjectsList} from "@/home/ProjectsList";
import {ProjectModal} from "@/home/ProjectsModal";
import {StickyCard} from "@/home/StickyCard";
import {testimonials, words} from "@/data/text-data";
import {IconBrandAbstract} from "@tabler/icons-react";
import {ProductCard} from "@/home/ProductCard";

function Page() {
    return (
        <div>
            <div className="items-center justify-center fixed right-12 bottom-12 z-40 hidden md:flex">
                <StickyCard/>
            </div>
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <TypewriterEffectSmooth words={words}/>
                <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
                    I am a software engineer, web developer. I am passionate about building
                    software, learning new technologies, and creating beautiful designs.
                </p>
                <div className={"w-full h-auto flex items-center justify-center gap-x-3"}>
                    <ProjectModal/>
                    <ShimmerButton
                        className="shadow-2xl"
                        onClick={() => {
                            window.open("https://bapparaj.me", "_blank");
                        }}
                    >
                        <span
                            className="flex gap-x-2 items-center whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight dark:from-white dark:to-slate-900/10 lg:text-lg text-blue-500">
                            My Portfolio <IconBrandAbstract/>
                        </span>
                    </ShimmerButton>
                </div>
            </BackgroundLines>
            <div
                className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <ProjectsList/>
            </div>
            <BackgroundBeamsWithCollision>
                <h2 className="absolute top-4 text-2xl z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                    What&apos;s cooler than Beams?{" "}
                    <div
                        className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div
                            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span className="">Exploding Experience.</span>
                        </div>
                    </div>
                </h2>
                <div className={"w-full h-auto flex items-center justify-center flex-wrap gap-16 mt-20 py-10"}>

                    <ProductCard
                        hading={"Problem Solver"}
                        description={"Problem solving is a skill that can be learned and improved. It is a skill that can be developed over time."}
                        buttonLink={"https://leetcode.com/u/Bapparajsk/"}
                    />
                    <ProductCard
                        hading={"Development"}
                        description={"I am a Full Stack Developer with experience in building web applications using React, Node.js, and MongoDB."}
                        buttonLink={"https://bapparaj.me"}
                    />
                    <ProductCard
                        hading={"Animated Portfolio"}
                        description={"A portfolio template with animations and transitions. Built with Next.js and TailwindCSS."}
                        buttonLink={"https://bapparaj.me"}
                    />
                </div>
            </BackgroundBeamsWithCollision>
            <StickyScrollRevealDemo/>
            <div
                className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
            <div
                className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background"
            >
                <IconsModals/>
                <Ripple />
            </div>
            <div className="flex items-center justify-center h-[20rem] w-full">
                <Footer/>
            </div>
        </div>
    );
}

export default Page;