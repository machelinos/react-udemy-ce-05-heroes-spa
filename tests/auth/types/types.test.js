import { types } from '../../../src/auth/types/types'

describe('Types tests', () => {
  test('should be equal to the types defined', () => {
    expect(types).toEqual({
      login: '[AUTH] Login',
      logout: '[AUTH] Logout',
    })
  })
})
