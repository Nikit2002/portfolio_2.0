"use client";
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { Shelf } from "../Shelf/Shelf"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import 'swiper/css'
import { testimonials } from "../../data/testimonials";
import { TestimonialItem } from "../TestimonialItem/TestimonialItem";
import { motion } from "framer-motion";

export const Testimonials = () => {
    return(
        <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
        className="w-[100%] mt-[100px] flex flex-col justify-center justify-items-center m-[auto]">
        <SectionHeading heading={"Testimonials"} />
        <Swiper
        slidesPerView={1}
        spaceBetween={20}
        className="w-[100%]"
        >
        {testimonials.map(item => {
            return(
                <SwiperSlide className="w-[50%]" key={item.id}>
                    <TestimonialItem item={item} />
                </SwiperSlide>
            )
        })}
        <Shelf />
        </Swiper>
        </motion.section>
    )
}