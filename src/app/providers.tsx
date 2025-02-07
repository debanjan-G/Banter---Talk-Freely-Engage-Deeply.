"use client";

import { HeroUIProvider } from "@heroui/system";
import { SessionProvider } from "next-auth/react";

interface HeroProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: HeroProviderProps) {
  return (
    <SessionProvider>
      <HeroUIProvider>{children}</HeroUIProvider>
    </SessionProvider>
  );
}
