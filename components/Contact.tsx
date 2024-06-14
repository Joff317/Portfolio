"use client";
import PageContainer from "./PageContainer";
import { Input } from "./ui/input";

export default function Contact() {
  return (
    <PageContainer>
      <p>Contact</p>

      <form>
        <Input type="email" placeholder="enter your mail" />

        <Input type="text" placeholder="enter the subject of your mail" />

        
      </form>
    </PageContainer>
  );
}
