import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"
import { AppRoute } from "./routers"

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
