import { HomeLayout } from "@/layouts"
import { Home, NotFound } from "@/pages"
import { Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
