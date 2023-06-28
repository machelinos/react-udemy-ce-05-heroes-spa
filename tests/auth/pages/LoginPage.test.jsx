import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../../src/auth/context/AuthContext'
import { PublicRouter } from '../../../src/router/PublicRouter'
import { LoginPage } from '../../../src/auth'

describe('<LoginPage /> tests', () => {
  test('should call handleLogin when clicking in button', () => {
    const contextValue = {
      authState: {
        logged: false,
      },
      login: jest.fn(),
      logout: jest.fn(),
    }

    Storage.prototype.getItem = jest.fn()

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRouter>
                  <LoginPage />
                </PublicRouter>
              }
            ></Route>
            <Route path="/" element={<h2>Logged in</h2>}></Route>
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>,
    )

    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    expect(contextValue.login).toHaveBeenCalled()
    expect(localStorage.getItem).toHaveBeenCalledWith('lastPage')
  })
})
