const userReducer = (state = {name: "anno"}, action) => {
    switch(action.type) {
        case 'LOGIN':
            return action.user;
        case 'REGISTER':
            return action.user;
        case 'LOGOUT':
            return {};
        default : return state;
    }
}
export default userReducer;
