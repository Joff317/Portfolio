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

export default function SkillsSectionMobile() {
  return (
    <PageContainer className="p-4">
      <Accordion type="single" collapsible>
        <AccordionItem className="border-none" value="item-1">
          <AccordionTrigger className="flex border-none hover:no-underline text-2xl">
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
                    <NextIcon size={20} />
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
                    <TailwindIcon size={24} />
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
          <AccordionTrigger className="hover:no-underline text-2xl">
            Back-end
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-2">
              <ul className="px-4 text-xl font-light flex flex-col gap-3">
                <li>Node.Js</li>
                <li>Mongo DB</li>
                <li>Prisma</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem className="border-none" value="item-1">
          <AccordionTrigger className="hover:no-underline text-2xl">
            Tools
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-2">
              <ul className="px-4 text-xl font-light flex flex-col gap-3">
                <li>Github</li>
                <li>GitLab</li>
                <li>Figma</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </PageContainer>
  );
}
