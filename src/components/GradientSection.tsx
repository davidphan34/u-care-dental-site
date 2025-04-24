import { ReactNode } from "react";

export default function GradientSection({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-[calc(100vh-88px)] bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-6 py-5">
      {children}
    </section>
  );
}
