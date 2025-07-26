"use client";
import { hardSkillsLogos } from "../../data/hardSkillsLogos"
import { Shelf } from "../Shelf/Shelf"
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css'
import Image from "next/image"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { useTheme } from "next-themes";
import {motion} from 'framer-motion'

export const HardSkillsCarousel = () => {
    const {theme, setTheme} = useTheme();
    return(
        <section className="flex flex-col w-[100%] h-[100%] justify-center justify-items-center mt-[100px]">
            <SectionHeading heading={"Hard Skills"} />
                <motion.div 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
                className="w-[100%] h-[100%] flex flex-col justify-center justify-items-center">
                    <Swiper spaceBetween={20} slidesPerView={1} className="w-[40%] h-[50px] flex flex-row relative top-[140px] justify-center justify-items-center cursor-pointer z-10"
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        280: {
                            slidesPerView: 2
                        },
                        440: {
                            slidesPerView: 3
                        },
                        640: {
                            slidesPerView: 4
                        },
                        790: {
                            slidesPerView: 6
                        }
                    }}
                    loop={true}
                    >
                    {hardSkillsLogos.map(logo => {
                        return(
                            <SwiperSlide key={logo.id}
                            className="w-[100%] h-[100px] flex flex-row justify-center justify-items-center">
                                <div className="group relative z-20">
                                   {theme === "dark" && <Image src={logo.logo} alt="hard skill logo" width={50} height={50} className="w-[50px] h-[50px] absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0" /> }
                                   {theme === "light" && <Image src={logo.lightLogo} alt="hard skill logo" width={50} height={50} className="w-[50px] h-[50px] absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0" /> }
                                    <Image src={logo.hoverLogo} alt="hard skill hover logo" width={50} height={50} className="w-[50px] h-[50px] absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100" />    
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    </Swiper>
                <Shelf />
                </motion.div>
                </section>
    )
}