<template>
  <div class="addPage">
    <div class="header">
      <h1 class="title">发 芽 🌱 🌱 🌱 ———— 低 代 码 平 台</h1>
      <el-button class="add-btn" @click="showDialog">新建页面</el-button>
    </div>
    <el-dialog title="新建" :visible.sync="dialogVisible" width="500px">
      <div class="form-item">
        <span class="label">标题 *</span>
        <input v-model="pageInfo.title" />
      </div>
      <div class="form-item">
        <span class="label">备注</span>
        <input v-model="pageInfo.note" />
      </div>
      <span slot="footer">
        <el-button @click="addPage" :loading="adding">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import toast from '@/utils/toast'
import { addPage } from '@/api'

export default {
    data() {
        return {
            adding: false,
            dialogVisible: false,
            pageInfo: {
                title: '',
                note: '',
            },
        }
    },
    methods: {
        showDialog() {
            if (!this.$store.state.isLogin) return toast('请先登录', 'info')
            this.dialogVisible = true
        },
        async addPage() {
            let that = this
            this.pageInfo.title = this.pageInfo.title.trim()
            this.pageInfo.note = this.pageInfo.note.trim()
            if (!this.pageInfo.title) return toast('请输入页面标题')
            this.adding = true
            const { data: addData } = await addPage({
                title: this.pageInfo.title,
                note: this.pageInfo.note,
            })
            this.adding = false
            if (addData.code !== 200) return toast(addData.msg)
            this.dialogVisible = false
            this.$msgbox({ title: '创建成功',
                message: this.pageInfo.title,
                type: 'success',
                confirmButtonText: '编辑页面', 
                callback(txt) {
                    if (txt === 'confirm') {
                        that.$router.push({ name: 'Home', params: { id: addData.data._id } })
                    }
                }, 
            })
            this.$emit('addSuccess')
        },
    },
}
</script>

<style lang="scss" scoped>
.addPage {
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    h1 {
      font-size: 22px;
    }
    .add-btn {
      width: 180px;
    }
  }
  .form-item {
    display: flex;
    align-items: center;
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