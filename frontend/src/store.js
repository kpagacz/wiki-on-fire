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
        /**
        * This will clear all user's data and unauthorize current session
        */
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
        /**
        * This will call loginUser function which will return logging user's data
        * and it will be saved in state.
        */
        async logIn(context, payload) {
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