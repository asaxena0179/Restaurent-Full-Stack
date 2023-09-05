import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './screens/login'
import LogoutButton from './screens/LogOut'

function App() {
  const {user,isAuthenticated} = useAuth0()
  return (
    <>
      { isAuthenticated && <h1>{user.name}</h1>}
      {(isAuthenticated)?<LogoutButton/>:<LoginButton/>}
    </>
  )
}

export default App
