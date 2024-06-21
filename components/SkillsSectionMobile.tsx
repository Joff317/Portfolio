import PageContainer from "./PageContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JavaScriptIcon } from "./icons/JavascriptIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { NextIcon } from "./icons/NextIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import Image from "next/image";
import { NodeIcon } from "./icons/NodeIcon";
import { MongoIcon } from "./icons/MongoIcon";
import { PrismaIcon } from "./icons/PrismaIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { FigmaIcon } from "./icons/FigmaIcon";
import { GitLabIcon } from "./icons/GitLabIcon";

export default function SkillsSectionMobile() {
  return (
    <PageContainer className="p-4">
      <div className="flex flex-row items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <p className="text-5xl mx-8 italic">Skills</p>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem className="border-none" value="item-1">
          <AccordionTrigger className="flex border-none hover:no-underline text-2xl italic">
            Front-end
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-2">
              <ul className="px-4 text-xl font-light flex flex-col gap-3">
                <li>
                  <div className="flex items-center gap-2">
                    <JavaScriptIcon size={20} />
                    <p>Javascript</p>{" "}
                  </div>{" "}
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <ReactIcon size={20} />
                    <p>React.js</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/communityIcon_nsrozhr9igl91.webp"
                      alt="Next icon"
                      width={20}
                      height={20}
                    />
                    <p>Next.js</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <TypeScriptIcon size={20} />
                    <p>Typescript</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <TailwindIcon size={20} />
                    <p>Tailwind</p>
                  </div>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem className="border-none" value="item-1">
          <AccordionTrigger className="hover:no-underline text-2xl italic">
            Back-end
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-2">
              <ul className="px-4 text-xl font-light flex flex-col gap-3">
                <li>
                  <div className="flex items-center gap-2">
                    <NodeIcon size={20} />
                    <p>Node.Js</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <MongoIcon size={20} />
                    <p>MongoDB</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <PrismaIcon size={20} />
                    <p>Prisma</p>
                  </div>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem className="border-none" value="item-1">
          <AccordionTrigger className="hover:no-underline text-2xl italic">
            Tools
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-2">
              <ul className="px-4 text-xl font-light flex flex-col gap-3">
                <li>
                  <div className="flex items-center gap-2">
                    <GithubIcon size={20} />
                    <p>Github</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <GitLabIcon size={20} />
                    <p>GitLab</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <FigmaIcon size={20} />
                    <p>Figma</p>
                  </div>
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </PageContainer>
  );
}
