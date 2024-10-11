import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SparklesPreview } from "./heading";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

export function CardHoverEffectDemo() {
  return (
    <>
    {/* <div className="h-screen">
      <AuroraBackground >
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
    <div>
    <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          <SparklesPreview heading="Services"/>
        </h1>
    </div>
    <div className="max-w-5xl mx-auto -my-72 px-8">
      <HoverEffect items={projects} />
    </div>
    </motion.div>
    </AuroraBackground>
    </div> */}

     <div id="services" className="relative py-3 ">
     {/* <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div> */}
    <div>
    <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          <SparklesPreview heading="Services"/>
        </h1>
    </div>
    <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
    <div className="max-w-5xl mx-auto z-40  px-8">
      <HoverEffect items={projects} />
    </div>
    </motion.div>
    </div>
    </>
  
  );
}
export const projects = [
  {
    title: "UI/UX Design",
    description:
      " They’re right when they say people ignore the design that ignores people. That’s why at OSS, we don’t just create a digital footprint for your business that attracts people, we create one that makes them stay. Our team listens to your story carefully, taking steps to ensure that your design adds to your business’ legacy.",
    link: "https://stripe.com",
  },
  {
    title: "Website Development",
    description:
      "When everyone is stuck in their 9-5, Google is their go-to to get things done. That’s why OSS’ team is here to assist you in developing your digital resence with a website that speaks about your work. Our team masterfully crafts and plans out your website, so your clients know why they should choose you.",
    link: "https://netflix.com",
  },
  {
    title: "App Design",
    description:
      "In today’s world of ‘There’s an App for That!’, OSS makes sure you don’t get left behind. We work tirelessly to create an app that speaks about your usiness, with interactive features that help lead your clients to the right place, and salient designs that make sure they come back again and again.",
    link: "https://google.com",
  },
  {
    title: " Flyers and Banners",
    description:
      " Want to reach a large audience in a quick and cost-effective manner? OSS’ banner designs are your gateway to the same. We don’t just design an ad, wecreate a message that connects with the people.",
    link: "https://meta.com",
  },
  {
    title: "Graphic Design Services",
    description:
      "It’s true that design is thinking made visual. That’s why nailing the right design is important for your websites and apps. Instead of doing the hinking yourself, why not let us handle the job. OSS takes your thinking and translates it into a design that works for you and it’s liked by your clients.",
    link: "https://amazon.com",
  },
  {
    title: " IT Consultancy",
    description:
      "Whodoesn’t like a few tips and tricks? But let us present to you something better. Through tailored consultancy services, OSS ensures you make the most of your digital presence with quick and helpful support for managing all your digital needs.",
    link: "https://microsoft.com",
  },
];



  {/* <div className="relative ">
     <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    <div>
    <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          <SparklesPreview heading="Services"/>
        </h1>
    </div>
    <div className="max-w-5xl mx-auto -my-72 px-8">
      <HoverEffect items={projects} />
    </div>
    </div> */}
    