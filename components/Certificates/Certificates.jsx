"use client";
import { useEffect, useState } from "react";
import { CertificateRow } from "../CertificateRow/CertificateRow"
import { InternationalCertificateRow } from "../InternationalCertificateRow/InternationalCertificateRow"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { Shelf } from "../Shelf/Shelf"
import { SmallHeading } from "../SmallHeading/SmallHeading"

export const Certificates = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isComputer, setIsComputer] = useState(false);
    const [screenValue, setScreenValue] = useState({
        width: 0,
        height: 0
    });

    console.log(screenValue);
    
        useEffect(() => {
        setScreenValue({
            width: window.innerWidth,
            height: window.innerHeight
        });
        const mediaQueryMedium = window.matchMedia('(max-width: 1055px)');
        console.log(mediaQueryMedium);
        setIsTablet(mediaQueryMedium.matches);
    
        const handler = (e) => setIsTablet(e.matches);
        mediaQueryMedium.addEventListener('change', handler);
        return () => mediaQueryMedium.removeEventListener('change', handler);
        }, []);

        useEffect(() => {
            setScreenValue({
                width: window.innerWidth,
                height: window.innerHeight
            });
        const mediaQuerySmall = window.matchMedia('(max-width: 790px)');
        console.log(mediaQuerySmall);
        setIsMobile(mediaQuerySmall.matches);
    
        const handler = (e) => setIsMobile(e.matches);
        mediaQuerySmall.addEventListener('change', handler);
        return () => mediaQuerySmall.removeEventListener('change', handler);
        }, []);


        

    
    
    
    return(
        <section className="flex flex-col justify-center justify-items-center mt-[100px] gap-[40px]">
            {screenValue.width >= 1055 && 
            <>
            <SectionHeading heading={"Diploma and Certificates"} />
            <SmallHeading heading={"International English Certificate"} />
            <InternationalCertificateRow startIdx={0} endIdx={1} />
            <SmallHeading heading={"Hard Skills Certificates"} />
            <CertificateRow startIdx={0} endIdx={3} />
            <CertificateRow startIdx={3} endIdx={6} />
            <CertificateRow startIdx={6} endIdx={9} />
            <CertificateRow startIdx={9} endIdx={12} />
            <CertificateRow startIdx={12} endIdx={15} />
            <SmallHeading heading={"English Certificates"} />
            <CertificateRow startIdx={15} endIdx={17} />
            </>
            }
            { screenValue.width <= 1055 && screenValue.width > 790 &&
            <>
            <SectionHeading heading={"Diploma and Certificates"} />
            <SmallHeading heading={"International English Certificate"} />
            <InternationalCertificateRow startIdx={0} endIdx={1} />
            <SmallHeading heading={"Hard Skills Certificates"} />
            <CertificateRow startIdx={0} endIdx={2} />
            <CertificateRow startIdx={2} endIdx={4} />
            <CertificateRow startIdx={4} endIdx={6} />
            <CertificateRow startIdx={6} endIdx={8} />
            <CertificateRow startIdx={8} endIdx={10} />
            <CertificateRow startIdx={10} endIdx={12} />
            <CertificateRow startIdx={12} endIdx={14} />
            <CertificateRow startIdx={14} endIdx={15} />
            <SmallHeading heading={"English Certificates"} />
            <CertificateRow startIdx={15} endIdx={17} />
            </>
            }
            { screenValue.width <= 790 &&
            <>
            <SectionHeading heading={"Diploma and Certificates"} />
            <SmallHeading heading={"International English Certificate"} />
            <InternationalCertificateRow startIdx={0} endIdx={1} />
            <SmallHeading heading={"Hard Skills Certificates"} />
            <CertificateRow startIdx={0} endIdx={1} />
            <CertificateRow startIdx={1} endIdx={2} />
            <CertificateRow startIdx={2} endIdx={3} />
            <CertificateRow startIdx={3} endIdx={4} />
            <CertificateRow startIdx={4} endIdx={5} />
            <CertificateRow startIdx={5} endIdx={6} />
            <CertificateRow startIdx={6} endIdx={7} />
            <CertificateRow startIdx={7} endIdx={8} />
            <CertificateRow startIdx={8} endIdx={9} />
            <CertificateRow startIdx={9} endIdx={10} />
            <CertificateRow startIdx={10} endIdx={11} />
            <CertificateRow startIdx={11} endIdx={12} />
            <CertificateRow startIdx={12} endIdx={13} />
            <CertificateRow startIdx={13} endIdx={14} />
            <CertificateRow startIdx={14} endIdx={15} />
            <SmallHeading heading={"English Certificates"} />
            <CertificateRow startIdx={15} endIdx={16} />
            <CertificateRow startIdx={16} endIdx={17} />
            </>
            }
        </section>
    )
}