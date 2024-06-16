import { MonaMedium } from "@/utils/fonts"
const TheProblem = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center space-y-6 px-4 md:px-16 py-12 sm:py-16 lg:py-24">
            <span
                className={`tracking-wide ${MonaMedium.className} text-[#0066FF] text-base`}
            >
                THE PROBLEM
            </span>

            <p
                className={`text-[1.25rem] lg:text-[1.75rem] leading-[2.5rem] lg:leading-[3.51rem] tracking-[-1.5%] text-[#24201F]/90 lg:max-w-[920px] ${MonaMedium.className}`}
            >
                When college students in India don&apos;t get placed during campus
                placements, it can make things tough for them upon graduation. They
                have to figure out how to find a job all on their own, and that can be
                really hard.
            </p>
        </div >
    )
}

export default TheProblem
