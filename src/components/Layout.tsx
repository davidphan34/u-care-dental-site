import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
      <div className="flex flex-col min-h-screen bg-[#faf7f5]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    );
  }