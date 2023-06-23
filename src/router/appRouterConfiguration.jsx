import { HeroesApp } from '../HeroesApp'
import { LoginPage } from '../auth'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../heroes'

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
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/hero/:id',
        element: <HeroPage />,
      },
    ],
  },
  {
    path: '/*',
    element: <LoginPage />,
  },
]
