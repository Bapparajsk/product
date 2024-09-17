"use client";
import React, {useState} from "react";
import {HoveredLink, Menu, MenuItem, ProductItem} from "@/ui/navbar-menu";
import ThemeToggle from "@/components/ThemeToggle";
import {cn} from "@/lib/utils";
import {IconAt,IconBrandGithub, IconBrandLinkedin, IconBrandWebflow} from "@tabler/icons-react";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Web Development</HoveredLink>
                        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/branding">Branding</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Products">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Algochurn"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="Tailwind Master Kit"
                            href="https://tailwindmasterkit.com"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Production ready Tailwind css components for your next project"
                        />
                        <ProductItem
                            title="Moonbeam"
                            href="https://gomoonbeam.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                        <ProductItem
                            title="Rogue"
                            href="https://userogue.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
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
                        <HoveredLink href="https://bapparaj.me" target={"_blank"}>
                            <span className={"w-auto flex items-center justify-center gap-2"}>
                                <IconBrandWebflow size={18}/>
                                Portfolio
                            </span>
                        </HoveredLink>
                    </div>
                </MenuItem>
                <div className={"absolute right-5"}>
                    <ThemeToggle/>
                </div>
            </Menu>
        </div>
    );
}
