"use client";
import Image from "next/image"
import { SmallHeading } from "../SmallHeading/SmallHeading"
import { PortfolioHardSkills } from "../PortfolioHardSkills/PortfolioHardSkills"
import { PortfolioDescriptionBlocks } from "../PortfolioDescriptionBlocks/PortfolioDescriptionBlocks"
import { PortfolioShelf } from "../PortfolioShelf/PortfolioShelf"
import { motion } from "framer-motion";
export const PortfolioItem = ({item}) => {
    return(
        <section
        className="w-[100%] h-[100%] justify-center justify-items-center m-[auto]">
        <div className="w-[100%] flex flex-row justify-center justify-items-center relative top-[140px] items-end z-1000">
            <Image src="/mockups/Apple iPad Mini Space Grey.svg" alt="iPad Mockup" width={200} height={150} className={`bg-[url(${item.preview})] hidden xl:flex`}/>
            <Image src="/mockups/Apple iMac Retina.svg" alt="iMac Mockup" width={400} height={200} className={`bg-[url(${item.preview})]`} />
            <Image src="/mockups/Apple iPhone 11 Pro Max Space Grey.svg" alt="iPhone Mockup" width={100} height={150} className={`bg-[url(${item.preview})] hidden xl:flex`} />           
        </div>  
        </section>
    )
}