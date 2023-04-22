import { useContext } from 'react';
import { NavBar } from './components/NavBar'
import { UserContext } from './contexts/UseContext';
import { AppRoutes, UserRoutes } from './routers'
import { useUser } from './hooks/useUser';

function App() {

  const { user, setUser } = useContext(UserContext);

  const { handleLoginUser, handleNewUser, users } = useUser();

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
          <AppRoutes
            handleNewUser={handleNewUser}
            handleLoginUser={handleLoginUser}
            users={users}
          />}

      </main>

      <footer>
        Footer
      </footer>
    </>
  )
}

export default App
