<template>
  <div class="addPage">
    <div class="header">
      <h1 class="title">发 芽 🌱 🌱 🌱 ———— 低 代 码 平 台</h1>
      <el-button class="add-btn" @click="dialogVisible = true"
        >新建页面</el-button
      >
    </div>
    <el-dialog title="新建" :visible.sync="dialogVisible">
      <div class="form-item">
        <span class="label">标题</span>
        <input v-model="pageInfo.title" />
      </div>
      <div class="form-item">
        <span class="label">备注</span>
        <input v-model="pageInfo.note" />
      </div>
      <span slot="footer">
        <el-button @click="addPage">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import toast from '@/utils/toast'

export default {
    data() {
        return {
            dialogVisible: false,
            pageInfo: {
                title: '',
                note: '',
            },
        }
    },
    methods: {
        addPage() {
            const title = this.pageInfo.title.trim()
            if (!title) {
                this.pageInfo.title = ''
                return toast('请输入页面标题')
            }
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