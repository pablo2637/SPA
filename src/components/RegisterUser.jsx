import { useForm } from "../hooks/useForm";

export const RegisterUser = ({ handleNewUser, users }) => {

    const {
        handlerChange,
        handlerSubmit,
        validate } = useForm('');

    return (

        <>
            <h2>Completa el registro...</h2>

            <form onSubmit={(ev) => handlerSubmit(ev, 'register', users, handleNewUser)}>

                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre"
                    autoFocus
                    onChange={handlerChange}
                />
                {
                    (validate.name) &&
                    <p>{validate.name}</p>
                }

                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={handlerChange}
                />
                {
                    (validate.email) &&
                    <p>{validate.email}</p>
                }

                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                    onChange={handlerChange}
                />
                {
                    (validate.password) &&
                    <p>{validate.password}</p>
                }

                <label htmlFor="passwordR">Repite la contraseña:</label>
                <input
                    type="password"
                    name="passwordR"
                    id="passwordR"
                    placeholder="Repetir contraseña"
                    onChange={handlerChange}
                />
                {
                    (validate.passwordR) &&
                    <p>{validate.passwordR}</p>
                }

                <input
                    type="submit"
                    value="Registrarme"
                />

            </form>
        </>
    );
};
