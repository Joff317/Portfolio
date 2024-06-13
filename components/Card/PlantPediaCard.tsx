import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactIcon } from "../icons/ReactIcon";
import { NodeIcon } from "../icons/NodeIcon";
import { TailwindIcon } from "../icons/TailwindIcon";

export default function PlantPediaCard() {
  return (
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
  );
}
