import PageContainer from "./PageContainer";

export default function SkillsSection() {
  return (
    <PageContainer className="mt-20 px-4">
      <h1 className="text-5xl">Skills</h1>
      <div className="mt-4 flex flex-row justify-between">
        <div>
          <h2 className="text-4xl px-4 mt-2">Front-end</h2>
          <div className="p-2">
            <ul className="px-4 text-3xl font-light flex flex-col gap-4">
              <li>Javascript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Typescript</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-4xl px-4 mt-2">Back-end</h2>
          <div className="p-2">
            <ul className="px-4 text-3xl font-light flex flex-col gap-4">
              <li>Node.Js</li>
              <li>Mongo DB</li>
              <li>Prisma</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-4xl px-4 mt-2">Tools</h2>
          <div className="p-2">
            <ul className="px-4 text-3xl font-light flex flex-col gap-4">
              <li>Github</li>
              <li>GitLab</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
