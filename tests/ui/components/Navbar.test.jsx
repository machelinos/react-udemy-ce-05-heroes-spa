import { fireEvent, render, screen } from '@testing-library/react'
import { AuthContext } from '../../../src/auth/context/AuthContext'
import { Navbar } from '../../../src/ui/components/Navbar'
import { MemoryRouter, useNavigate } from 'react-router-dom'

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('<Navbar /> tests', () => {
  const contextValue = {
    authState: {
      logged: true,
      user: {
        id: '123',
        name: 'Joy Marcelle',
      },
    },
    logout: jest.fn(),
  }

  test('should display the name from the context', () => {
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>,
    )
    expect(screen.getByText(contextValue.authState.user.name)).toBeTruthy()
  })

  test('should execute logout and navigate function when clicking on button', () => {
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>,
    )
    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    expect(contextValue.logout).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true })
  })
})
