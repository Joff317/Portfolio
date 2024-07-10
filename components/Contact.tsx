"use client";
import PageContainer from "./PageContainer";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { SendIcon } from "./icons/Send";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID_KEY as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID_KEY as string,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_ID_KEY as string,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setIsSuccess(true);
            if (form.current) {
              form.current.reset();
            }
            setTimeout(() => setIsSuccess(false), 3000); // Masquer la popup après 3 secondes
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <PageContainer>
      <div className="flex flex-row items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <p className="text-5xl mx-8 italic">Contact</p>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto flex flex-col gap-5 max-w-[700px] justify-center items-center mt-9 px-12"
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

        <Textarea
          name="message"
          placeholder="Enter your message"
          required
          className=""
        />

        <Button type="submit" className="bg-purple-700 hover:bg-purple-500 gap-4">
          <div className="flex flex-row gap-2 items-center">
            <p>Submit</p>
            <SendIcon size={16} />
          </div>
        </Button>
      </form>

      {isSuccess && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          Email sent successfully!
        </div>
      )}
    </PageContainer>
  );
}
