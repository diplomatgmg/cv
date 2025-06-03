import { createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom"
import { createRoutesFromElements } from "react-router-dom"
import routes from "@/routes/routes"
import CVPage from "@/pages/CVPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={routes.ROOT} element={<Navigate to={routes.CV} replace />} />
      <Route path={routes.CV} element={<CVPage />} />
      <Route path="*" element={<Navigate to={routes.CV} replace />} />
    </>
  )
)

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
