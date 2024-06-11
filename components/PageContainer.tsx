import { PageContainerProps } from "@/utils/Interface/PageContainerProps";

export default function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl ${className || ""}`}>
      {children}
    </div>
  );
}
