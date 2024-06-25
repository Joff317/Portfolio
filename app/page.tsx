/* eslint-disable react/no-unescaped-entities */
"use client";
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
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Déclencher l'animation après le montage du composant
    setIsLoaded(true);
  }, []);
  return (
    <PageContainer
      className={`p-4 flex flex-col transition-transform duration-1000 ease-in-out ${
        isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <div className="mt-8">
        <HeroSection />
      </div>

      <div className="max-md:hidden mt-8" id="skills">
        <SkillsSection />
      </div>

      <div className="md:hidden mt-8" id="skills">
        <SkillsSectionMobile />
      </div>

      <div className="mb-12" id="project">
        <Project />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </PageContainer>
  );
}
