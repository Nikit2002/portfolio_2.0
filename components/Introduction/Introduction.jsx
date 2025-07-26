"use client";
import Image from "next/image"
import {motion} from 'framer-motion';
export const Introduction = () => {
    return(
        <section
        className="mt-[100px] flex flex-col lg:flex-row justify-center justify-items-center items-center gap-[40px]">
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            viewport={{ once: true }}
            className=" mt-[100px] flex flex-col gap-[80px] justify-center text-center sm:text-left">
                <h2 className="uppercase font-MavenPro text-[#fff] light:text-[#242424] text-3xl sm:text-5xl flex-wrap">Mykyta Dubinin</h2>
                <span className="uppercase font-KronaOne text-[#fff] light:text-[#242424] text-3xl sm:text-5xl flex-wrap">FullStack <br /> Developer</span>
                <a href="/cv/cv.pdf" download className="w-[100%] sm:w-[365px] h-[67px] relative rounded-[20px] border-4 border-[#fff] light:border-[#242424] font-Michroma text-base sm:text-2xl text-[#fff] light:text-[#242424] flex items-center justify-center justify-items-center cursor-pointer duration-[0.3s] group hover:bg-[#fff] light:hover:bg-[#242424] hover:text-[#000] hover:font-bold light:hover:text-[#fff] light:hover:font-bold pl-[40px]"><Image src="/icon-download.png" className="w-[50px] h-[40px] sm:w-[80px] sm:h-[40px] absolute inset-0 opacity-100 light:opacity-0 group-hover:opacity-0 light:group-hover:opacity-100 transition-opacity duration-300 flex items-center mt-[10px] sm:pl-[10px] sm:ml-[20px]" alt="download icon" width={80} height={40} /><Image src="/icon-download-dark.png" className="w-[50px] h-[40px] sm:w-[80px] sm:h-[40px] flex items-center absolute inset-0 opacity-0 light:opacity-100 group-hover:opacity-100 light:group-hover:opacity-0 transition-opacity duration-300 mt-[10px] pl-[10px] ml-[20px]" alt="download icon" width={80} height={40} />Download CV</a>
            </motion.div>
            <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 4 }}
            viewport={{ once: true }}
            >
                <Image src="/photo/photo.png" alt="main photo" width={524} height={575} />
            </motion.div>
        </section>
    )
}