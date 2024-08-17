import { SideBar } from "@/components"
import { Outlet } from "react-router-dom"

export function HomeLayout() {
  return (
    <div className="flex max-h-screen w-full">
      <SideBar />
      <main className="transition-all duration-700 transform lg:ml-[230px] xl:ml-[300px] w-full h-screen">
        <Outlet />
      </main>
    </div>
  )
}
