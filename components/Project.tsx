import PageContainer from "./PageContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { JavaScriptIcon } from "./icons/JavascriptIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { NodeIcon } from "./icons/NodeIcon";
import SpacerCard from "./Card/SpacerCard";

export default function Project() {
  return (
    <PageContainer className="mt-20 px-4">
      <p className="text-5xl">Project</p>

      <div className="mt-4 px-3 flex flex-row justify-between gap-3">
        <SpacerCard />

        {/* Deuxième carte */}
        <div className="w-[350px] bg-bluecard border-slate-950 border-2 shadow-md rounded-xl h-full">
          <CardHeader className="flex flex-row justify-between">
            <CardTitle className="text-2xl text-white">🍀</CardTitle>
            <CardDescription className="text-white">icon</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="text-2xl">Plantpedia</p>
            <p>
              A website to check properties of different plants around the world
            </p>
          </CardContent>
          <CardFooter className="flex gap-2 text-sm flex-wrap">
            <div className="flex items-center gap-2 border-none px-3 py-1 rounded-2xl bg-blue-500">
              <ReactIcon size={14} /> React.js
            </div>
            <div className="flex items-center gap-2 border-none px-3 py-1 rounded-2xl bg-blue-500">
              <NodeIcon size={14} /> Node.js
            </div>
            <div className="flex items-center gap-2 border-none px-3 py-1 rounded-2xl bg-blue-500">
              <TailwindIcon size={14} /> Tailwind
            </div>
          </CardFooter>
        </div>

        {/* Troisième carte */}
        <div className="w-[350px] bg-bluecard border-slate-950 border-2 shadow-md rounded-xl h-auto">
          <CardHeader className="flex flex-row justify-between">
            <CardTitle className="text-2xl text-white">🎥</CardTitle>
            <CardDescription className="text-white">icon</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="text-2xl">SocialMoovies</p>
            <p>
              A website where users can add audiovisuals, comment on them, add
              them to favorites in order to get audiovisuals to watch
            </p>
          </CardContent>
          <CardFooter className="flex gap-2 text-sm flex-wrap">
            <div className="flex items-center gap-2 border-none px-3 py-1 rounded-2xl bg-blue-500">
              <ReactIcon size={14} /> React.js
            </div>
            <div className="flex items-center gap-2 border-none px-3 py-1 rounded-2xl bg-blue-500">
              <NodeIcon size={14} /> Node.js
            </div>
            <div className="flex items-center gap-2 border-none px-3 py-1 rounded-2xl bg-blue-500">
              <TailwindIcon size={14} /> Tailwind
            </div>
          </CardFooter>
        </div>
      </div>
    </PageContainer>
  );
}
