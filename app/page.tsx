/* eslint-disable react/no-unescaped-entities */
import HeaderNavigation from "@/components/HeaderNavigation";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";

export default function Home() {
  return (
    <PageContainer className="p-4">
      <div className="flex flex-col">
        <p>Hello! I'm</p>
        <p className="font-12">Joffrey Freixanet</p>
      </div>
    </PageContainer>
  );
}
