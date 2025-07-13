"use client";
import { SignupFormDemo } from "@/components/form";
import { GlobeDemo } from "@/components/globe";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <div className="flex flex-col  ">
        <div >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="div"
          >
            <h2 className="text-center text-xl md:text-5xl font-bold text-white">
              We sell hopes worldwide
            </h2>
            <p className="text-center text-base md:text-xl font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
              This globe is interactive and customizable. Have fun with it, and
              don&apos;t forget to share it. :)
            </p>
          </motion.div>
        </div>

        <div className="flex md:pr-40 w-full h-auto justify-center items-center">
          <div className="md:flex w-2/3 hidden ">
            <GlobeDemo />
          </div>
          <div className="flex justify-center md:w-1/3  ">
            <SignupFormDemo />
          </div>
        </div>
      </div>
    </>
  );
}
