import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import PageContainer from "@/components/PageContainer";
import Header from "@/components/Header";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "JoDev · FullStack Developer",
  description: "WebDeveloper on React, Tailwind, Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          AnekTelugu,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        <div className="flex flex-col justify-between min-h-screen">
          <PageContainer>
            <Header />
          </PageContainer>
          {/* flex grow = pour que les composant prennent le maximum de place sur l'écran */}
          <div className="flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
