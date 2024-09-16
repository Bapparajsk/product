"use client"

import {BackgroundLines} from "@/ui/background-lines";
import {TypewriterEffectSmooth} from "@/ui/typewriter-effect";
import {ShimmerButton} from "@/ui/moving-border";
import {BackgroundBeamsWithCollision} from "@/ui/background-beams-with-collision";
import {Meteors} from "@/ui/meteors";
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

function Page() {
    return (
        <div>
            <div className="items-center justify-center fixed right-12 bottom-12 z-40 hidden md:flex">
                <StickyCard/>
            </div>
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <TypewriterEffectSmooth words={words}/>
                <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
                    I am a software engineer, web developer, and designer. I am passionate about building
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
                            <span className="">Exploding beams.</span>
                        </div>
                    </div>
                </h2>
                <div className={"w-full h-auto flex items-center justify-center flex-wrap gap-16 mt-20"}>
                    <div className=" w-full relative max-w-xs">
                        <div
                            className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl"/>
                        <div
                            className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                            <div
                                className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-2 w-2 text-gray-300"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                    />
                                </svg>
                            </div>

                            <h1 className="font-bold text-xl text-white mb-4 relative">
                                Meteors because they&apos;re cool
                            </h1>

                            <p className="font-normal text-base text-slate-500 mb-4 relative">
                                I don&apos;t know what to write so I&apos;ll just paste something
                                cool here. One more sentence because lorem ipsum is just
                                unacceptable. Won&apos;t ChatGPT the shit out of this.
                            </p>

                            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                                Explore
                            </button>
                            <Meteors number={20}/>
                        </div>

                    </div>
                    <div className=" w-full relative max-w-xs">
                        <div
                            className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl"/>
                        <div
                            className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                            <div
                                className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-2 w-2 text-gray-300"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                    />
                                </svg>
                            </div>

                            <h1 className="font-bold text-xl text-white mb-4 relative">
                                Meteors because they&apos;re cool
                            </h1>

                            <p className="font-normal text-base text-slate-500 mb-4 relative">
                                I don&apos;t know what to write so I&apos;ll just paste something
                                cool here. One more sentence because lorem ipsum is just
                                unacceptable. Won&apos;t ChatGPT the shit out of this.
                            </p>

                            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                                Explore
                            </button>

                            <Meteors number={20}/>
                        </div>

                    </div>
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
                <Ripple numCircles={10}/>
            </div>
            <div className="flex items-center justify-center h-[20rem] w-full">
                <Footer/>
            </div>
        </div>
    );
}

export default Page;