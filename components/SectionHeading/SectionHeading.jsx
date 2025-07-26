"use client";
import {motion} from 'framer-motion';
export const SectionHeading = ({heading}) => {
    return(
        <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
        className="w-[100%] sm:w-[450px] m-[auto] flex flex-col justify-center justify-items-center items-center h-[70px] rounded-[20px] border-4 border-[#fff] light:border-[#242424]">
            <h2 className="font-Michroma text-2xl text-[#fff] light:text-[#242424] text-center">{heading}</h2>
        </motion.div>
    )
}