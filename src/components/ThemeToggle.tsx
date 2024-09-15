"use client";
import { useState, useEffect } from 'react';
import {IconMoon, IconSun} from "@tabler/icons-react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Check for stored theme
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.add(storedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return ( theme === "light" ? <IconMoon className={"cursor-pointer"} onClick={toggleTheme} color={"#000000"}/> : <IconSun className={"cursor-pointer"} onClick={toggleTheme} color={"#FFFFFF"}/> );
}