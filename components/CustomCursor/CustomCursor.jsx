"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const CustomCursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const {theme, setTheme} = useTheme();
    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY});
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [])

    return(
        <div className={`fixed pointer-events-none z-[9999] rounded-full border-2 font-Lalezar text-xl flex items-center justify-center text-[#fff] light:text-[#242424] ${theme === "dark" ? "border-[#fff]" : "border-[#242424]"}`} 
        style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
            width: '40px',
            height: '40px',
        }}
        >MD</div>
    )
}