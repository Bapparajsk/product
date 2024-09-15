"use client"

import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {ShimmerButton} from "@/components/ui/moving-border";
import {ProjectsList} from "@/components/home/ProjectsList";
import {ProjectModal} from "@/components/home/ProjectsModal";
import {BackgroundBeamsWithCollision} from "@/components/ui/background-beams-with-collision";
import {Meteors} from "@/components/ui/meteors";
import {StickyScrollRevealDemo} from "@/components/home/ScrollReveal";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {Ripple} from "@/components/ui/ripple-background";
import {CardStack} from "@/components/ui/card-stack";
import { words } from "@/data/text-data";
import React from "react";
import {cn} from "@/lib/utils";
import {IconsModals} from "@/components/home/Modal";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

function Page() {

    return (
        <div>
            <div className="items-center justify-center fixed right-12 bottom-12 z-40 hidden md:flex">
                <CardStack items={CARDS}/>
            </div>
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <TypewriterEffectSmooth words={words}/>
                <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
                    I am a software engineer, web developer, and designer. I am passionate about building
                    software, learning new technologies, and creating beautiful designs.
                </p>
                <div className={"w-full h-auto flex items-center justify-center gap-x-3"}>
                    <ProjectModal/>
                    <ShimmerButton className="shadow-2xl">
                        <span
                            className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                          Shimmer Button
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

                            {/* Meaty part - Meteor effect */}
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

                            {/* Meaty part - Meteor effect */}
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
                <FloatingDock
                    items={links}
                />
            </div>
        </div>
    );
}

const links = [
    {
        title: "Home",
        icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        href: "#",
    },

    {
        title: "Products",
        icon: (
            <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Components",
        icon: (
            <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Aceternity UI",
        icon: (
            <Image
                src="https://assets.aceternity.com/logo-dark.png"
                width={20}
                height={20}
                alt="Aceternity Logo"
            />
        ),
        href: "#",
    },
    {
        title: "Changelog",
        icon: (
            <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },

    {
        title: "Twitter",
        icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
];

const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
      {children}
    </span>
    );
};

const CARDS = [
    {
        id: 0,
        name: "Manu Arora",
        designation: "Senior Software Engineer",
        content: (
            <p>
                These cards are amazing, <Highlight>I want to use them</Highlight> in my
                project. Framer motion is a godsend ngl tbh fam 🙏
            </p>
        ),
    },
    {
        id: 1,
        name: "Elon Musk",
        designation: "Senior Shitposter",
        content: (
            <p>
                I dont like this Twitter thing,{" "}
                <Highlight>deleting it right away</Highlight> because yolo. Instead, I
                would like to call it <Highlight>X.com</Highlight> so that it can easily
                be confused with adult sites.
            </p>
        ),
    },
    {
        id: 2,
        name: "Tyler Durden",
        designation: "Manager Project Mayhem",
        content: (
            <p>
                The first rule of
                <Highlight>Fight Club</Highlight> is that you do not talk about fight
                club. The second rule of
                <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
                club.
            </p>
        ),
    },
];

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];

export default Page;