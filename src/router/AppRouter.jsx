import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { appRouterConfiguration } from './appRouterConfiguration'

const router = createBrowserRouter(appRouterConfiguration)

export const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>
}
