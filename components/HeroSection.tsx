/* eslint-disable react/no-unescaped-entities */
import HeaderNavigation from "@/components/HeaderNavigation";
import PageContainer from "@/components/PageContainer";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LikedinIcon";
import { Button, buttonVariants } from "@/components/ui/button";
import businessman from "../public/businessman.png";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-6 mx-auto px-2 py-4 max-sm:px-0">
      <div className="flex flex-col gap-2">
        <p className="text-lg text-blue-400">Hello! I'm</p>
        <div className="flex flex-row gap-2 my-2">
          <Image
            src={businessman}
            alt="Businessman"
            className="w-[50px] h-[50px] max-md:w-[40px] max-md:h-[40px]"
          />
          <p className="text-5xl max-md:text-4xl text-blue-400">
            Joffrey Freixanet
          </p>
        </div>
      </div>
      <p className="text-2xl">
        {" "}
        <strong>Fullstack Web Developer.</strong> I'm making website and web
        application. I like innovating project with human value Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Vero necessitatibus
        blanditiis quaerat ullam tempore, molestiae corrupti eius quasi magnam
        earum!
      </p>
      <div className="mt-2 flex flex-row gap-2">
        <Link href="https://github.com/Joff317">
          <Button className="gap-2 bg-blue-400 rounded-2xl hover:bg-blue-300">
            Github
            <GithubIcon size={16} className="text-foreground" />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/joffrey-freixanet-tissinier-817b09151/">
          <Button className="gap-2 bg-blue-400 rounded-2xl hover:bg-blue-300">
            Linkedin
            <LinkedinIcon size={16} className="text-foreground" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
