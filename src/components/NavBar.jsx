import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { UserContext } from '../contexts/UseContext';
import { Categories } from './Categories';


export const NavBar = () => {

    const { user } = useContext(UserContext);

    return (
        <nav>

            {(user.id) ?

                <div className='divNavContainerUser'>

                    <div>
                        <p>Productos</p>

                        <Categories />

                        <NavLink to='/search'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                        >Buscar
                        </NavLink>
                    </div>

                    <div>
                        <p>Hola, {user.name}!</p>
                        <NavLink to='/logout'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                        >Logout
                        </NavLink>
                    </div>

                </div>

                :

                <div className='divNavContainer'>

                    <div>
                        <NavLink to='/'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                        >Home
                        </NavLink>
                    </div>

                    <div>

                        <Categories />

                        <NavLink to='/login'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                        >Login
                        </NavLink>

                        <NavLink to='/register'
                            className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
                        >Registrarse
                        </NavLink>
                    </div>

                </div>

            }

        </nav>
    );

};
