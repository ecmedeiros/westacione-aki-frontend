import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function Home() {
  const notify = () => toast("Hello, world!")

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <button onClick={notify} className="btn">
        Notify
      </button>
      <ToastContainer />
    </div>
  )
}
