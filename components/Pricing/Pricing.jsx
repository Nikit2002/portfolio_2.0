import { PricingItem } from "../PricingItem/PricingItem"
import { SectionHeading } from "../SectionHeading/SectionHeading"

export const Pricing = () => {
    return(
        <section className="w-[100%] h-[100%] flex flex-col justify-center justify-items-center gap-[20px] mt-[100px]">
                    <SectionHeading heading={"Pricing"} />
                    <div className="w-[100%] h-[100%] flex flex-wrap justify-center justify-items-center m-[auto] gap-[40px]">
                        <PricingItem title_price={"E-Commerce Website"} options={["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]} prices={"40000₴ / 1000$"} delay={0} />
                        <PricingItem title_price={"E-Commerce Website"} options={["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]} prices={"40000₴ / 1000$"} delay={2} />
                    </div>
                </section>
    )
}