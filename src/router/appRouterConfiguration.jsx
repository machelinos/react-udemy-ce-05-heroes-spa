import { Navigate } from 'react-router-dom'
import { HeroesApp } from '../HeroesApp'
import { LoginPage } from '../auth'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../heroes'
import { PrivateRouter, PublicRouter } from './'

export const appRouterConfiguration = [
  {
    path: '/',
    element: (
      <PrivateRouter>
        <HeroesApp />
      </PrivateRouter>
    ),

    children: [
      {
        path: '/',
        element: <Navigate to="/marvel" />,
      },
      {
        path: '/marvel',
        element: <MarvelPage />,
      },
      {
        path: '/dc',
        element: <DcPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/hero/:id',
        element: <HeroPage />,
      },
      {
        path: '/*',
        element: <MarvelPage />,
      },
    ],
  },
  {
    path: '/login',
    element: (
      <PublicRouter>
        <LoginPage />
      </PublicRouter>
    ),
  },
]
