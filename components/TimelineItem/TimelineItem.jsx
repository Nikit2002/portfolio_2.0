"use client";
import {motion} from "framer-motion"
export const TimelineItem = () => {
    return(
        <motion.div
            animate={{
                x: 100, opacity: 1
            }}
            initial={{
                x: 0, opacity: 0
            }}
            transition={{
                duration: 1
            }}
        >
         <h2>Hello</h2>
        </motion.div>
    )
}