'use client'
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";
import { ScrollDown } from "@/components/ui/ScrollDown";
import { Section } from "@/components/ui/Section";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/Slider";

const services: string[] = [
  'Usuwanie korzeni',
  'Drenaże, odwodnienia',
  ' Niwelacje terenu, skarpowanie',
  'Wykopy pod sieci kanalizacyjne',
  'Wykopy pod sieci energetyczne i telekomunikacyjne, fundamenty',
  'Prace ogrodowe, niwelacje terenu'


]


export default function Home() {
  return (<>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between text-2xl bg-[#333333]">
      <Section>
        <Hero />
        <ScrollDown />
      </Section>

      <Section className=" min-h-screen px-0 py-24" id='services' >
        <h2 className="text-center text-4xl mb-16">Wykonujemy:</h2>
        <div className="container">

          <div className="row">
            <div className="relative flex gap-x-8">
              <div className="about">
                <div className="about-bg z-10">

                </div>
                <div className="img z-20">

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

      </Section>
      <Section className="pt-12  min-h-screen">
        <Slider />
      </Section>

      {/* <Section>
        <div >
          <div >


          </div>
        </div>
      </Section> */}
    </main>
    <footer className="w-full p-12">
      <nav>
        <ul className="flex justify-between">
          <li>Lorem ipsum dolor </li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor </li>
        </ul>
      </nav>
    </footer>
  </>
  );
}
