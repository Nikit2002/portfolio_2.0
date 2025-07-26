"use client";
import { useTheme } from "next-themes";
import { PortfolioHardSkills } from "../PortfolioHardSkills/PortfolioHardSkills"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { motion } from "framer-motion";

export const PortfolioDescriptionBlocks = ({item}) => {
    const {theme, setTheme} = useTheme();
    return(
        <div
        className="w-[100%] flex flex-col justify-center relative top-[100px]">
        <div 
        className="w-[100%] sm:w-[450px] m-[auto] flex flex-col justify-center justify-items-center items-center h-[67px] rounded-[20px] border-4 border-[#fff] light:border-[#242424]">
            <h2 className="font-Michroma text-2xl text-[#fff] light:text-[#242424] text-center">{item.title}</h2>
        </div>
       { theme === "dark" && <PortfolioHardSkills skills={item.languagesUsed} /> }
       { theme === "light" && <PortfolioHardSkills skills={item.languagesUsedLight} /> }
        </div>
    )
}