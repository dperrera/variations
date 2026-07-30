"use client";

import {
  NextVariationsProvider,
} from "variations/next";
import { VariationsControls } from "variations";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextVariationsProvider enabled>
      {children}
      <VariationsControls position="bottom-center" />
    </NextVariationsProvider>
  );
}
