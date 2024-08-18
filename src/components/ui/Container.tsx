import { ReactNode } from "react";
interface SectionProps {
    children: ReactNode;

}

interface SectionProps {
    children: ReactNode;

}

export const Container: React.FC<SectionProps> = ({ children }) => {
    return <div className="max-w-[90%] md:max-w-[768px] lg:max-w-[1024px] mx-auto my-0 px-4 py-0">{children}</div>
}