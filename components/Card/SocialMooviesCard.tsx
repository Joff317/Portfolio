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

export default function SocialMooviesCard() {
  return (
    <div className="w-[350px] max-sm:w-[250px] bg-bluecard border-slate-950 border-2 shadow-md rounded-xl h-auto">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="text-2xl text-white">🎥</CardTitle>
        <CardDescription className="text-white">icon</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-2xl">SocialMoovies</p>
        <p>
          A website where users can add audiovisuals, comment them, add them to
          favorites in order to get audiovisuals to watch
        </p>
      </CardContent>
      <CardFooter className="flex gap-2 text-sm flex-wrap">
        <div className="flex items-center gap-2 border-none px-3 py-1 rounded-2xl bg-blue-500">
          <ReactIcon size={14} /> React.js
        </div>
        <div className="flex items-center gap-2 border-none px-3 py-1 rounded-2xl bg-blue-500">
          <MongoIcon size={14} /> MongoDB
        </div>
        <div className="flex items-center gap-2 border-none px-3 py-1 rounded-2xl bg-blue-500">
          <TailwindIcon size={14} /> Tailwind
        </div>
      </CardFooter>
    </div>
  );
}
