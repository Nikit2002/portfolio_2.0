"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PortfolioDescriptionBlocks } from "../PortfolioDescriptionBlocks/PortfolioDescriptionBlocks";

export const PortfolioShelf = ({item}) => {
  const [isFullSize, setIsFullSize] = useState(false);

  useEffect(() => {
    setIsFullSize((prev) => {
      prev = true;
      return prev;
    })
  }, [])

  return(
  <div className="w-[100%] h-[100%] mb-[240px] flex flex-col justify-center justify-items-center m-[auto] p-0"> 
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={isFullSize ? "100%" : 0}
    height="260px"
    fill="none"
    viewBox="0 0 1355 297"
    initial={false}
        animate={{
          width: isFullSize ? "100%" : 0,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
  >
    <path fill="#D9D9D9" d="M100 193h1155v20H100z"></path>
    <foreignObject width="3155" height="2097" x="-900" y="-904">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        clipPath="url(#bgblur_0_2_41_clip_path)"
        style={{ backdropFilter: "blur(500px)", height: "100%", width: "100%" }}
      ></div>
    </foreignObject>
    <g
      data-figma-bg-blur-radius="1000"
      filter="url(#filter0_di_2_41)"
      shapeRendering="crispEdges"
    >
      <path
        fill="url(#paint0_radial_2_41)"
        fillOpacity="0.8"
        d="M1137.54 96H216.956L100 193h1155z"
      ></path>
      <path stroke="#fff" d="m1137.36 96.5 116.25 96H101.386l115.75-96z"></path>
    </g>
    <defs>
      <radialGradient
        id="paint0_radial_2_41"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(577.5 0 0 48.5 677.5 144.5)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D9D9D9"></stop>
        <stop offset="1" stopColor="#D9D9D9"></stop>
      </radialGradient>
      <clipPath id="bgblur_0_2_41_clip_path" transform="translate(900 904)">
        <path d="M1137.54 96H216.956L100 193h1155z"></path>
      </clipPath>
      <filter
        id="filter0_di_2_41"
        width="3155"
        height="2097"
        x="-900"
        y="-904"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="50"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2_41"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_41"
          result="shape"
        ></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="50"></feGaussianBlur>
        <feComposite
          in2="hardAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
        ></feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
        <feBlend in2="shape" result="effect2_innerShadow_2_41"></feBlend>
      </filter>
    </defs>
  </motion.svg>
  <PortfolioDescriptionBlocks item={item} />
  </div>
)};


