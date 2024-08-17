import { SideBar } from "@/components"
import { Outlet } from "react-router-dom"

export function HomeLayout() {
  return (
    <main
      className={`grid grid-cols-[20rem_1fr] grid-rows-[80px_1fr] max-h-screen`}
    >
      <SideBar />
      <Outlet />
    </main>
  )
}
