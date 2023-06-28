import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRouter = ({ children }) => {
  const { authState } = useContext(AuthContext)

  return authState.logged ? children : <Navigate to="/login" />
}

PrivateRouter.propTypes = {
  children: PropTypes.object,
}
