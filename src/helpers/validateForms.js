
export const validateFormLogin = (data, setValidate, users) => {

    let email, password, rslt = true;

    const testEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    const loginOK = users.find(u => u.email.toLowerCase() == data.email.toLowerCase() && u.password == data.password);

    if (data.email == '' || !testEmail.test(data.email)) {
        email = 'Debes escribir un email válido';
        rslt = false;
    }

    if (data.password == '') {
        password = 'La contraseña es obligatoria';
        rslt = false;

    } else if (!loginOK) {
        email = 'Error al validar el usuario y la contraseña';
        rslt = false;
    }

    setValidate({
        email,
        password
    });

    return rslt;
};


export const validateFormRegister = (data, setValidate, users) => {

    let email, name, password, rslt = true;

    const testEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    const exists = users.find(u => u.email.toLowerCase() == data.email.toLowerCase());

    if (data.email == '' || !testEmail.test(data.email)) {
        email = 'Debes escribir un email válido';
        rslt = false;
    } else if (exists) {
        email = 'Este email ya esta registrado...';
        rslt = false;
    }

    if (data.name == '') {
        name = 'El nombre no puede estar vacío';
        rslt = false;
    }

    if (data.password == '') {
        password = 'La contraseña es obligatoria';
        rslt = false;
    }

    if (data.password != data.passwordR) {
        password = 'Las contraseñas no coinciden';
        rslt = false;
    }

    setValidate({
        email,
        name,
        password
    });

    return rslt;
};


export const validateFormFind = (data, setValidate) => {

    let findText, rslt = true;

    if (data.findText == '') {
        rslt = false;
        findText = 'Si no escribes nada, no buscamos nada...';
    }

    setValidate({ findText });

    return rslt;
};
