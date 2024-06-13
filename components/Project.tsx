import PageContainer from "./PageContainer";

import { Button } from "./ui/button";
import { JavaScriptIcon } from "./icons/JavascriptIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { NodeIcon } from "./icons/NodeIcon";
import SpacerCard from "./Card/SpacerCard";
import PlantPediaCard from "./Card/PlantPediaCard";
import SocialMooviesCard from "./Card/SocialMooviesCard";

export default function Project() {
  return (
    <PageContainer className="mt-20 px-4">
      <p className="text-5xl">Project</p>

      <div className="mt-4 px-3 flex flex-row justify-between gap-3">
        <SpacerCard />

        {/* Deuxième carte */}
        <SocialMooviesCard />

        {/* Troisième carte */}
        <PlantPediaCard />
      </div>
    </PageContainer>
  );
}
