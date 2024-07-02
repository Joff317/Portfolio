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
import Image from "next/image";
import spacer from "../../public/spacergame.png";

export default function SpacerCard() {
  return (
    <div className="relative w-[350px] max-sm:w-[250px] bg-bluecard border-slate-950 border-2 shadow-md rounded-xl h-full overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:cursor-pointer">
      {/* Conteneur de l'image d'arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src={spacer}
          alt="spacerimage"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-50"
        />
      </div>

      {/* Superposition sombre */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Contenu de la carte */}
      <div className="relative z-10 p-4">
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-2xl text-white">🛸</CardTitle>
          <CardDescription className="text-white">icon</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p className="text-2xl text-white">Spacer Game</p>
          <p className="text-white">
            A 3D Game where the user controls a spaceship and must avoid
            asteroids or shoot them
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
    </div>
  );
}
