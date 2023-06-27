import { AuthContext } from './AuthContext'
import PropTypes from 'prop-types'
import { authReducer } from './authReducer'
import { useReducer } from 'react'
import { types } from '../types/types'

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!user,
    user,
  }
}
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init)

  const login = (name = '') => {
    const user = {
      id: '123',
      name,
    }
    const action = {
      type: types.login,
      payload: user,
    }

    localStorage.setItem('user', JSON.stringify(user))
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ authState, login }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
}