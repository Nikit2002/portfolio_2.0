"use client";
import { motion } from "framer-motion"

export const ServiceItem = ({desc, delay}) => {
    return(
        <motion.div className="w-[400px] m-[auto] flex flex-col justify-center justify-items-center items-center h-[200px] rounded-[20px] border-4 border-[#fff] light:border-[#242424]"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
        >
            <span className="font-Michroma text-xl text-[#fff] light:text-[#242424] text-center">{desc}</span>
        </motion.div>
    )
}