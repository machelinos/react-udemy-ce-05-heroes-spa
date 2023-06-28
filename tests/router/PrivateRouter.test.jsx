import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { PrivateRouter } from '../../src/router/PrivateRouter'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('<Private Router /> tests', () => {
  test('should load the children when logged in', () => {
    const contextValue = {
      authState: {
        logged: true,
        user: {
          id: '1234',
          name: 'Joy Marcelle',
        },
      },
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <PrivateRouter>
          <h1>Logged in user</h1>
        </PrivateRouter>
      </AuthContext.Provider>,
    )

    expect(screen.getByText('Logged in user')).toBeTruthy()
  })

  test('should navigate to Login when not logged in ', () => {
    const contextValue = {
      authState: {
        logged: false,
      },
    }

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <Routes>
            <Route element={<PrivateRouter />}>
              <Route path="/marvel" element={<h1>Logged in user</h1>} />
            </Route>
            <Route path="login" element={<h1>Login Logged out user</h1>} />
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>,
    )

    expect(screen.getByText('Login Logged out user')).toBeTruthy()
  })
})
