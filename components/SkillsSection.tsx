import PageContainer from "./PageContainer";
import { FigmaIcon } from "./icons/FigmaIcon";
import { GitLabIcon } from "./icons/GitLabIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { JavaScriptIcon } from "./icons/JavascriptIcon";
import { MongoIcon } from "./icons/MongoIcon";
import { NextIcon } from "./icons/NextIcon";
import { NodeIcon } from "./icons/NodeIcon";
import { PrismaIcon } from "./icons/PrismaIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";

export default function SkillsSection() {
  return (
    <PageContainer className="mt-20 px-4">
      <p className="text-5xl">Skills</p>
      <div className="mt-4 flex flex-row justify-between">
        <div>
          <h2 className="text-4xl px-4 mt-2">Front-end</h2>
          <div className="p-2">
            <ul className="px-4 text-3xl font-light flex flex-col gap-4">
              <li>
                <div className="flex items-center gap-2">
                  <JavaScriptIcon size={20} />
                  <p>Javascript</p>
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
                  <TailwindIcon size={20} />
                  <p>Tailwind</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-4xl px-4 mt-2">Back-end</h2>
          <div className="p-2">
            <ul className="px-4 text-3xl font-light flex flex-col gap-4">
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
        </div>
        <div>
          <h2 className="text-4xl px-4 mt-2">Tools</h2>
          <div className="p-2">
            <ul className="px-4 text-3xl font-light flex flex-col gap-4">
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
        </div>
      </div>
    </PageContainer>
  );
}
