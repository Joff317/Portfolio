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

export default function Project() {
  return (
    <PageContainer className="mt-20 px-4">
      <p className="text-5xl">Project</p>

      <div className="mt-4 px-3">
        <div className="w-[500px] h-auto bg-bluecard border-slate-950 border-2 shadow-md rounded-xl">
          <CardHeader className="flex flex-row justify-between">
            <CardTitle className="text-2xl text-white">🛸</CardTitle>
            <CardDescription className=" text-white">icon</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="text-2xl">Spacer Game</p>
            <p>A 3D Game where the user controll a spaceship and must avoid asteroid or shoting on them</p>
          </CardContent>
          <CardFooter className="flex flex-row gap-4">
            <div className=" flex flex-row items-center justify-center gap-2 border-none px-3 py-1 rounded-2xl bg-blue-500"> <JavaScriptIcon size={14}/> Javascript</div>
            <div className=" flex flex-row items-center justify-center gap-2 border-none px-3 py-1 rounded-2xl bg-blue-500"> <TailwindIcon size={14}/> TailWind</div>
          </CardFooter>
        </div>
      </div>
    </PageContainer>
  );
}
