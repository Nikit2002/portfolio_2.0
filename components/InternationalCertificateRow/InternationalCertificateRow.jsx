"use client";
import Image from "next/image"
import { Shelf } from "../Shelf/Shelf"
import { Fancybox } from "@fancyapps/ui/dist/fancybox/"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
import { internationalCertificates } from "../../data/internationalCertificates";
import { motion, useSpring, useTime, useTransform } from "motion/react";
import { useEffect } from "react";

export const InternationalCertificateRow = ({startIdx, endIdx}) => {
    const slicedData = internationalCertificates.slice(startIdx, endIdx);
    const viewCertificate = (img) => {
        Fancybox.show([{
            src: img,
            thumbSrc: img,
        }], {});
    }
    const time = useTime();
    const rotate = useTransform(time, [0,3000], [0,360], {
        clamp: false
    });
    const rotatingBg = useTransform(rotate, (r) => {
        return `conic-gradient(from ${r}deg at 100% 20%, #ffffff, #fffefc, #fff5e9, #ffdfb5, #ffb95d, #ffa329, #ff9a16, #ff9913)`
    })
    const pulse = useSpring(10, {
        damping: 0,
        mass: 5,
        stiffness: 10
    })
    const pulsingBg = useTransform(pulse, (r) => {
        return `blur(${r}px)`
    })

    return(
        <section className="flex flex-col w-[100%] h-[100%] justify-center justify-items-center mt-[100px]">
        <div className="w-[100%] h-[200px] flex flex-col justify-center justify-items-center ">
            <div className="flex flex-row relative justify-center justify-items-center top-[120px] gap-[20px] cursor-pointer z-10">
            {slicedData.map(certificate => {
                return(
                    <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    viewport={{ once: true }}
                    key={certificate.id} className="relative">
                    <div className="group flex flex-col justify-center justify-items-center transition-all ease-in-out duration-1000 relative rounded-[20px] z-10 ml-[3px] mt-[2px]">
                        <a data-fancybox="gallery" href={certificate.image}><Image src={certificate.image} alt="certificate image" width={250} height={150} className="w-[250px] h-[150px] rounded-[20px]" /></a>
                        <div className="w-[250px] h-[150px] border border-[#fff] bg-[#000] opacity-0 absolute group-hover:opacity-80 text-center flex flex-col items-center rounded-[20px]">
                            <span className="font-Michroma text-center text-xl text-[#fff] break-word mt-[20px]">{certificate.name}</span>
                            <div className="flex flex-row gap-[20px] mt-[10px]">
                            <button type="button" className="w-[45px] h-[45px] border-2 cursor-pointer border-[#fff] rounded-[20px] flex items-center justify-center" onClick={() => viewCertificate(certificate.image)}><Image src='./Search.png' alt="search logo" width={30} height={30} /></button>
                            {certificate.verify != "" && <a href={certificate.verify} className="w-[45px] h-[45px] border-2 cursor-pointer border-[#fff] rounded-[20px] flex items-center justify-center"><Image src='./Checkmark.png' alt="check validity logo" width={30} height={30} /></a>}
                            </div>
                        </div>
                    </div>
                    <motion.div className="w-[260px] h-[160px] absolute -inset-[1px] rounded-[20px] opacity-100"
                    style={{
                        background: rotatingBg,
                        filter: pulsingBg,
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 2,
                        animation: "rotate 1s linear infinite"
                    }}
                    >

                    </motion.div>
                    </motion.div>
                )
            })}
            </div>
        <Shelf />
        </div>
        </section>
)
}