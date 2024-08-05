import { smoothScroll } from "@/lib/utils"
import { FC } from "react"

export const ScrollDown: FC = () => {
    return <div className="m-auto scroll-button__container">
        <a href="#services">
            <div className="scroll-button" onClick={() => smoothScroll('services')}>
            </div></a>
    </div>
}