"use client"

import Image from "next/image";
import { FloatingNavDemo } from "@/components/header";
import LampDemo from "@/components/ui/lamp";
import { BackgroundBeamsDemo } from "@/components/aboutus";
import { CardHoverEffectDemo } from "@/components/services";
import Footer from "@/components/footer";

export default function Home() {
  return (
   <>
   <div cals>
    <FloatingNavDemo/>
    <LampDemo/>
    <BackgroundBeamsDemo/>
    <CardHoverEffectDemo/>
    <Footer/>
    </div>
   </>
  );
}
