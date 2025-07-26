"use client";
import { motion } from "framer-motion"
export const PricingItem = ({title_price, options, prices, delay}) => {
    return(
        <motion.div className="w-[400px] h-[500px] m-[auto] flex flex-col justify-center justify-items-center items-center rounded-[20px] gap-[40px] border-4 border-[#fff] light:border-[#242424]"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
        >
            <span className="font-Michroma text-xl text-[#fff] light:text-[#242424] text-center">{title_price}</span>
            <ul>
                {options.map((option, idx) => {
                    return(
                        <li key={idx} className="font-Paprika text-xl text-[#fff] light:text-[#242424] text-center">{option}</li>
                    )
                })}
            </ul>
            <span className="font-Paprika text-xl text-[#fff] light:text-[#242424] text-center">{prices}</span>
        </motion.div>
    )
}