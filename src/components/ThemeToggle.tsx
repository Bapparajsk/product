"use client";
import { useTheme } from "@/context/ThemeContext";
import {IconMoon, IconSun} from "@tabler/icons-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return ( theme === "light" ? <IconMoon className={"cursor-pointer"} onClick={toggleTheme} color={"#000000"}/> : <IconSun className={"cursor-pointer"} onClick={toggleTheme} color={"#FFFFFF"}/> );
}