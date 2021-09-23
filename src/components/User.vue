<template>
  <div class="user">
    <el-dropdown v-if="isLogin" @command="userHandle">
      <i class="el-icon-user avatar"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span v-else @click="loginDialogVisible = true">登录</span>

    <el-dialog title="登录" :visible.sync="loginDialogVisible">
      <div class="form-item">
        <span class="label">用户名</span>
        <input v-model="loginReqData.userName" />
      </div>
      <div class="form-item">
        <span class="label">密码</span>
        <input v-model="loginReqData.password" />
      </div>
      <span slot="footer">
        <el-button @click="login">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState(['isLogin']),
    data() {
        return {
            loginDialogVisible: false,
            loginReqData: {
                userName: '',
                password: '',
            },
        }
    },
    methods: {
        login() {
            this.loginDialogVisible = false
            this.$store.commit('login', {})
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
  }
}
</style>