import { useContext } from 'react';
import { NavBar } from './components/NavBar'
import { UserContext } from './contexts/UseContext';
import { AppRoutes, UserRoutes } from './routers'
import { useUser } from './hooks/useUser';

function App() {

  const { user } = useContext(UserContext);

  const { handleLoginUser, handleNewUser, users } = useUser();

  return (
    <>
      <header>
        <p>Práctica SPA</p>
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
        <p>Footer</p>
      </footer>
    </>
  )
}

export default App
