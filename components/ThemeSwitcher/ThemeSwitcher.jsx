"use client";
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useState } from 'react'

const ThemeSwitcher = () => {
  const [isChecked, setIsChecked] = useState(false);
  const {theme, setTheme} = useTheme();

  const handleCheckboxChange = () => {
    setIsChecked((prev) => {
      prev = !isChecked;
      return prev;
    });
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <label className='w-[120px] p-[4px] inline-flex items-center justify-center justify-items-center rounded-[20px] bg-[transparent] border-[#fff] light:border-[#242424] border-4 cursor-pointer'>
        <input
          type='checkbox'
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={` w-[60px] h-[25px] flex justify-center items-center rounded-[20px] transition-all ease-in-out duration-500 cursor-pointer ${
            isChecked ? 'bg-[#fff] light:bg-[#242424] -translate-x-0'  : 'bg-[transparent] translate-x-full'
          }`}
        >
          {isChecked && theme === "light" ?
          <Image src="/sun-light.svg" alt='light sun' width={20} height={20} />
          :
          <Image src="/sun-dark.svg" alt='dark sun' width={20} height={20} />
        }
        </span>
        <span
          className={` w-[60px] h-[25px] flex justify-center items-center rounded-[20px] transition-all ease-in-out duration-500 cursor-pointer ${
            !isChecked ? 'bg-[#fff] light:bg-[#242424] translate-x-0 ' : 'bg-[transparent] -translate-x-full'
          }`}
        >
         {!isChecked && theme === "light" ?
          <Image src="/moon-light.svg" alt='light moon' width={20} height={20} />
          :
          <Image src="/moon-dark.svg" alt='dark moon' width={20} height={20} />
          }
        </span>
      </label>
    </>
  )
}

export default ThemeSwitcher