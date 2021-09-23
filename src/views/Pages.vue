<template>
  <div class="pages">
    <User class="user-component" />
    <AddPage />
    <div class="">
      <el-table :data="tableData" style="width: 100%" max-height="250">
        <el-table-column fixed prop="title" label="标题" width="150">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="120">
        </el-table-column>
        <el-table-column prop="note" label="备注"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="edit(scope.$index, tableData)"
              type="text"
            >
              编辑
            </el-button>
            <el-button
              @click.native.prevent="delete(scope.$index, tableData)"
              type="text"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import AddPage from '@/components/AddPage'
import User from '@/components/User'

export default {
    data() {
        return {
            tableData: [
                {
                    title: '页面标题',
                    date: '2016-05-03',
                    note: '这是第一个页面的备注',
                },
            ],
        }
    },
    components: { User, AddPage },
    methods: {
        delete(index, rows) {
            rows.splice(index, 1)
        },
        edit() {
            this.$router.push({ name: 'Home', params: { id: '123' } })
        },
    },
}
</script>
<style lang="scss" scoped>
.pages{
  .user-component{
    position: absolute;
    right: 20px;
    top: 58px;
  }
}
</style>