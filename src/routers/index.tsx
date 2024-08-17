import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes"

export function AppRoute() {
  return true ? <AppRoutes /> : <AuthRoutes />
}
