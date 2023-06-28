import { authReducer } from '../../../src/auth'
import { types } from '../../../src/auth/types/types'

describe('authReducer tests', () => {
  const defaultState = {
    logged: false,
  }

  const user = {
    id: '123',
    name: 'Joy Marcelle',
  }

  test('should return the default state', () => {
    const state = authReducer(defaultState, 'any')
    expect(state).toBe(defaultState)
  })

  test('action login should login and set the user', () => {
    const state = authReducer(defaultState, {
      type: types.login,
      payload: user,
    })

    expect(state.logged).toBeTruthy()
    expect(state.user).toBe(user)
  })

  test('action logout should logout and delete the user', () => {
    const state = authReducer(
      { logged: true, user },
      {
        type: types.logout,
      },
    )

    expect(state.logged).toBeFalsy()
    expect(state.user).toBeFalsy()
  })
})
