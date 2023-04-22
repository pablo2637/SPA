import { useForm } from "../hooks/useForm";

export const RegisterUser = ({ handleNewUser, users }) => {

    const {
        handlerChange,
        handlerSubmit,
        validate } = useForm('');

    return (
        <section>

            <form onSubmit={(ev) => handlerSubmit(ev, 'register', users, handleNewUser)}>

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

        </section>
    )
}
