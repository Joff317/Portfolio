"use client";
import PageContainer from "./PageContainer";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  return (
    <PageContainer>
      <p>Contact</p>

      <form>
        <Input
          type="email"
          name="userEmail"
          placeholder="enter your mail"
          required
        />

        <Textarea
          name="userMessage"
          placeholder="enter your message"
          required
        />

        <button>Submit</button>
      </form>
    </PageContainer>
  );
}
