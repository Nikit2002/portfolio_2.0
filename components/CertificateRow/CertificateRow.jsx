"use client";
import Image from "next/image"
import { certificates } from "../../data/certificates"
import { Shelf } from "../Shelf/Shelf"
import { Fancybox } from "@fancyapps/ui/dist/fancybox/"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
import {motion} from 'framer-motion'

export const CertificateRow = ({startIdx, endIdx}) => {
    const slicedData = certificates.slice(startIdx, endIdx);
    const viewCertificate = (img) => {
        Fancybox.show([{
            src: img,
            thumbSrc: img,
        }], {});
    }
    return(
        <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
        className="flex flex-col w-[100%] h-[100%] justify-center justify-items-center mt-[100px]">
        <div className="w-[100%] h-[200px] flex flex-col justify-center justify-items-center ">
            <div className="flex flex-row relative justify-center justify-items-center top-[50px] gap-[20px] cursor-pointer z-10">
            {slicedData.map(certificate => {
                return(
                    <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    viewport={{ once: true }}
                    key={certificate.id} className="w-[250px] h-[150px] group flex flex-col justify-center justify-items-center transition-all ease-in-out duration-300 relative">
                        <a data-fancybox="gallery" href={certificate.image}><Image src={certificate.image} alt="certificate image" width={250} height={172} className="w-[100%] h-[172px] rounded-[20px] absolute" /></a>
                        <div className="w-[250px] h-[172px] border border-[#fff] bg-[#000] opacity-0 rounded-[20px] absolute group-hover:opacity-80 text-center flex top-[75px] flex-col items-center">
                            <span className="font-Michroma text-center text-xl text-[#fff] break-word mt-[20px]">{certificate.name}</span>
                            <div className="flex flex-row gap-[20px] mt-[10px]">
                            <button type="button" className="w-[45px] h-[45px] border-2 cursor-pointer border-[#fff] rounded-[20px] flex items-center justify-center" onClick={() => viewCertificate(certificate.image)}><Image src='./Search.png' alt="search logo" width={30} height={30} /></button>
                           {certificate.verify != "" && <a href={certificate.verify} className="w-[45px] h-[45px] border-2 cursor-pointer border-[#fff] rounded-[20px] flex items-center justify-center"><Image src='./Checkmark.png' alt="check validity logo" width={30} height={30} /></a>}
                            </div>
                        </div>
                    </motion.div>
                )
            })}
            </div>
        <Shelf />
        </div>
        </motion.section>
    )
}