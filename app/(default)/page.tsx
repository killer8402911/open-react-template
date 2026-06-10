export const metadata = {
  title:
    "Aeduplay — School Furniture, Writing Boards & Play Equipment Manufacturer | Chennai",
  description:
    "ISO-certified Chennai manufacturer of writing boards, school & preschool furniture, outdoor play equipment, soft play and playground flooring. Trusted by 1000+ institutions since 1999.",
};

import Hero from "@/components/hero-home";
import Stats from "@/components/stats";
import Categories from "@/components/categories";
import ClientsMarquee from "@/components/clients-marquee";
import WhyUs from "@/components/why-us";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <ClientsMarquee />
      <WhyUs />
      <Process />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
