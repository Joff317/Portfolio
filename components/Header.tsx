import React from "react";
import PageContainer from "./PageContainer";
import HeaderNavigation from "./HeaderNavigation";
import ResponsiveMenu from "./ResponsiveHeaderNavigation";

export default function Header() {
  return (
    <header className="py-4">
      <PageContainer>
        <div className="flex items-center justify-between w-full max-md:pl-2">
          <div className="flex items-center gap-2">
            {/* Responsive Menu */}
            <ResponsiveMenu />
            <h1
              className="text-2xl font-bold"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #1164ea, #1111ce)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              JoDev
            </h1>
          </div>

          {/* Navigation shadcn */}
          <HeaderNavigation />

          {/* Buttons */}
        </div>
      </PageContainer>
    </header>
  );
}
