import { render, screen } from '@testing-library/react'
import { Navigate, RouterProvider, createMemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { HeroesApp } from '../../src/HeroesApp'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../../src/heroes'
import { LoginPage } from '../../src/auth'
import { PrivateRouter } from '../../src/router/PrivateRouter'
import { PublicRouter } from '../../src/router/PublicRouter'

describe('<AppRouter /> tests', () => {
  const appRouterConfiguration = [
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

  test('should load the Login page when not logged in', () => {
    const contextValue = {
      authState: {
        logged: false,
      },
    }

    const router = createMemoryRouter(appRouterConfiguration, {
      initialEntries: ['/marvel'],
    })
    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext.Provider>,
    )

    expect(screen.getAllByText(/Login/i).length).toBe(2)
  })

  test('should load the marvel page when logged in', () => {
    const contextValue = {
      authState: {
        logged: true,
        user: {
          id: '123',
          name: 'Joy Marcelle',
        },
      },
    }

    const router = createMemoryRouter(appRouterConfiguration, {
      initialEntries: ['/login'],
    })
    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext.Provider>,
    )

    expect(screen.getByText(/Marvel Page/i)).toBeTruthy()
  })
})
