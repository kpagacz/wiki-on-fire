import { createStore } from "vuex";
import { loginUser } from "./httpLayers/login.http.js";
import { signOut } from "./httpLayers/signout.http.js";

const store = createStore({
  state() {
    return {
      username: null,
      email: null,
      accountType: null,
      isAuth: false,
    };
  },
  mutations: {
    /**
     * It requires object argument with username, email, and accountType properties (all Strings)
     */
    setUser(state, payload) {
      state.username = payload.username;
      state.email = payload.email;
      state.accountType = payload.accountType;
    },
  },
  actions: {
    /**
     * This will call loginUser function which will return logging user's data
     * and it will be saved in state.
     */
    async logIn(context, payload) {
      try {
        let user = await loginUser(payload.username, payload.password);
        context.commit("setUser", user);
        this.state.isAuth = true;
        return true;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    /**
     * Signs user out of the application session.
     *
     * Wipes the stored user data and the session cookie.
     *
     * @throws {Error} if wiping out the session cookie was not successful
     */
    async logOut() {
      try {
        await signOut();
      } catch (error) {
        throw new Error("Error signing user out");
      }
      this.state.username = null;
      this.state.email = null;
      this.state.accountType = null;
      this.state.isAuth = false;
    },
  },
  getters: {
    /**
     * It returns String or null
     */
    username(state) {
      return state.username;
    },
    /**
     * It returns String or null
     */
    email(state) {
      return state.email;
    },
    /**
     * It returns Number or null
     */
    accountType(state) {
      return state.accountType;
    },
    /**
     * It returns Boolean
     */
    isAuth(state) {
      return state.isAuth;
    },
  },
});

export default store;
