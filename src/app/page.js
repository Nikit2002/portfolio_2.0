import Image from "next/image";
import Header from "../../components/Header/Header";
import { Introduction } from "../../components/Introduction/Introduction";
import { Certificates } from "../../components/Certificates/Certificates";
import { HardSkillsCarousel } from "../../components/HardSkillsCarousel/HardSkillsCarousel";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { Timeline } from "../../components/Timeline/Timeline";
import { Services } from "../../components/Services/Services";
import { Pricing } from "../../components/Pricing/Pricing";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { ContactForm } from "../../components/ContactForm/ContactForm";

export default function Home() {
  return (
    <div className="bg-[#242424] light:bg-[#fff] opacity-100 p-[20px]">
      <main className="flex flex-col justify-center justify-items-center">
        <Header />
        <Introduction />
        <Certificates />
        <HardSkillsCarousel />
        <Portfolio />
        <Timeline />
        <Services />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>
      <footer className="mt-[100px]">
        <p className="font-KronaOne text-base sm:text-xl text-center text-[#fff] light:text-[#242424]">
          Mykyta Dubinin,
          <span className="font-Michroma text-base sm:text-xl text-center text-[#fff] light:text-[#242424]">
            2025
          </span>
        </p>
      </footer>
    </div>
  );
}
