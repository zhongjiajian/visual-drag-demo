export default {
    state: {
        isLogin: false,
        userInfo: {},
        sid: '',
    },
    mutations: {
        initSid(state) {
            const sid = localStorage.getItem('sid')
            if (sid) state.sid = sid
        },
        setSid(state, sid) {
            state.sid = sid
        },
        initUserInfo(state) {
            const userInfo = localStorage.getItem('userInfo')
            if (userInfo) {
                state.userInfo = JSON.parse(userInfo)
                state.isLogin = true
            }
        },
        login(state, loginData) {
            state.isLogin = true
            state.userInfo = {
                data: loginData.data,
                token: loginData.token,
                refreshToken: loginData.refreshToken,
            }
            localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
        },
        logout(state) {
            state.isLogin = false
            state.userInfo = {}
            localStorage.removeItem('userInfo')
        },
        
    },
}
