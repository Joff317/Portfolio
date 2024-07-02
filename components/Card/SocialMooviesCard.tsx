import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactIcon } from "../icons/ReactIcon";
import { MongoIcon } from "../icons/MongoIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import Image from "next/image";
import moovie from "../../public/socialMoovie.png";

export default function SocialMooviesCard() {
  return (
    <div className="relative w-[350px] max-sm:w-[250px] bg-bluecard border-slate-950 border-2 shadow-md rounded-xl h-auto overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:cursor-pointer">
      {/* Conteneur de l'image d'arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src={moovie}
          alt="SocialMoovies image"
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
          <CardTitle className="text-2xl text-white">🎥</CardTitle>
          <CardDescription className="text-white">icon</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p className="text-2xl text-white">SocialMoovies</p>
          <p className="text-white">
            A website where users can add audiovisuals, comment them, add them
            to favorites in order to get audiovisuals to watch
          </p>
        </CardContent>
        <CardFooter className="flex gap-2 text-sm flex-wrap">
          <div className="flex items-center gap-2 border-none px-3 py-1 rounded-2xl bg-purple-700">
            <ReactIcon size={14} /> React.js
          </div>
          <div className="flex items-center gap-2 border-none px-3 py-1 rounded-2xl bg-purple-700">
            <MongoIcon size={14} /> MongoDB
          </div>
          <div className="flex items-center gap-2 border-none px-3 py-1 rounded-2xl bg-purple-700">
            <TailwindIcon size={14} /> Tailwind
          </div>
        </CardFooter>
      </div>
    </div>
  );
}
