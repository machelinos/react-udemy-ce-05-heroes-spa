import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { PublicRouter } from '../../src/router/PublicRouter'
import { LoginPage } from '../../src/auth'
import {
  MemoryRouter,
  Route,
  RouterProvider,
  Routes,
  createMemoryRouter,
} from 'react-router-dom'

describe('<PublicRouter /> tests', () => {
  test('should load the children when not logged in', () => {
    const contextValue = {
      authState: {
        logged: false,
      },
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRouter>
          <h1>Not logged in</h1>
        </PublicRouter>
      </AuthContext.Provider>,
    )
    expect(screen.getByText('Not logged in')).toBeTruthy()
  })

  test('should navigate when logged in', () => {
    const contextValue = {
      authState: {
        logged: true,
        user: {
          id: '123',
          name: 'Joy Marcelle',
        },
      },
    }

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <Routes>
            <Route element={<PublicRouter />}>
              <Route path="login" element={<h1>Public route</h1>}></Route>
            </Route>
            <Route path="/marvel" element={<h1>Marvel Page</h1>} />
          </Routes>
        </AuthContext.Provider>
        ,
      </MemoryRouter>,
    )

    expect(screen.getByText('Marvel Page')).toBeTruthy()
  })
})
