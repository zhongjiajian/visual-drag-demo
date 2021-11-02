<template>
  <div class="pages">
    <User class="user-component" />
    <AddPage @addSuccess="getPages" />
    <div style="margin-top: 16px;">
      <el-tabs v-model="activeName" type="border-card" tabPosition="left" @tab-click="tabHandleClick">
        <el-tab-pane label="stable" name="first">
          <el-table
            :data="tableData"
            style="width: 100%"
            max-height="500"
            border
          >
            <el-table-column
              align="center"
              fixed
              show-overflow-tooltip
              label="标题"
              width="250"
            >
              <template slot-scope="scope">
                <el-button
                  type="text"
                  @click.native.prevent="viewDetail(scope,'stable')"
                  >{{ scope.row.title }}</el-button
                >
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="prodId"
              label="生产编号"
              width="250"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="created"
              label="创建时间"
              width="250"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="uid.name"
              label="创建人"
              width="120"
            >
            </el-table-column>
            <el-table-column
              align="center"
              show-overflow-tooltip
              prop="note"
              label="备注"
            >
            </el-table-column>
            <el-table-column
              align="center"
              fixed="right"
              label="操作"
              width="160"
            >
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
                <el-button
                  @click.native.prevent="publish(scope, tableData)"
                  type="text"
                >
                  发布
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="prod" name="second">
          <el-table
            :data="prodTableData"
            style="width: 100%"
            max-height="500"
            border
          >
            <el-table-column
              align="center"
              fixed
              show-overflow-tooltip
              label="标题"
              width="250"
            >
              <template slot-scope="scope">
                <el-button
                  type="text"
                  @click.native.prevent="viewDetail(scope,'prod')"
                  >{{ scope.row.title }}</el-button
                >
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="_id"
              label="生产编号"
              width="250"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="created"
              label="创建时间"
              width="250"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="uid.name"
              label="创建人"
              width="120"
            >
            </el-table-column>
            <el-table-column
              align="center"
              show-overflow-tooltip
              prop="note"
              label="备注"
            >
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import AddPage from '@/components/AddPage'
import User from '@/components/User'
import { getPages, getProdPages, deletePage, publishPage } from '@/api'
import moment from 'dayjs'
import toast from '@/utils/toast'

export default {
    data() {
        return {
            activeName: 'first',
            tableData: [],
            prodTableData: [],
        }
    },
    components: { User, AddPage },
    mounted() {
        this.getPages()
        this.getProdPages()
    },
    methods: {
        viewDetail(rowData, env) {
            let { href } = this.$router.resolve({ path: `/Item/${env}/${rowData.row._id}` })
            window.open(href, '_blank')
        },
        edit(rowData) {
            this.$router.push({ name: 'Home', params: { id: rowData.row._id } })
        },
        remove(rowData, tableData) {
            this.$confirm('确认删除吗', '提示', {
                type: 'warning',
                async callback(txt) {
                    if (txt === 'confirm') {
                        const { data: deleteData } = await deletePage({
                            id: rowData.row._id,
                        })
                        if (deleteData.data.ok) {
                            toast('删除成功', 'success')
                        }
                        tableData.splice(rowData.$index, 1)
                    }
                },
            })
        },
        publish(rowData) {
            console.log(rowData)
            this.$confirm('确认发布吗', '提示', {
                type: 'warning',
                async callback(txt) {
                    if (txt === 'confirm') {
                        const { data: publishData } = await publishPage({
                            id: rowData.row._id,
                        })
                        if (publishData.code == 200) {
                            toast('发布成功', 'success')
                            this.getPages()
                        }
                    }
                },
            })
        },
        async getPages() {
            const { data: pagesData } = await getPages({ isDel: false })
            if (pagesData.code === 200) {
                pagesData.data.forEach((item) => {
                    item.created = moment(item.created || '').format(
                        'YYYY-MM-DD HH:mm:ss',
                    )
                })
                this.tableData = pagesData.data
            }
        },
        async getProdPages() {
            const { data: pagesData } = await getProdPages({})
            if (pagesData.code === 200) {
                pagesData.data.forEach((item) => {
                    item.created = moment(item.created || '').format(
                        'YYYY-MM-DD HH:mm:ss',
                    )
                })
                this.prodTableData = pagesData.data
            }
        },
        tabHandleClick(e) {
            if (e.label === 'stable') this.getPages()
            else this.getProdPages()
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