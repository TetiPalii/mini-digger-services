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
import { Container } from "@/components/ui/Container";
import { NavBar } from "@/components/ui/NavBar";
import { HeroSection } from "@/components/ui/HeroSection";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { HeroContent } from "@/components/ui/HeroContent";



export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry)
      setIsScrolled(!entry.isIntersecting)
    });
    if (headerRef.current) {
      observer.observe(headerRef.current);
      return () => {
        if (headerRef.current) {
          observer.unobserve(headerRef.current)
        }
      }
    }
  }, [])
  console.log(isScrolled)
  return <>
    <header ref={headerRef} className={`w-full   `}>
      <div className={`fixed z-50 top-0 py-5 w-full header-bg ${isScrolled ? "header-scrolled" : "header-initial"}`}>
        <Container>
          <NavBar />
        </Container>
      </div>

    </header >

    <main className="w-full">
      <HeroSection >
        <Container>
          <div className="flex flex-col justify-center gap-y-40">
            <HeroContent />
            <ScrollDown />
          </div>
        </Container>
      </HeroSection>

      <Section id="services" >
        <div className='sectionBg shadow-lgs'>
          <Container >
            <Services />
          </Container>
        </div>




      </Section>
      <Section className="pt-12  min-h-screen">
        <Slider />
      </Section>

    </main>
    <footer className="w-full">
      <Container>
        Footer
      </Container>
    </footer>
  </>
}

// export default function Home() {
//   return (<>
//     <Header />
//     <main className="flex min-h-screen flex-col items-center justify-between text-2xl bg-[#333333] w-full">
//       <Section>
//         <Hero />
//         <ScrollDown />
//       </Section>

//       <Section className=" min-h-screen px-0 py-24" id='services' >
//         <Services />
//       </Section>
//       <Section className="pt-12  min-h-screen">
//         <Slider />
//       </Section>

//       {/* <Section>
//         <div >
//           <div >


//           </div>
//         </div>
//       </Section> */}
//     </main>
//     <footer className="w-full p-12">
//       <nav>
//         <ul className="flex justify-between">
//           <li>Lorem ipsum dolor </li>
//           <li>Lorem ipsum dolor</li>
//           <li>Lorem ipsum dolor </li>
//         </ul>
//       </nav>
//     </footer>
//   </>
//   );
// }