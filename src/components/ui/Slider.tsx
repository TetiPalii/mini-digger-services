import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";

const images: { src: string, description: string }[] = [
    {
        src: '/carousel/leveling.jpeg',
        description: 'Niwelacja terenu. Przed.'
    },
    {
        src: '/carousel/leveling before.jpeg',
        description: 'Niwelacja terenu. Po.'
    },
    {
        src: '/carousel/mauzer.jpeg',
        description: 'Wykop pod mauzer'
    },
    {
        src: '/carousel/sewage pipe.jpeg',
        description: 'Instalacja rury kanalizacyjnej'
    },
    {
        src: '/carousel/skarpowanie.jpeg',
        description: 'Skarpowanie pod kostkę'
    }
];


export const Slider: React.FC = () => {
    return <div className="container">
        <div className="row">
            <Carousel
                opts={{
                    align: "start",
                    loop: true
                }}
                className="w-full"
            >
                <CarouselContent>
                    {images.map(({ src, description }) => (
                        <CarouselItem key={src} className="md:basis-1/2 lg:basis-1/3">
                            <div className="">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-0 h-[80%] shadow-2xl">

                                        <Image src={src} width={700} height={1000} alt="portfolio" className="object-cover rounded-lg" />
                                    </CardContent>
                                    <div className="text-center p-2"> <span>{description}</span></div>

                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </div>
}