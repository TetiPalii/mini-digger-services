import { X } from "lucide-react";

interface BurgerMenuProps {
    setMobMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ setMobMenu }) => {
    return <div className="w-screen h-screen">
        <button type="button" onClick={() => setMobMenu(false)}><X /></button>

        <div className="flex flex-col items-center gap-y-8">
            <ul className="list-none p-0 m-0 flex flex-col gap-y-8">
                <li className="">
                    <a href="mailto:tpalii1945@gmail.com" className="text-xs">E-mail: u.minikoparka.np@gmail.com</a>
                </li>
                <li className="">
                    <a href="tel:+48 512 419 036" className="text-xs">+48&nbsp;512&nbsp;419&nbsp;036</a>
                </li>
            </ul>
            <ul className="list-none m-0 p-0 flex flex-col gap-y-8">
                <li className="mr-4">
                    <a href="https://www.facebook.com/profile.php?id=61559576564617" target="_blank" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15s" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </a>
                </li>
                <li >
                    <a href="https://www.facebook.com/profile.php?id=61559576564617" target="_blank" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                </li>

            </ul>
        </div>
    </div>
}