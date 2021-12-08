import { createStore } from 'vuex';
import { loginUser } from "./httpLayers/login.http.js";

const store = createStore({
    state() {
        return {
            username: null,
            email: null,
            accountType: null,
            isAuth: false
        }
    },
    mutations: {
        logOut(state) {
            state.username = null;
            state.email = null;
            state.accountType = null;
            state.isAuth = false;
        },
        setUser(state, payload) {
            state.username = payload.username;
            state.email = payload.email;
            state.accountType = payload.accountType;
        }
    },
    actions: {
        async logIn(context, payload) {
            /**
             * This will call loginUser function which will return logging user's data
             * and it will be saved in state.
             */
            try {
                let user = await loginUser(payload.username, payload.password);
                context.commit('setUser', user);
                this.state.isAuth = true;
                return true;
            } catch(error) {
                throw new Error(error.message);
            }
        }
    },
    getters: {
        username(state) {
            return state.username;
        },
        email(state) {
            return state.email;
        },
        accountType(state) {
            return state.accountType;
        },
        isAuth(state) {
            return state.isAuth;
        }
    }
});

export default store;