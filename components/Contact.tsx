"use client";
import PageContainer from "./PageContainer";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
      <p>Contact</p>

      <form ref={form} onSubmit={sendEmail}>
        <Input
          type="text"
          name="user_name"
          placeholder="enter your Name"
          required
        />
        <Input
          type="email"
          name="user_email"
          placeholder="enter your mail"
          required
        />
        <Input
          type="text"
          name="subject"
          placeholder="enter your subject"
          required
        />

        <Textarea name="message" placeholder="enter your message" required />

        <button type="submit">Submit</button>
      </form>
    </PageContainer>
  );
}
