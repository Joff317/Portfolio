import { PropsWithChildren } from "react";

export const Section = ({ children }: { children: React.ReactNode }) => {
  return <section className="max-w-3xl px-4 mx-auto">{children}</section>;
};
