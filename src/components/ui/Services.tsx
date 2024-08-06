import Image from "next/image"

const services: string[] = [
    'Usuwanie korzeni',
    'Drenaże, odwodnienia',
    ' Niwelacje terenu, skarpowanie',
    'Wykopy pod sieci kanalizacyjne',
    'Wykopy pod sieci energetyczne i telekomunikacyjne, fundamenty',
    'Prace ogrodowe, niwelacje terenu'


]

export const Services: React.FC = () => {
    return <div>
        <h2 className="text-center text-4xl mb-16">Wykonujemy:</h2>
        <div className="container">

            <div className="row">
                <div className="relative flex gap-x-8">
                    <div className="about">
                        <div className="about-bg z-10">

                        </div>
                        <div className="img z-20">
                            <Image src={'/ecavator.jpeg'} width={200} height={500} alt="escavator" />

                        </div>
                    </div>
                    <div className="description">
                        <ul className="flex flex-col gap-y-4 w-full">
                            {services.map((service) => <li className='w-full' key={service}>
                                <p className="text">{service}</p>
                            </li>)}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
}