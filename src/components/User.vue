<template>
  <div class="user">
    <el-dropdown v-if="isLogin" @command="userHandle">
      <i class="el-icon-user avatar"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span v-else @click="showLoginDialog">登录</span>

    <el-dialog title="登录" :visible.sync="loginDialogVisible" width="500px">
      <div class="form-item">
        <span class="label">用户名 *</span>
        <input v-model="loginReqData.username" />
      </div>
      <div class="form-item">
        <span class="label">密码 *</span>
        <input v-model="loginReqData.password" />
      </div>
      <div class="form-item">
        <span class="label">验证码 *</span>
        <input v-model="loginReqData.code" />
        <span v-html="svg" class="captcha" @click="getCaptcha"></span>
      </div>
      <span slot="footer">
        <el-button @click="login" :loading="logining">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import toast from '@/utils/toast'
import { getCaptcha, login } from '@/api'

export default {
    computed: mapState(['isLogin']),
    data() {
        return {
            logining: false,
            loginDialogVisible: false,
            loginReqData: {
                username: 'dayiLowCodeAdmin',
                password: 'dayi@2019!',
                code: '',
            },
            svg: '图形验证码',
        }
    },

    created() {
        this.$store.commit('initSid')
        this.$store.commit('initUserInfo')
    },
    mounted() {},
    methods: {
        showLoginDialog() {
            this.loginDialogVisible = true
            this.getCaptcha()
        },
        async getCaptcha() {
            let sid = this.$store.state.sid
            if (!sid) {
                sid = uuidv4()
                this.$store.commit('setSid', sid)
                localStorage.setItem('sid', sid)
            }
            const { data: captchaData } = await getCaptcha(sid)
            if (captchaData.code === 200) {
                this.svg = captchaData.data
            }
        },
        async login() {
            this.loginReqData.username = this.loginReqData.username.trim()
            this.loginReqData.password = this.loginReqData.password.trim()
            this.loginReqData.code = this.loginReqData.code.trim()
            if (!this.loginReqData.username) return toast('请输入用户名')
            if (!this.loginReqData.password) return toast('请输入密码')
            if (!this.loginReqData.code) return toast('请输入验证码')
            this.logining = true
            const { data: loginData } = await login({
                username: this.loginReqData.username,
                password: this.loginReqData.password,
                code: this.loginReqData.code,
                sid: this.$store.state.sid,
            })
            this.logining = false
            if (loginData.code !== 200) return toast(loginData.msg)
            this.loginDialogVisible = false
            this.$store.commit('login', loginData)
        },
        userHandle(command) {
            this[command] && this[command]()
        },
        logout() {
            this.$store.commit('logout', {})
        },
    },
}
</script>

<style lang="scss" scoped>
.user {
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  color: #409eff;
  .avatar {
    font-size: 24px;
    color: #409eff;
  }
  .form-item {
    display: flex;
    align-items: center;
    position: relative;
    &:not(:first-child) {
      margin-top: 20px;
    }
    .label {
      display: inline-block;
      width: 58px;
      text-align: left;
    }
    input {
      width: 250px;
      margin-left: 10px;
      outline: none;
      padding: 5px 10px;
      border: 1px solid #ddd;
      color: #606266;
    }
    .captcha {
      position: absolute;
      right: -9px;
      width: 150px;
      height: 38px;
      color: #ccc;
      text-align: center;
      line-height: 38px;
    }
  }
}
</style>