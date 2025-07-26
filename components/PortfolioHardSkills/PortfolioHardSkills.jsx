import Image from "next/image"

export const PortfolioHardSkills = ({skills}) => {
    return(
        <div className="w-[100%] h-[100%] sm:w-[440px] m-[auto] flex flex-row justify-center justify-items-center items-center sm:h-[80px] rounded-[20px] border-4 gap-[20px] border-[#fff] light:border-[#242424] flex-wrap">
            {skills.map((skill, idx) => {
                return(
                    <Image key={idx} src={skill} alt="skill used" width={40} height={40} />
                )
            })}
        </div>
    )
}