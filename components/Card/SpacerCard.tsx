import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JavaScriptIcon } from "../icons/JavascriptIcon";
import { TailwindIcon } from "../icons/TailwindIcon";

export default function SpacerCard() {
  return (
    <div className="w-[350px] max-sm:w-[250px] bg-bluecard border-slate-950 border-2 shadow-md rounded-xl h-full transition-transform duration-300 transform hover:scale-105 hover:cursor-pointer">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="text-2xl text-white">🛸</CardTitle>
        <CardDescription className="text-white">icon</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-2xl">Spacer Game</p>
        <p>
          A 3D Game where the user controls a spaceship and must avoid asteroids
          or shoot them
        </p>
      </CardContent>
      <CardFooter className="flex gap-4 text-sm flex-wrap">
        <div className="flex items-center gap-2 border-none px-3 py-1 rounded-2xl bg-purple-700">
          <JavaScriptIcon size={14} /> JavaScript
        </div>
        <div className="flex items-center gap-2 border-none px-3 py-1 rounded-2xl bg-purple-700">
          <TailwindIcon size={14} /> Tailwind
        </div>
      </CardFooter>
    </div>
  );
}
