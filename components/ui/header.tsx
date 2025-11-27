"use client";
import { useIsMobile } from "@/app/_hooks/use-is-mobile";
import Menu from "./menu";

function Header() {
  const isMobile = useIsMobile();

  if (isMobile) return <Menu.Mobile />;
  return <Menu.Web />;
}

export default Header;
