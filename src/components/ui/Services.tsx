import { Play } from "lucide-react"
import Image from "next/image"
import { Button } from "./button"


const services: string[] = [
    'Prace ogrodowe',
    'Usuwanie korzeni',
    'Drenaże, odwodnienia',
    ' Niwelacje terenu, skarpowanie',
    'Wykopy pod sieci kanalizacyjne',
    'Wykopy pod sieci energetyczne i telekomunikacyjne, fundamenty',
    'Zadzwoń aby uzyskać więcej informacji dotyczącej zakresu wykonywanych robót'
]

export const Services: React.FC = () => {
    return <div className="flex flex-col  justify-center items-center">
        <h2 className=" hidden sm:block text-2xl sm:text-3xl md:text-4xl font-semibold lg:text-6xl  md:mb-14 uppercase text-center mb-10">Wykonujemy</h2>
        <div className="relative flex justify-center items-center md:gap-x-4 mb-10 md:mb-14 w-full">


            <div className="md:hidden sectionBg p-10 rounded-3xl shadow-2xl min-h-screen">
                <div className=" bg-bannerBg text-[#333] rounded-3xl shadow-2xl font-semibold py-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold lg:text-6xl  md:mb-14 uppercase text-center mb-10">Wykonujemy</h2>
                    <ul className="flex flex-col gap-y-4 w-full justify-center  items-center list-disc list-inside">
                        {services.map((service, idx) => {
                            let lastService = '';
                            let firstWord = '';
                            const lastElIdx = services.length - 1;

                            if (service.includes('Zadzwoń')) {

                                const [firstEl, ...rest] = service.split(' ');

                                lastService = rest.join(' ');
                                firstWord = firstEl;
                            }

                            return <li className="w-full text-center list-item" key={service}>

                                {lastElIdx === idx ? <p className="text-xl md:text-2xl"> <a href="tel:+512 419 032" className="text-red-600">{firstWord}</a> {lastService}</p> : <p className="text-xl md:text-2xl">{service}</p>}

                            </li>
                        })}

                    </ul >
                </div>

            </div>


            <div className="hidden md:about">

                <div className="about-bg"></div>
                <div className="img"></div>

            </div>
            <ul className="flex-col gap-y-4 w-full justify-center  items-center list-disc list-inside hidden md:flex">
                {services.map((service, idx) => {
                    let lastService = '';
                    let firstWord = '';
                    const lastElIdx = services.length - 1;

                    if (service.includes('Zadzwoń')) {

                        const [firstEl, ...rest] = service.split(' ');

                        lastService = rest.join(' ');
                        firstWord = firstEl;
                    }

                    return <li className="w-full text-center list-item" key={service}>

                        {lastElIdx === idx ? <p className="text-xl md:text-2xl"> <a href="tel:+512 419 032" className="text-red-600">{firstWord}</a> {lastService}</p> : <p className="text-xl md:text-2xl">{service}</p>}

                    </li>
                })}

            </ul >

        </div>
        {/* // <div className="flex items-center gap-x-1">
                    <a href="tel:+48 512 419 036">Zadzwoń</a>
                    <p>aby uzyskać więcej informacji dotyczącej zakresu wykonywanych robót</p>
                </div> */}

        {/* <div className="container1">

            <div className="row1">
                <div className="relative flex gap-x-8">
                    <div className="about1">
                        <div className="about-bg z-10">

                        </div>
                        <div className="img z-20">
                            <Image src={'/ecavator.jpeg'} width={200} height={500} alt="escavator" />

                        </div>
                    </div>
                    <div className="description1">
                        <ul className="flex flex-col gap-y-4 w-full">
                            {services.map((service) => <li className='w-full' key={service}>
                                <p className="text">{service}</p>
                            </li>)}
                        </ul>
                    </div>
                </div>

            </div>
        </div> */}
    </div >
}