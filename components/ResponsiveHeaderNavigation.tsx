import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
// import { CATEGORIES } from "@/app/utils/categories";
// import { Category } from "@/types";
import Link from "next/link";

export default function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-6 w-6 md:hidden" />
      </SheetTrigger>

      <SheetContent side="left">
        <div className="flex flex-col gap-4">
          <Link href="#skills" passHref legacyBehavior>
            <Button variant="ghost" className="italic">
              Skills
            </Button>
          </Link>
          <Link href="#project" passHref legacyBehavior>
            <Button variant="ghost" className="italic">
              Project
            </Button>
          </Link>
          <Link href="#contact" passHref legacyBehavior>
            <Button variant="ghost" className="italic">
              Contact
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
