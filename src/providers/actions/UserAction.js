export const login = user => ({
    type: 'LOGIN',
    user : user
});
export const logout = user_id =>({
    type: 'LOGOUT',
    user_id: user_id
});
export const register = user => ({
    type: 'REGISTER',
    user : user
});