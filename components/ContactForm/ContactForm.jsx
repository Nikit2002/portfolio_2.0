"use client";
import Image from "next/image"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { useTheme } from "next-themes";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactForm = () => {
    const {theme, setTheme} = useTheme();
    const [type, setType] = useState("default");
    const typeValue = (value) => {
        setType((prev) => {
            prev = value;
            return prev;
        });
    }
    return(
        <section className="w-[100%] mt-[100px] flex flex-col justify-center justify-items-center m-[auto]">
        <SectionHeading heading={"Contact"} />
        <motion.form 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
        action="#" method="post" className="w-[100%] sm:w-[50%] mt-[100px] flex flex-col justify-center gap-[40px] justify-items-center m-[auto]">
            <div className="w-[100%] h-[80px] flex  sm:justify-between items-center border-b-4 border-[#fff] light:border-[#242424] p-[20px]">
                <input type="text" name="username" id="username" placeholder="FullName" className="font-Michroma text-xl text-[#fff] flex light:text-[#242424] outline-none border-none w-[100%]" required/>
                <Image src={`${theme === "dark" ? "/Asterisk.svg" : "/Asterisk-dark.svg"}`} alt="required icon" width={20} height={20} className="w-[20px] h-[20px]" />
            </div>
            <div className="w-[100%] h-[80px] flex items-center  sm:justify-between border-b-4 border-[#fff] light:border-[#242424] p-[20px]">
                <input type="email" name="email" id="email" placeholder="Email" className="font-Michroma text-xl text-[#fff] light:text-[#242424] outline-none border-none w-[100%]" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z]\.com$"/>
                <Image src={`${theme === "dark" ? "/Asterisk.svg" : "/Asterisk-dark.svg"}`} alt="required icon" width={20} height={20} className="w-[20px] h-[20px]" />
            </div>
                <div className="w-[100%] h-[60px] border-4 rounded-[20px] flex justify-center m-[auto] items-center border-[#fff] light:border-[#242424]">
                    <p className="font-Michroma text-base sm:text-xl text-center text-[#fff] light:text-[#242424]">Valid email: <span className="font-KronaOne text-base sm:text-xl text-center text-[#fff] light:text-[#242424]">email@gmail.com</span></p>
                </div>
            <div className="w-[100%] h-[80px] flex  sm:justify-between items-center border-b-4 border-[#fff] light:border-[#242424] p-[20px]">
                <input type="text" name="message" id="message" placeholder="Message" className="font-Michroma text-xl text-[#fff] light:text-[#242424] outline-none border-none w-[100%]" required/>
                <Image src={`${theme === "dark" ? "/Asterisk.svg" : "/Asterisk-dark.svg"}`} alt="required icon" width={20} height={20} className="w-[20px] h-[20px]" />
            </div>
            <div className="w-[100%] h-[80px] flex relative items-center  sm:justify-between border-b-4 border-[#fff] light:border-[#242424] p-[20px]">
            <select name="type" id="type" className="appearance-none cursor-pointer block w-full bg-transparent leading-tight focus:outline-none focus:border-none focus:bg-transparent font-Michroma text-xl text-[#fff] light:text-[#242424] border-none outline-none" onChange={(e) => typeValue(e.target.value)}>
                <option value="default" disabled selected className="appearance-none font-Michroma text-xl text-[#fff] light:text-[#242424]">Website Type</option>
                <option value="e-commerce" className="appearance-none font-Michroma text-xl text-[#fff] light:text-[#242424]">E-Commerce Website</option>
                <option value="corporate" className="appearance-none font-Michroma text-xl text-[#fff] light:text-[#242424]">Corporate Website</option>
                <option value="landing" className="appearance-none font-Michroma text-xl text-[#fff] light:text-[#242424]">Landing Website</option>
                <option value="other" className="appearance-none font-Michroma text-xl text-[#fff] light:text-[#242424]">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 pr-[0px] sm:pr-[20px] flex items-center">
            <Image src={`${theme === "dark" ? "/DownArrow.svg" : "/DownArrow-dark.svg"}`} alt="arrow down icon" width={30} height={30} className="w-[30px] h-[30px]" />
            </div>
            </div>
            {type === "other" && 
            <div className="w-[100%] h-[80px] mt-[40px] items-center border-4 rounded-[20px] flex justify-center m-[auto] border-[#fff] light:border-[#242424]">
                <input type="text" name="username" id="username" placeholder="What service do you need?" className="font-Michroma text-xl text-[#fff] light:text-[#242424] outline-none border-none" required/>
            </div>
            }
            <div className="w-[100%] h-[80px] flex items-center relative  sm:justify-between border-b-4 border-[#fff] light:border-[#242424] p-[20px]">
            <select name="budget" id="budget" className="appearance-none cursor-pointer block w-full bg-transparent leading-tight focus:outline-none focus:border-none focus:bg-transparent font-Michroma text-xl text-[#fff] light:text-[#242424] border-none outline-none">
                <option value="default" disabled selected className="appearance-none font-Michroma text-xl text-[#fff] light:text-[#242424]">Budget Type</option>
                <option value="less_1000" className="appearance-none font-Michroma text-xl text-[#fff] light:text-[#242424]">Less than $1000</option>
                <option value="1000_3000" className="appearance-none font-Michroma text-xl text-[#fff] light:text-[#242424]">$1000-3000</option>
                <option value="greater_3000" className="appearance-none font-Michroma text-xl text-[#fff] light:text-[#242424]">Greater than $3000</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 pr-[0px] sm:pr-[20px] flex items-center">
            <Image src={`${theme === "dark" ? "/DownArrow.svg" : "/DownArrow-dark.svg"}`} alt="arrow down icon" width={30} height={30} className="w-[30px] h-[30px]" />
            </div>
            </div>
            <button type="button" className="w-[100%] sm:w-[50%] h-[60px] flex relative text-center m-[auto] justify-center items-center border-4 border-[#fff] light:border-[#242424] rounded-[20px] font-Michroma text-xl text-[#fff] light:text-[#242424] cursor-pointer">Submit</button>
            <div className="flex mr-[auto] gap-[20px]">
            <Image src={`${theme === "dark" ? "/Asterisk.svg" : "/Asterisk-dark.svg"}`} alt="required icon" width={20} height={20} className="w-[20px] h-[20px]" />
            <span className="font-KronaOne text-base font-bold text-center text-[#fff] light:text-[#242424]">required</span>
            </div>
        </motion.form>
        </section>
    )
}