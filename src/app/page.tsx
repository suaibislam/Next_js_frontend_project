
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Hover } from "@/components/Hover";
import { Instractor } from "@/components/Instractors";
import { TestimonialCards } from "@/components/TestimonialCards";
import { WhyChooseUs } from "@/components/WhyChooseUs"; 

import Link from "next/link";

export default function Page() {
  return( 
  <>

  <main>
    <div>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <Hover/>
      <div>
        <Instractor/>
        </div>
      <Footer/>
    </div>
  </main>

  </>
  )
}
