"use client";

import React, {useEffect, useState} from 'react';
import {Particles} from "@/ui/particles";
import {useTheme} from "@/context/ThemeContext";
import Form from "@/components/contact/Form";

function Page() {

    const { theme } = useTheme();
    const [color, setColor] = useState("#FFFFFF");

    useEffect(() => {
        setColor(theme === 'light' ? "#000000" : "#FFFFFF");
    }, [theme]);

    return (
        <main className={"w-full h-screen flex items-center justify-center px-5"}>
            <Form />
            <Particles
                className="absolute inset-0"
                quantity={500}
                ease={80}
                color={color}
                refresh
            />
        </main>
    );
}

export default Page;