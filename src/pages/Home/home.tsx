import React from "react"
import { useStore } from "@/store"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function Home() {
  const { count, increment } = useStore()

  const notify = () => toast("Hello, world!")

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p>Count: {count}</p>
      <button onClick={increment} className="btn">
        Increment
      </button>
      <button onClick={notify} className="btn">
        Notify
      </button>
      <ToastContainer />
    </div>
  )
}
