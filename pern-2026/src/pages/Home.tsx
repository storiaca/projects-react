import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
const Home = () => {
  const {user, isLoading} = useAuth()

  if(user && !isLoading) {
    return <Navigate to="/profile" replace />
  }

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home