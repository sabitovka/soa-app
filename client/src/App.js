import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook"
import { AuthContext } from "./context/AuthContext"
import { Header } from "./components/Header";
import { Loader } from "./components/Loader"

import 'materialize-css';

function App() {
  const { refreshToken, accessToken, login, logout, user, ready } = useAuth()
  const isAuthenticated = !!refreshToken;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      login, logout, refreshToken, accessToken, user, ready
    }}>
      <Router>
        {isAuthenticated && <Header />}
        <div className="container">
          { routes }
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
