"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  //   NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  //   NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
export default function HeaderNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
        <NavigationMenuItem>
          <Link href="#skills" legacyBehavior passHref>
            <NavigationMenuLink className="max-md:hidden italic text-xl">
              Skills
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#project" legacyBehavior passHref>
            <NavigationMenuLink className="max-md:hidden italic text-xl">
              Project
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#contact" legacyBehavior passHref>
            <NavigationMenuLink className="max-md:hidden italic text-xl">
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// export const Header = () => {
//   return (
//     <header className="sticky top-0 justify-center items-center py-4">
//       <PageContainer>
//         <h1 className="text-lg font-bold">JoDev</h1>
//         <div className="flex-1" />
//         <ul>

//         </ul>
//       </PageContainer>
//     </header>
//   );
// };
