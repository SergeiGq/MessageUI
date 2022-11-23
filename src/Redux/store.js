import { createStore } from 'redux';


function reducer(state, action) {
    switch(action.type) {
        case "token":
            return { token: action.token };
        case "IsAuth":
            return {Auth:action.Auth}

        default: return state;
    }
}
const store = createStore(reducer);

export default store;