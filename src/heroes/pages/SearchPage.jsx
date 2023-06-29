import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { HeroCard } from '../components'
import { getHeroesByQuery } from '../helpers'
import { useForm } from '../../hooks/useForm'

export const SearchPage = () => {
  const navigate = useNavigate()

  const { search } = useLocation()
  const { q = '' } = queryString.parse(search)

  const { searchText, handleInputChange } = useForm({
    searchText: q,
  })

  const heroes = useMemo(() => getHeroesByQuery(q), [q])

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSubmit} aria-label="form">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h3>Results</h3>

          {heroes.length > 0 && (
            <div className="row row-cols-1">
              {heroes.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
              ))}
            </div>
          )}

          {q.length <= 1 && (
            <div className="alert alert-primary">
              <p className="mb-0">Search a hero</p>
            </div>
          )}

          {q.length > 1 && heroes.length === 0 && (
            <div className="alert alert-danger">
              <p className="mb-0">
                No results for <strong>{q}</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
