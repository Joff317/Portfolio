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
          <Link href="/skills" legacyBehavior passHref>
            <NavigationMenuLink className="max-md:hidden">
              Skills
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/project" legacyBehavior passHref>
            <NavigationMenuLink className="max-md:hidden">
              Project
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/project" legacyBehavior passHref>
            <NavigationMenuLink className="max-md:hidden">
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
//           <Link
//             href="https://github.com/Joff317"
//             className={cn(
//               buttonVariants({ variant: "outline" }),
//               "size-6 p-0 hover:bg-inherit"
//             )}
//           >
//             <GithubIcon size={16} className="text-foreground" />
//           </Link>
//         </ul>
//       </PageContainer>
//     </header>
//   );
// };
