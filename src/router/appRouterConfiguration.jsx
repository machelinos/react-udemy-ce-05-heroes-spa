import { HeroesApp } from '../HeroesApp'
import { LoginPage } from '../auth'
import { DcPage, MarvelPage } from '../heroes'

export const appRouterConfiguration = [
  {
    path: '/',
    element: <HeroesApp />,

    children: [
      {
        path: '/marvel',
        element: <MarvelPage />,
      },
      {
        path: '/dc',
        element: <DcPage />,
      },
      {
        path: '/*',
        element: <LoginPage />,
      },
    ],
  },
]
