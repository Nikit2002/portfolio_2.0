"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { useEffect, useState } from "react";
import LanguagesMobile from "../LanguagesMobile/LanguagesMobile";
import { useTheme } from "next-themes";

export default function MobileHeader() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const {theme, setTheme} = useTheme();
    return(
        <>
        <button type="button" onClick={() => setIsOpenMenu(!isOpenMenu)}><Image src={`${theme === "dark" ? "/burger-menu-light.svg" : "/burger-menu-dark.svg"  }`} alt="burger menu icon" width={39} height={39}/></button>
        {isOpenMenu &&
        <section className="w-[100%] m-[auto] bg-[#242424] light:bg-[#fff] border-2 border-[#fff] light:border-[#242424] flex flex-col items-center gap-[20px] absolute top-0 z-1000 pb-[20px]">
            <button type="button" onClick={() => setIsOpenMenu(!isOpenMenu)} className="ml-[auto] p-[20px]"><Image src={`${theme === "dark" ? "/close-light.svg" : "/close-dark.svg"  }`} alt="close menu icon" width={39} height={39}/></button>
            <div>
                <Link href="/" className="font-Lalezar text-4xl text-[#fff] light:text-[#242424]">MD</Link>
            </div>
            <nav className="w-[100%] flex flex-col justify-center text-center gap-[20px]">
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma text-center" href="/">About</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma text-center" href="/">Portfolio</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma text-center" href="/">Experience</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma text-center" href="/">Services</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma text-center" href="/">Pricing</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma text-center" href="/">Testimonials</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
                <p className="relative group"><Link className="text-[#fff] light:text-[#242424] text-xl font-Michroma text-center" href="/">Contact</Link><span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff] light:bg-[#242424] transition-all group-hover:w-full"></span></p>
            </nav> 
        </section>
        }
        </>
    )
}