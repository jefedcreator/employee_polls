export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";


export function setAuthedUser(user) {
    return {
        type: SET_AUTHED_USER,
        user,
    }   
}

export function logoutAuthedUser() {
    return {
        type: LOGOUT_AUTHED_USER,
    };
}


export function handleLogin(username, password) {
    return (dispatch, getState) => {
        const {users} = getState();
        console.log("logged in users:", users);

        const user = Object.values(users).find((user) => user.id == username && user.password == password);
        console.log("logged in:", user.id);

        if (!!user) {
            return dispatch(setAuthedUser(user.id));
        }
    };
}