const ls = localStorage;
const SESSION_KEY = 'session';
const userData = {
    username: 'claudio',
    email: 'claudio.dcv@gmail.com',
};

export const login = () => {
    ls.setItem(SESSION_KEY, JSON.stringify(userData));
};

export const logout = () => {
    ls.removeItem(SESSION_KEY);
}

export const isLogin = () => {
    return !!ls.getItem(SESSION_KEY);
};