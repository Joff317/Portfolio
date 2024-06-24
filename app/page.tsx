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
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const projectCards = document.querySelectorAll(".project-card");

      projectCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("animate-fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <PageContainer className="p-4 flex flex-col">
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
