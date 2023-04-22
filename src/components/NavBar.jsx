import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { UserContext } from '../contexts/UseContext';
import { Categories } from './Categories';


export const NavBar = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <nav>

            {(user.id) ?

                <>
                    <p>Productos</p>

                    <Categories />

                    <NavLink to='/search'
                        className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                    >Buscar
                    </NavLink>

                    <NavLink to='/logout'
                        className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                    >Logout
                    </NavLink>

                </> : <>

                    <p>Home</p>
                    <NavLink to='/'
                        className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                    >Home
                    </NavLink>

                    <NavLink to='/login'
                        className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                    >Login
                    </NavLink>

                    <NavLink to='/register'
                        className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                    >Registrarse
                    </NavLink>
                </>

            }

        </nav>
    );

};
