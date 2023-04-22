import { useContext } from 'react';
import { NavBar } from './components/NavBar'
import { UserContext } from './contexts/UseContext';

import { AppRoutes, UserRoutes } from './routers'

function App() {

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <header>
        Práctica SPA
      </header>

      <NavBar />

      <main>

        {(user.id) ?
          <UserRoutes />
          :
          <AppRoutes />}

      </main>

      <footer>
        Footer
      </footer>
    </>
  )
}

export default App
