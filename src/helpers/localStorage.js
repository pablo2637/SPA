
export const getLocal = () => {
    return JSON.parse(localStorage.getItem('users')) || [];
};

export const setLocal = (data) => {
    return localStorage.setItem('users', JSON.stringify(data));
};

export const getLocalUser = () => {
    return JSON.parse(localStorage.getItem('user')) || {};
};

export const setLocalUser = (data) => {
    return localStorage.setItem('user', JSON.stringify(data));
};

export const deleteLocalUser = () => {
    localStorage.removeItem('user');
};