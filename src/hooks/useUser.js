import { useContext, useReducer } from 'react';
import { getLocal, setLocalUser } from '../helpers/localStorage';
import { UserContext } from '../contexts/UseContext';
import { userReducer } from '../reducers/userReducer';


const init = () => getLocal();

export const useUser = () => {


    const { setUser } = useContext(UserContext);

    const [users, dispatch] = useReducer(userReducer, [], init);

    const handleNewUser = ({ name, email, password }) => {

        const userNew = {
            id: Date.now(),
            name,
            email,
            password,
            date: new Date()
        };

        setUser(userNew);

        const action = {
            type: '[USER] add user',
            payload: userNew
        };

        dispatch(action);
    };


    const handleLoginUser = ({ email, password }) => {

        const userDB = users.find(u => u.email.toLowerCase() == email.toLowerCase() &&
            u.password == password);

        if (userDB) {
            setLocalUser(userDB);

            setUser(userDB)
            return true
        }

        return false;
    };


    return {
        users,
        handleNewUser,
        handleLoginUser
    };
};