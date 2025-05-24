import { ReactNode } from "react";

export default function GradientSection({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-[calc(100vh-88px)] bg-[#faf7f5] px-6 py-5">
      {children}
    </section>
  );
}
