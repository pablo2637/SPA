import { useForm } from '../../../hooks/useForm';

export const Find = ({ getText }) => {

    const {
        handlerChange,
        handlerSubmit,
        validate } = useForm('');

    return (
        <section>

            <form onSubmit={(ev) => handlerSubmit(ev, 'find', null, null, null, getText)}>
                <label
                    htmlFor="findText"
                >Escribe lo que quieres buscar:
                </label>

                <input
                    type="text"
                    name="findText"
                    id="findText"
                    placeholder="Buscar"
                    autoFocus
                    onChange={handlerChange}
                />
                {
                    (validate.findText) &&
                    <p>{validate.findText}</p>
                }

                <input
                    type="submit"
                    value="Buscar"
                />

            </form>

        </section>
    );
};
