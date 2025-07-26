"use client";
import Image from "next/image"
import { PortfolioItem } from "../PortfolioItem/PortfolioItem"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { Shelf } from "../Shelf/Shelf"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { portfolio } from "../../data/portfolio"
import { Navigation } from "swiper/modules"
import 'swiper/css'
import { PortfolioDescriptionBlocks } from "../PortfolioDescriptionBlocks/PortfolioDescriptionBlocks";
import { PortfolioShelf } from "../PortfolioShelf/PortfolioShelf";
import { PortfolioHardSkills } from "../PortfolioHardSkills/PortfolioHardSkills"
import { SmallHeading } from "../SmallHeading/SmallHeading"
import {motion} from 'framer-motion'


export const Portfolio = () => {
    return(
        <motion.section 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
        className="w-[100%] flex flex-col justify-center justify-items-center m-[auto]">
        <SectionHeading heading={"Portfolio"} />
        <Swiper
        slidesPerView={1}
        spaceBetween={20}
        className="w-[100%]"
        >
        {portfolio.map(item => {
            return(
                <SwiperSlide className="w-[50%]" key={item.id}>
                    <PortfolioDescriptionBlocks item={item} />
                    <PortfolioItem item={item} />
                </SwiperSlide>
            )
        })}
        <Shelf />
        </Swiper>
        </motion.section>
    )
}