"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { contactform } from "@/lib/action.js";

export function SignupFormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    (<div
      className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:py-2 md:px-8 shadow-input bg-black">
      <h2 className="font-bold text-xl  text-neutral-200">
        Welcome to Aceternity
      </h2>
      <p className=" text-sm max-w-sm mt-2 text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>
      <form className="my-8" action={contactform}>
        <div
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="">
            <Label className="text-white" htmlFor="firstname">Organization</Label>
            <Input name="name" className="bg-zinc-800 text-white" id="name" placeholder="Tyler" type="text" />
          </LabelInputContainer>
         
        </div>
        <LabelInputContainer className="mb-4">
          <Label className="text-white" htmlFor="email">Email Address</Label>
          <Input name="email" className="bg-zinc-800 text-white" id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-white" htmlFor="password">Phone</Label>
          <Input name="phone" className="bg-zinc-800 text-white" id="phone" placeholder="••••••••" type="tel" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label className="text-white" htmlFor="twitterpassword">Your Custom Note</Label>
          <Input name="message" className="bg-zinc-800 text-white border-opacity-60" id="twitterpassword" placeholder="••••••••" type="textarea" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div
          className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-2 h-[1px] w-full" />

    
      </form>
    </div>)
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full ", className)}>
      {children}
    </div>)
  );
};
