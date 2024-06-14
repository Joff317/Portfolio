/* eslint-disable react/no-unescaped-entities */
import HeaderNavigation from "@/components/HeaderNavigation";
import PageContainer from "@/components/PageContainer";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LikedinIcon";
import { Button, buttonVariants } from "@/components/ui/button";
import businessman from "../public/businessman.png";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import SkillsSectionMobile from "@/components/SkillsSectionMobile";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <PageContainer className="p-4 flex flex-col">
      <div className="mt-8">
        <HeroSection />
      </div>

      <div className="max-md:hidden mt-8">
        <SkillsSection />
      </div>

      <div className="md:hidden mt-8">
        <SkillsSectionMobile />
      </div>

      <div className="mb-12">
        <Project />
      </div>

      <div>
        <Contact/>
      </div>
    </PageContainer>
  );
}
