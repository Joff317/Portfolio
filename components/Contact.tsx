"use client";
import PageContainer from "./PageContainer";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          `${process.env.SERVICE_ID_KEY}`,
          `${process.env.TEMPLATE_ID_KEY}`,
          form.current,
          {
            publicKey: `${process.env.PUBLIC_ID_KEY}`,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <PageContainer>
      <p className="text-5xl">Contact</p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto flex flex-col gap-5 max-w-[700px] justify-center items-center mt-4 px-12"
      >
        <Input
          type="text"
          name="user_name"
          placeholder="Enter your Name"
          required
          className=""
        />
        <Input
          type="email"
          name="user_email"
          placeholder="Enter your mail"
          required
          className=""
        />
        <Input
          type="text"
          name="subject"
          placeholder="Enter your subject"
          required
          className=""
        />

        <Textarea name="message" placeholder="Enter your message" required  className="" />

        <Button type="submit" className=" bg-blue-400 hover:bg-blue-300">Submit</Button>
      </form>
    </PageContainer>
  );
}
