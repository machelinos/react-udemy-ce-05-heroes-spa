import { heroes } from '../data/heroes'

export const getHeroesByQuery = (query) => {
  if (query.length <= 1) return []
  return heroes.filter((hero) =>
    hero.superhero.trim().toLowerCase().includes(query),
  )
}
