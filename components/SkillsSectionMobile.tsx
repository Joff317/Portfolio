import PageContainer from "./PageContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
                <li>Javascript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Typescript</li>
                <li>Tailwind</li>
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
