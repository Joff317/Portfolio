import React from "react";
import PageContainer from "./PageContainer";
import HeaderNavigation from "./HeaderNavigation";

export default function Header() {
  return (
    <header className="py-4">
      <PageContainer>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            {/* Responsive Menu */}
            <h1
              className="text-2xl font-bold"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #af58d8, #4242ac)",
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
