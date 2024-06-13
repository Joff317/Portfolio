import PageContainer from "./PageContainer";
import SpacerCard from "./Card/SpacerCard";
import PlantPediaCard from "./Card/PlantPediaCard";
import SocialMooviesCard from "./Card/SocialMooviesCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Project() {
  return (
    <PageContainer className="mt-20 px-4">
      <p className="text-5xl">Project</p>

      <div className="mt-4 px-3 flex flex-row justify-between gap-3">
         {/* Première carte */}
        <SpacerCard />

        {/* Deuxième carte */}
        <SocialMooviesCard />

        {/* Troisième carte */}
        <PlantPediaCard />
      </div>
    </PageContainer>
  );
}
