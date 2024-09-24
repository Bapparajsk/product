"use client";
import React, {useState} from "react";
import {HoveredLink, Menu, MenuItem, ProductItem} from "@/ui/navbar-menu";
import ThemeToggle from "@/components/ThemeToggle";
import {cn} from "@/lib/utils";
import {IconAt, IconBrandGithub, IconBrandLinkedin, IconBrandWebflow, IconDeviceGamepad2, IconUser} from "@tabler/icons-react";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item={"Home"}>
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/">
                            <span className={"w-auto flex items-center justify-start gap-2"}>
                                <IconUser/>
                                About
                            </span>
                        </HoveredLink>
                        <HoveredLink href="https://bapparaj.me" target={"_blank"}>
                            <span className={"w-auto flex items-center justify-center gap-2"}>
                                <IconBrandWebflow size={18}/>
                                Portfolio
                            </span>
                        </HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/#">Web Development</HoveredLink>
                        <HoveredLink href="/#">Interface Design</HoveredLink>
                        <HoveredLink href="/#">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/#">Branding</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Products">
                    <div className="hidden md:grid w-full h-auto text-sm grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Quiz App"
                            href="https://quiz-app-amber-chi.vercel.app/"
                            src="/images/quiz-app.png"
                            description="A quiz app built with React and Tailwind CSS"
                        />
                        <ProductItem
                            title="Tailwind Master Kit"
                            href="#"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Production ready Tailwind css components for your next project"
                        />
                        <ProductItem
                            title="Moonbeam"
                            href="#"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                    </div>
                    <div className="flex flex-col space-y-4 text-sm md:hidden">
                        <HoveredLink href="https://quiz-app-amber-chi.vercel.app/" target={"_blank"}>
                            <span className={"w-auto flex items-center justify-start gap-2"}>
                                <IconDeviceGamepad2/>
                                Quiz App
                            </span>
                        </HoveredLink>
                        <HoveredLink href="/#">Interface Design</HoveredLink>
                        <HoveredLink href="/#">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/#">Branding</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/contact">
                            <span className={"w-auto flex items-center justify-center gap-2"}>
                                <IconAt size={18}/>
                                Email
                            </span>
                        </HoveredLink>
                        <HoveredLink href="https://github.com/Bapparajsk" target={"_blank"}>
                            <span className={"w-auto flex items-center justify-center gap-2"}>
                                <IconBrandGithub size={18}/>
                                GitHub
                            </span>
                        </HoveredLink>
                        <HoveredLink href="https://www.linkedin.com/in/bappa-raj-sk-6a0153233/" target={"_blank"}>
                            <span className={"w-auto flex items-center justify-center gap-2"}>
                                <IconBrandLinkedin size={18}/>
                                LinkedIn
                            </span>
                        </HoveredLink>
                    </div>

                </MenuItem>
                <ThemeToggle/>
            </Menu>
        </div>
    );
}
