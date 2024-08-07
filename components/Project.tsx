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
      <div className="flex flex-row items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <p className="text-5xl mx-8 italic">Projects</p>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      <div className="mt-9 px-3 flex md:flex-row md:justify-evenly flex-col max-md:items-center max-md:px-2">
        {/* Première carte */}
        <SpacerCard />

        {/* Deuxième carte */}
        <SocialMooviesCard />

        {/* Troisième carte */}
        {/* <PlantPediaCard /> */}
      </div>
    </PageContainer>
  );
}
