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

export default function Home() {
  return (
    <PageContainer className="p-4">
      <div className="h-[300px] mt-8">
        <HeroSection />
      </div>

      <div className="max-md:hidden">
        <SkillsSection />
      </div>

      <div className="md:hidden">
        <SkillsSectionMobile />
      </div>
    </PageContainer>
  );
}
