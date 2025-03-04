"use client";

import type { ReactElement } from "react";
import { NavbarMenu } from "@/lib/components/navbar-menu/navbarMenu";
import { ToggleTheme } from "../toggle-theme/toggleTheme";
import Link from "next/link";
import { useUserContext } from "@/lib/utils/contexts/user-provider";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { SheetChangelogStore } from "@/lib/utils/stores/sheetChangelogStore";

export const Navbar = (): ReactElement => {
  const { user } = useUserContext();
  const toggle = SheetChangelogStore((state) => state.toggle);

  return (
    <div className="text-white bg--500 w-full mb-10 flex justify-between items-center">
      <Link href="/app">
        <span style={{ filter: "drop-shadow(0px 5px 12px #ffffff)" }} className="text-2xl font-bold text-titleHighlight">LOLGAMES</span>
      </Link>
      <div className="flex gap-2">
        {user && user !== "loading" && (
          <Button variant={"outline"} onClick={() => {
            toggle();
          }}>CHANGELOG</Button>
        )}
        <Link target="_blank" href={"https://github.com/Sakoutecher/lol-game"}>
          <Button variant={"outline"} size={"icon"}><GitHubLogoIcon className="transition-colors text-neutral-950 dark:text-neutral-50" /></Button>
        </Link>
        {user && user !== "loading" && (
          <>
            <ToggleTheme />
            <NavbarMenu />
          </>
        )}
      </div>
    </div>
  );
};