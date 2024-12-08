import { SectionsProvider } from "@/contexts/sections";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <SectionsProvider>{children}</SectionsProvider>;
}
