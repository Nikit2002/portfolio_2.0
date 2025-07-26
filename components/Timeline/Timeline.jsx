"use client";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { useScroll, motion, AnimatePresence, useAnimation, useInView, setDragLock } from "framer-motion";
import { TimelineItem } from "../TimelineItem/TimelineItem";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Timeline = () => {
    const {theme, setTheme} = useTheme();
    const [timelineStart, setTimelineStart] = useState(false);

    return(
        <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{  y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
        onMouseEnter={() => setTimelineStart(true)}
        className="w-[100%] h-[100%] flex flex-col justify-center justify-items-center gap-[20px] m-[auto]">
        <SectionHeading heading={"Experience"} />
        

<svg width="100%" height="800" viewBox="0 0 1139 1255" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative translate-y-10 translate-x-4">

<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 0
}} d="M570 0.5V185.5" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
/>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 2
}} d="M328.5 186H570" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
/>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 4
}} d="M328.5 136V226C328.5 237.046 319.546 246 308.5 246H21C9.95431 246 1 237.046 1 226V136C1 124.954 9.95431 116 21 116H308.5C319.546 116 328.5 124.954 328.5 136Z" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
>
</motion.path>

<motion.foreignObject className="w-[340px] h-[370px]" x={0} y={0}
initial={{
    opacity: 0
}}
animate={timelineStart? { 
     opacity: 1
} : {
    opacity: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 4
}}
viewport={{ once: true }} 
>
    <div className="w-[100%] h-[370px] flex flex-row text-center justify-center justify-items-center m-[auto] items-center">
        <div>
        <Image src='/companies/tjc.png' alt="company logo" width={100} height={100} className={`${theme === "dark" ? "invert-100 sepia-100 saturate-[0] hue-rotate-[309deg] brightness-[1.06] contrast-[1.01]" : "invert-[0] sepia-[.04] hue-rotate-[348deg] brightness-[1.03] contrast-[.72]"}`} />
        </div>
        <div className="flex flex-col">
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">TJC</span>
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">Backend Developer</span>
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">2022-2023</span>
        <div className="flex flex-wrap justify-center gap-[20px]">
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-css3.svg" : "/hard-skills-logos/lightTheme/icon-css3.svg"}`} alt="skill icon" width={40} height={40} />
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-javascript.svg" : "/hard-skills-logos/lightTheme/icon-javascript.svg"}`} alt="skill icon" width={40} height={40} />
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-sass.svg" : "/hard-skills-logos/lightTheme/icon-sass.svg"}`} alt="skill icon" width={40} height={40} />
        </div>
        </div>
    </div>
    </motion.foreignObject>



<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 6
}} d="M570 185.5V370.5" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
/>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 8
}} d="M569.5 369H811" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
/>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 10
}} d="M1137.5 315V405C1137.5 416.046 1128.55 425 1117.5 425H830C818.954 425 810 416.046 810 405V315C810 303.954 818.954 295 830 295H1117.5C1128.55 295 1137.5 303.954 1137.5 315Z" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
>
</motion.path>
    <motion.foreignObject className="w-[340px] h-[370px]" x={800} y={180}
    initial={{
    opacity: 0
}}
animate={timelineStart? { 
     opacity: 1
} : {
    opacity: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 10
}}
viewport={{ once: true }}
>
    <div className="w-[100%] h-[370px] flex flex-row text-center justify-center justify-items-center m-[auto] items-center">
        <div>
        <Image src='/companies/tjc.png' alt="company logo" width={100} height={100} className={`${theme === "dark" ? "invert-100 sepia-100 saturate-[0] hue-rotate-[309deg] brightness-[1.06] contrast-[1.01]" : "invert-[0] sepia-[.04] hue-rotate-[348deg] brightness-[1.03] contrast-[0.72]"}`} />
        </div>
        <div className="flex flex-col">
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">TJC</span>
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">Backend Developer</span>
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">2022-2023</span>
        <div className="flex flex-wrap justify-center gap-[20px]">
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-css3.svg" : "/hard-skills-logos/lightTheme/icon-css3.svg"}`} alt="skill icon" width={40} height={40} />
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-javascript.svg" : "/hard-skills-logos/lightTheme/icon-javascript.svg"}`} alt="skill icon" width={40} height={40} />
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-sass.svg" : "/hard-skills-logos/lightTheme/icon-sass.svg"}`} alt="skill icon" width={40} height={40} />
        </div>
        </div>
    </div>
    </motion.foreignObject>



<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 12
}} d="M570 365.5V550.5" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
/>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 14
}} d="M328.5 548H570" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
/>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 16
}} d="M328.5 496V586C328.5 597.046 319.546 606 308.5 606H21C9.95431 606 1 597.046 1 586V496C1 484.954 9.95431 476 21 476H308.5C319.546 476 328.5 484.954 328.5 496Z" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
>
</motion.path>
    <motion.foreignObject className="w-[340px] h-[370px]" x={0} y={360}
    initial={{
    opacity: 0
}}
animate={timelineStart? { 
     opacity: 1
} : {
    opacity: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 16
}}
viewport={{ once: true }} 
  >
    <div className="w-[100%] h-[370px] flex flex-row text-center justify-center justify-items-center m-[auto] items-center">
        <div>
        <Image src='/companies/tjc.png' alt="company logo" width={100} height={100} className={`${theme === "dark" ? "invert-100 sepia-100 saturate-[0] hue-rotate-[309deg] brightness-[1.06] contrast-[1.01]" : "invert-[0] sepia-[.04] hue-rotate-[348deg] brightness-[1.03] contrast-[.72]"}`} />
        </div>
        <div className="flex flex-col">
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">TJC</span>
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">Backend Developer</span>
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">2022-2023</span>
        <div className="flex flex-wrap justify-center gap-[20px]">
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-css3.svg" : "/hard-skills-logos/lightTheme/icon-css3.svg"}`} alt="skill icon" width={40} height={40} />
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-javascript.svg" : "/hard-skills-logos/lightTheme/icon-javascript.svg"}`} alt="skill icon" width={40} height={40} />
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-sass.svg" : "/hard-skills-logos/lightTheme/icon-sass.svg"}`} alt="skill icon" width={40} height={40} />
        </div>
        </div>
    </div>
    </motion.foreignObject>



<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 18
}} d="M570 537.5V722.5" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
/>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 20
}} d="M569.5 722H811" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
/>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 22
}} d="M1137.5 675V765C1137.5 776.046 1128.55 785 1117.5 785H830C818.954 785 810 776.046 810 765V675C810 663.954 818.954 655 830 655H1117.5C1128.55 655 1137.5 663.954 1137.5 675Z" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
>
</motion.path>
    <motion.foreignObject className="w-[340px] h-[370px]" x={800} y={540}
    initial={{
    opacity: 0
}}
animate={timelineStart? { 
     opacity: 1
} : {
    opacity: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 22
}}
viewport={{ once: true }} 
   >
    <div className="w-[100%] h-[370px] flex flex-row text-center justify-center justify-items-center m-[auto] items-center">
        <div>
        <Image src='/companies/tjc.png' alt="company logo" width={100} height={100} className={`${theme === "dark" ? "invert-100 sepia-100 saturate-[0] hue-rotate-[309deg] brightness-[1.06] contrast-[1.01]" : "invert-[0] sepia-[.04]  hue-rotate-[348deg] brightness-[1.03] contrast-[.72]"}`} />
        </div>
        <div className="flex flex-col">
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">TJC</span>
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">Backend Developer</span>
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">2022-2023</span>
        <div className="flex flex-wrap justify-center gap-[20px]">
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-css3.svg" : "/hard-skills-logos/lightTheme/icon-css3.svg"}`} alt="skill icon" width={40} height={40} />
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-javascript.svg" : "/hard-skills-logos/lightTheme/icon-javascript.svg"}`} alt="skill icon" width={40} height={40} />
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-sass.svg" : "/hard-skills-logos/lightTheme/icon-sass.svg"}`} alt="skill icon" width={40} height={40} />
        </div>
        </div>
    </div>
    </motion.foreignObject>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 24
}} d="M570 717.5V902.5" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }}  
/>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 26
}} d="M328.5 901H570" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
/>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 28
}} d="M328.5 846V936C328.5 947.046 319.546 956 308.5 956H21C9.95431 956 1 947.046 1 936V846C1 834.954 9.95431 826 21 826H308.5C319.546 826 328.5 834.954 328.5 846Z" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
>
</motion.path>
    <motion.foreignObject className="w-[340px] h-[370px]" x={0} y={708}
    initial={{
    opacity: 0
}}
animate={timelineStart? { 
     opacity: 1
} : {
    opacity: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 28
}}
viewport={{ once: true }}     
    >
    <div className="w-[100%] h-[370px] flex flex-row text-center justify-center justify-items-center m-[auto] items-center">
        <div>
        <Image src='/companies/tjc.png' alt="company logo" width={100} height={100} className={`${theme === "dark" ? "invert-100 sepia-100 saturate-[0] hue-rotate-[309deg] brightness-[1.06] contrast-[1.01]" : "invert-[0] sepia-[.04] hue-rotate-[348deg] brightness-[1.03] contrast-[.72]"}`} />
        </div>
        <div className="flex flex-col">
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">TJC</span>
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">Backend Developer</span>
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">2022-2023</span>
        <div className="flex flex-wrap justify-center gap-[20px]">
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-css3.svg" : "/hard-skills-logos/lightTheme/icon-css3.svg"}`} alt="skill icon" width={40} height={40} />
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-javascript.svg" : "/hard-skills-logos/lightTheme/icon-javascript.svg"}`} alt="skill icon" width={40} height={40} />
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-sass.svg" : "/hard-skills-logos/lightTheme/icon-sass.svg"}`} alt="skill icon" width={40} height={40} />
        </div>
        </div>
    </div>
    </motion.foreignObject>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 30
}} d="M570 897.5V1082.5" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
/>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 32
}} d="M569.5 1082H811" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
/>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 34
}} d="M1137.5 1025V1115C1137.5 1126.05 1128.55 1135 1117.5 1135H830C818.954 1135 810 1126.05 810 1115V1025C810 1013.95 818.954 1005 830 1005H1117.5C1128.55 1005 1137.5 1013.95 1137.5 1025Z" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
>
</motion.path>
    <motion.foreignObject className="w-[340px] h-[370px]" x={800} y={885}
    initial={{
    opacity: 0
}}
animate={timelineStart? { 
     opacity: 1
} : {
    opacity: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 34
}}
viewport={{ once: true }} 
   >
    <div className="w-[100%] h-[370px] flex flex-row text-center justify-center justify-items-center m-[auto] items-center">
        <div>
        <Image src='/companies/tjc.png' alt="company logo" width={100} height={100} className={`${theme === "dark" ? "invert-100 sepia-100 saturate-[0] hue-rotate-[309deg] brightness-[1.06] contrast-[1.01]" : "invert-[0] sepia-[.04] hue-rotate-[348deg] brightness-[1.03] contrast-[.72]"}`} />
        </div>
        <div className="flex flex-col">
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">TJC</span>
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">Backend Developer</span>
        <span className="font-Michroma text-base text-[#fff] light:text-[#242424] text-center">2022-2023</span>
        <div className="flex flex-wrap justify-center gap-[20px]">
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-css3.svg" : "/hard-skills-logos/lightTheme/icon-css3.svg"}`} alt="skill icon" width={40} height={40} />
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-javascript.svg" : "/hard-skills-logos/lightTheme/icon-javascript.svg"}`} alt="skill icon" width={40} height={40} />
            <Image src={`${theme === "dark" ? "/hard-skills-logos/icon-sass.svg" : "/hard-skills-logos/lightTheme/icon-sass.svg"}`} alt="skill icon" width={40} height={40} />
        </div>
        </div>
    </div>
    </motion.foreignObject>


<motion.path initial={{
    pathLength: 0
}}
animate={timelineStart? { 
     pathLength: 1
} : {
    pathLength: 0
}}
transition={{
    duration: 5,
    ease: 'easeInOut',
    delay: 36
}} d="M570 1070V1255" stroke={`${theme === "dark" ? "#fff" : "#242424"}`} strokeWidth="3"
viewport={{ once: true }} 
/>
</svg>
        </motion.section>
    )
}