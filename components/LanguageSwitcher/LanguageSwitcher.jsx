"use client";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Flag from 'react-world-flags'
import Image from 'next/image';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const locales = ['en', 'ua'];
  const flags = ['/Great-Britain.png','/Ukraine.png'] 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    router.push(pathname, pathname, { locale: lng });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {i18n.language === 'ua' ?
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[39px] h-[39px] rounded-3xl  flex justify-center items-center bg-[#242424] light:bg-[#fff] border-2 border-[#fff] light:border-[#242424] cursor-pointer transition-all ease-in-out duration-500 hover:bg-[#fff] hover:border-[#fff]"
      >
        <Image src="/Ukraine.png" alt="Ukraine flag" width={25} height={25} />
      </button>
      :
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[39px] h-[39px] rounded-3xl  flex justify-center items-center bg-[#242424] light:bg-[#fff] border-2 border-[#fff] light:border-[#242424] cursor-pointer duration-500 hover:bg-[#fff] hover:border-[#fff]"
      >
        <Image src="/Great-Britain.png" alt="English flag" width={25} height={25} />  
      </button>
      }
      {isOpen && (
        <div className={`absolute top-full left-0 rounded-md mt-2 overflow-hidden transition-all ease-in-out duration-500 ${isOpen ? 'max-h-64 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
          {locales.map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className="w-[39px] h-[39px] rounded-3xl  flex justify-center items-center bg-[#242424] light:bg-[#fff] border-2 border-[#fff] light:border-[#242424] cursor-pointer duration-500 hover:bg-[#fff] hover:border-[#fff]"
            >
            {lng === "ua" ?  
            <Image src="/Ukraine.png" alt="flag" width={25} height={25} />
            :
            <Image src="/Great-Britain.png" alt="flag" width={25} height={25} />
            }
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;