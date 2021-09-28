<template>
  <div class="pages">
    <User class="user-component" />
    <AddPage @addSuccess="getPages" />
    <div class="">
      <el-table :data="tableData" style="width: 100%" max-height="500">
        <el-table-column fixed  show-overflow-tooltip prop="title" label="标题" width="250">
        </el-table-column>
        <el-table-column prop="created" label="创建时间" width="250">
        </el-table-column>
        <el-table-column prop="uid.name" label="创建人" width="120">
        </el-table-column>
        <el-table-column show-overflow-tooltip prop="note" label="备注"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="edit(scope, tableData)"
              type="text"
            >
              编辑
            </el-button>
            <el-button
              @click.native.prevent="remove(scope, tableData)"
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
import { getPages, deletePage } from '@/api'
import moment from 'dayjs'
import toast from '@/utils/toast'

export default {
    data() {
        return {
            tableData: [],
        }
    },
    components: { User, AddPage },
    mounted() {
        this.getPages()
    },
    methods: {

        remove(rowData, tableData) {
            console.log(rowData)
            this.$confirm('确认删除吗', '提示', {
                type: 'warning',
                async callback(txt) {
                    if (txt === 'confirm') {
                        const { data: deleteData } = await deletePage({ id: rowData.row._id })
                        if (deleteData.data.ok) {
                            toast('删除成功', 'success')
                        }
                        tableData.splice(rowData.$index, 1)
                    }
                }, 
            })
        },

        edit(rowData) {
            this.$router.push({ name: 'Home', params: { id: rowData.row._id } })
        },
        async getPages() {
            const { data: pagesData } = await getPages({ isDel: false })
            if (pagesData.code === 200) {
                pagesData.data.forEach(item => {
                    item.created = moment(item.created || '').format('YYYY-MM-DD HH:mm:ss')
                })
                this.tableData = pagesData.data
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.pages {
  .user-component {
    position: absolute;
    right: 20px;
    top: 58px;
  }
}
</style>