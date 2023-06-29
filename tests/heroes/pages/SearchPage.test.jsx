import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { SearchPage } from '../../../src/heroes/pages/SearchPage'

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}))

describe('<SearchPage /> tests', () => {
  test('should load the component with the default values', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>,
    )

    expect(container).toMatchSnapshot()
  })

  test('should load the input with batman query', () => {
    const query = 'batman'
    render(
      <MemoryRouter initialEntries={[`?q=${query}`]}>
        <SearchPage />
      </MemoryRouter>,
    )
    const input = screen.getByRole('textbox')
    expect(input.value).toBe(query)
    expect(screen.getAllByText(/Batman/i)).toBeTruthy()
  })

  test('should show the error message if not heroes are found', () => {
    const query = 'asdaxa'
    render(
      <MemoryRouter initialEntries={[`?q=${query}`]}>
        <SearchPage />
      </MemoryRouter>,
    )
    expect(screen.getByText(/No results for/i)).toBeTruthy()
  })

  test('should navigate to the search query page', () => {
    const query = 'batman'
    render(
      <MemoryRouter initialEntries={[`?q=${query}`]}>
        <SearchPage />
      </MemoryRouter>,
    )
    const form = screen.getByLabelText('form')
    fireEvent.submit(form)
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${query}`)
  })
})
