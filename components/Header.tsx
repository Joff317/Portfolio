import Link from "next/link";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="sticky top-0 justify-center items-center py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold">JoDev</h1>
        <div className="flex-1" />
        <ul>
          <Link
            href="https://github.com/Joff317"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 hover:bg-inherit"
            )}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
