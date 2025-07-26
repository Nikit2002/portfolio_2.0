"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { useEffect, useState } from "react";
import MobileHeader from "../MobileHeader/MobileHeader";

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1330px)');
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
    }, []);


    return(
        <header className="w-[100%] m-[auto] flex justify-center flex-row flex-wrap  items-center gap-[20px]">
            <div>
                <Link href="/" className="font-Lalezar text-4xl text-[#fff] light:text-[#242424]">MD</Link>
            </div>
            {!isMobile ?
            <nav className="w-[70%] flex justify-center gap-[20px] visible">
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma" href="/">About</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma" href="/">Portfolio</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma" href="/">Experience</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma" href="/">Services</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma" href="/">Pricing</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma" href="/">Testimonials</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma" href="/">Contact</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
            </nav> 
            :
            <nav className="w-[70%] flex justify-center gap-[20px] hidden">
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma" href="/">About</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma" href="/">Portfolio</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma" href="/">Experience</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma" href="/">Services</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma" href="/">Pricing</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma" href="/">Testimonials</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma" href="/">Contact</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
            </nav> 
            }
            <ThemeSwitcher />
            <LanguageSwitcher />
            <SocialIcons />
            {isMobile && <MobileHeader />}
        </header>
    )
}