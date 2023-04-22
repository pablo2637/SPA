import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateFormFind, validateFormLogin, validateFormRegister } from '../helpers/validateForms'
import { UserContext } from '../contexts/UseContext';
import { getLocalUser } from '../helpers/localStorage';


export const useForm = (initialState) => {

    const [form, setForm] = useState(initialState);
    const [validate, setValidate] = useState({});
    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);


    const serializeForm = (serialForm) => {

        const data = [];
        const formData = new FormData(serialForm);

        for (let [key, value] of formData) {
            data[key] = value.trim();
        }

        return data;
    };


    const handlerSubmit = (ev, formType, users, handleNewUser, handleLoginUser, getText) => {

        ev.preventDefault();

        let validateOk;

        const data = serializeForm(ev.target);


        if (formType == 'login') {

            validateOk = validateFormLogin(data, setValidate, users);

            ev.target.password.value = ''
            if (!validateOk) return

            const loginOK = handleLoginUser(data, setUser);
            if (!loginOK) {
                setValidate({ email: 'El usuario y la  contraseña no coincide' });
                return;
            }

            navigate('home');


        } else if (formType == 'find') {

            validateOk = validateFormFind(data, setValidate);
            if (!validateOk) return

            getText(data.findText);


        } else if (formType == 'register') {

            validateOk = validateFormRegister(data, setValidate, users);
            if (!validateOk) return

            handleNewUser(data, setUser);

            navigate('/home');
        }

    };


    const handlerChange = ({ target }) => {

        setForm({
            ...form,
            [target.name]: target.value
        });

    };

    return {
        handlerSubmit,
        handlerChange,
        validate
    };

};