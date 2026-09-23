"use client";

import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { useRef } from "react";

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const pageRef = useRef<HTMLElement>(null);
  useGsapReveal(pageRef);

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-background text-foreground"
    >
      {children}
    </main>
  );
};
