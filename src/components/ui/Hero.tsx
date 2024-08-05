import { Button } from "@/components/ui/button";

export const Hero: React.FC = () => {
    return <div className="container h-full">
        <div className="row">
            <div className="banner">
                <div className="home-banner-bg">
                    <h1 className="text-4xl font-semibold lg:text-5xl tracking-wide text-[#333] mb-3 uppercase">
                        Usługi Мinikоparką
                    </h1>
                    <div>
                        <p className="uppercase text-[#658443] font-bold">
                            | Roboty Ziemne |
                        </p>
                    </div>
                    <div className="button-container mt-8">
                        <Button>Kontakt</Button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </div>


    </div>
}