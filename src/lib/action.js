"use server";
import { redirect } from "next/navigation";
import Query from "@/email/query";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";


export const contactform = async (formdata) => {
  const { name, email, phone, message } = Object.fromEntries(formdata);
  console.log({name, email, phone,message });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: "octalucentsoftwaresolutions@gmail.com",
    subject: "Naya Bakra Phasa BC",
    text: "hello",
    html: Query({ name, email, phone,message }),
  };

  try {
    await transporter.sendMail(mailOptions);
    // return revalidatePath("/conatct");
    // revalidatePath("/contact");
    // return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    console.error("Error sending email:", error);
  }
  revalidatePath("/contact");
  redirect("/contact");
};
