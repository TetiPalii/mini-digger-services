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
import { Services } from "@/components/ui/Services";




export default function Home() {
  return (<>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between text-2xl bg-[#333333]">
      <Section>
        <Hero />
        <ScrollDown />
      </Section>

      <Section className=" min-h-screen px-0 py-24" id='services' >
        <Services />
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
