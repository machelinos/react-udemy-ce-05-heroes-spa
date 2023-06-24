import { Outlet } from 'react-router-dom'
import { Navbar } from './ui'

export const HeroesApp = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  )
}
