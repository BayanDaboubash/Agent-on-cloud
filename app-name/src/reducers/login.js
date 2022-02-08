let token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
let loggedIn = localStorage.getItem("token") ? true : false;

const initialState = {
    token: token,
    user: {},
    loggedIn: loggedIn,
};

const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_TOKEN":
            sessionStorage.setItem("user",JSON.stringify({ token: payload.token, user: payload.user, loggedIn: payload.loggedIn }))
            return { token: payload.token, user: payload.user, loggedIn: payload.loggedIn };
        default:
            return state;
    }
};

export default loginReducer;

export const setToken = (userLog) => {
    return { type: "SET_TOKEN", payload: userLog };
};