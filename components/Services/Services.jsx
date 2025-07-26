import { SectionHeading } from "../SectionHeading/SectionHeading"
import { ServiceItem } from "../ServiceItem/ServiceItem"

export const Services = () => {
    return(
        <section className="w-[100%] h-[100%] flex flex-col justify-center justify-items-center gap-[20px] mt-[100px]">
            <SectionHeading heading={"Services"} />
            <div className="w-[100%] h-[100%] flex flex-wrap justify-center justify-items-center m-[auto] gap-[40px]">
                <ServiceItem desc={"Lorem Ipsum"} delay={0} />
                <ServiceItem desc={"Lorem Ipsum"} delay={2} />
                <ServiceItem desc={"Lorem Ipsum"} delay={4} />
                <ServiceItem desc={"Lorem Ipsum"} delay={6} />
                <ServiceItem desc={"Lorem Ipsum"} delay={8} />
                <ServiceItem desc={"Lorem Ipsum"} delay={10} />
            </div>
        </section>
    )
}