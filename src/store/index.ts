import { createStore } from "vuex";
import storage from "./storage";

export default createStore({
    state: {
        status: "",
        token: storage().get('token'),
        user: storage().get('user'),
        org: storage().get('org'),
    },

    mutations: {
        REQUESTING: (state: any) => {
            state.status = "loading";
        },

        REQUESTED: (state: any) => {
            state.status = "loaded";
        },

        SUCCESS: (state: any, token) => {
            state.status = "success";
            state.token = token;
        },

        ERROR: (state: any) => {
            state.status = "error";
        },

        SET_USER: (state: any, payload) => {
            state.user = payload;
            state.org = payload.org
            state.id = payload.id
        },

        LOGOUT: (state: any, payload) => {
            state.user = null;
            state.token = null;
        },
    },

    actions: {
        authenticate: ({ commit }) => {
            storage().getItem('token').then(token => {
                if (token) {
                    commit("SUCCESS", token);

                    storage().getObject('user').then(user => {
                        if (user) {
                            commit("SET_USER", user);
                        }
                    })
                }
            })
        },
    },

    getters: {
        authenticated: (state) => !!state.token,
        authStatus: (state) => state.status,
    },
});