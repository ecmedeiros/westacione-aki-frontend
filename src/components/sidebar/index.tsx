import { useLocation } from "react-router-dom"

import { SideBarItem } from "./sidebarItem"

import { IoIosHome } from "react-icons/io"

import { TbCircleLetterE } from "react-icons/tb"

import { BiAngry } from "react-icons/bi"

import { LogoIcon } from "@/assets/logo"

export function SideBar() {
  const { pathname } = useLocation()

  return (
    <aside className="h-full fixed top-0 z-20 left-0 min-h-screen bg-sidebar-background transition-all duration-700 transform w-[220px] lg:w-[230px] xl:w-[300px]">
      <div className="flex items-center px-4 justify-center w-full gap-2 lg:gap-3 xl:gap-5">
        <div>
          <LogoIcon />
        </div>
      </div>
      <ul className="w-full h-fit flex flex-col">
        <SideBarItem
          text="Home"
          icon={IoIosHome}
          selected={pathname === "/"}
          path="/"
        />
        <SideBarItem
          text="Estacionamentos"
          icon={TbCircleLetterE}
          selected={pathname.includes("/parkingLots")}
          path="/parkingLots"
        />
        <SideBarItem
          text="Conta"
          icon={BiAngry}
          selected={pathname.includes("/account")}
          path="/account"
        />
      </ul>
    </aside>
  )
}
