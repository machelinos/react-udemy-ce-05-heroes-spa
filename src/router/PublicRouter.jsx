import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AuthContext } from '../auth/context/AuthContext'

export const PublicRouter = ({ children }) => {
  const { authState } = useContext(AuthContext)
  return !authState.logged ? children : <Navigate to="/marvel" />
}

PublicRouter.propTypes = {
  children: PropTypes.object.isRequired,
}
