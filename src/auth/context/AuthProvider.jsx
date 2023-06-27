import { AuthContext } from './AuthContext'
import PropTypes from 'prop-types'
import { authReducer } from './authReducer'
import { useReducer } from 'react'
import { types } from '../types/types'

const initialState = {
  logged: false,
}
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState)

  const login = (name = '') => {
    const action = {
      type: types.login,
      payload: {
        id: '123',
        name,
      },
    }

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
