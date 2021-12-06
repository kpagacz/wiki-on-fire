import { createStore } from 'vuex';
import wofApi from "./httpLayers/wofApi";

const store = createStore({
    state() {
        return {
            username: null,
            email: null,
            accountType: null,
        }
    },
    mutations: {
        logIn(state, payload) {
            /*state.username = payload.username;
            state.email = payload.email;
            state.accountType = payload.accountType;*/
            const user = await wofApi
                .post("/login", { username: payload.username, password: payload.password })
                .then((response) => {
                    state.username = response.data.username;
                    state.email = response.data.email;
                    state.accountType = response.data.accountType;
                    return true;
                })
                .catch((error) => {
                    if (error.response) {
                        throw new Error(`${error.response.data.message}`);
                    } else if (error.request) {
                        throw new Error("Service refused connection");
                    } else {
                        throw new Error("Undefined error");
                    }
                });
            return false;
        },
        logOut(state) {
            state.username = null;
            state.email = null;
            state.accountType = null;

        }
    },
    actions: {
        logIn(context, payload) {
            context.commit('logIn', payload);
        }
    }
});

export default store;