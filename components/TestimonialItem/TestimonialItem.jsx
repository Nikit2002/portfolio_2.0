"use client";
import { motion } from "framer-motion";
export const TestimonialItem = ({item}) => {
    return(
        <section
        className="w-[100%] h-[100%] justify-center justify-items-center text-center m-[auto]">
        <div className="w-[100%] flex flex-col justify-center justify-items-center items-center text-center mt-[100px] gap-[40px]">
            <p className="w-[100%] sm:w-[40%] flex flex-wrap text-[#fff] light:text-[#242424] text-base font-Michroma text-center">{item.description}</p>
            <span className="text-[#fff] block text-xl font-Paprika text-center m-[auto]  light:text-[#242424]">{item.author}</span>           
            <span className="text-[#fff] block text-base font-Michroma text-center m-[auto]  light:text-[#242424]">{item.job}</span>           
        </div>
        </section>
    )
}