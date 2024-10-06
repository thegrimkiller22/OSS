"use client"

import Image from "next/image";
import { FloatingNavDemo } from "@/components/header";
import LampDemo from "@/components/ui/lamp";
import { BackgroundBeamsDemo } from "@/components/aboutus";
import { CardHoverEffectDemo } from "@/components/services";
import Footer from "@/components/footer";
import { HeroScrollDemo } from "@/components/cta";

export default function Home() {
  return (
   <>
    {/* <FloatingNavDemo/> */}
    <div className="overflow-x-hidden">
    <LampDemo/>
    <BackgroundBeamsDemo/>
    <CardHoverEffectDemo/>
    <HeroScrollDemo/>
    {/* <Footer/> */}
    </div>
   </>
  );
}
