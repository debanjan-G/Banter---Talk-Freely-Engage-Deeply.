"use client";

import { HeroUIProvider } from "@heroui/system";

interface HeroProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: HeroProviderProps) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
