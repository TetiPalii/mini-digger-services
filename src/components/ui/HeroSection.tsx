import { ReactNode } from "react";

interface SectionProps {
    children?: ReactNode;

}



export const HeroSection: React.FC<SectionProps> = ({ children }) => {
    return <section className="relative hero flex flex-col justify-center w-full pt-[130px] px-0 pb-4 min-h-screen gap-y-28">
        {children}
    </section>
}