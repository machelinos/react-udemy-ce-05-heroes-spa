import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    login('Joy Marcelle')
    navigate('/', { replace: true })
  }
  return (
    <div className="container mt-4">
      <h1>Login Page</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}
