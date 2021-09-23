export default {
    state: {
        isLogin: false,
        userInfo: {},
    },
    mutations: {
        login(state) {
            state.isLogin = true
        },
        logout(state) {
            state.isLogin = false
        },
    },
}
