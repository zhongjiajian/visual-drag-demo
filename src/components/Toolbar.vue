<template>
  <div>
    <div class="toolbar">
      <el-button @click="undo">撤消</el-button>
      <el-button @click="redo">重做</el-button>
      <label for="input" class="insert">插入图片</label>
      <input type="file" @change="handleFileChange" id="input" hidden />
      <el-button @click="preview" style="margin-left: 10px">预览</el-button>
      <el-button @click="save">保存</el-button>
      <el-button @click="clearCanvas">清空画布</el-button>
      <el-button @click="compose" :disabled="!areaData.components.length"
        >组合</el-button
      >
      <el-button
        @click="decompose"
        :disabled="
          !curComponent ||
          curComponent.isLock ||
          curComponent.component != 'Group'
        "
        >拆分</el-button
      >

      <el-button @click="lock" :disabled="!curComponent || curComponent.isLock"
        >锁定</el-button
      >
      <el-button
        @click="unlock"
        :disabled="!curComponent || !curComponent.isLock"
        >解锁</el-button
      >
      <div class="canvas-config">
        <span>布局</span>
        <div style="display:inline-block;width:85px;margin-left:10px;">
          <el-select v-model="canvasStyleData.layoutMode" placeholder="请选择" @change="layoutModeChange">

            <el-option
              v-for="item in layouts"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="canvas-config" v-if="canvasStyleData.layoutMode==='1'">
        <span>画布大小</span>
        <input v-model="canvasStyleData.width" />
        <span>*</span>
        <input v-model="canvasStyleData.height" />
      </div>
      <div class="canvas-config"  v-if="canvasStyleData.layoutMode==='1'">
        <span>画布比例</span>
        <input type="number" v-model="canvasStyleData.scale" /> %
      </div>
      <span class="line"></span>
      <el-button @click="showScript" size="mini" type="text">添加script</el-button>
      <span class="line"></span>
      <el-button @click="update" size="mini" type="text">保存编辑</el-button>
      <span class="line"></span>
      <el-popover placement="bottom" width="200" trigger="hover">
        <div>
          <div>
            <span>标题：{{ pageInfo.title }}</span>
            <span></span>
          </div>
          <div>
            <span>创建人：{{ pageInfo.uname }}</span>
            <span></span>
          </div>
        </div>
        <i slot="reference" class="el-icon-info icon-info"></i>
      </el-popover>
      <span class="line"></span>
      <User class="user-component" />
    </div>

    <!-- 预览 -->
    <Preview v-model="isShowPreview" @change="handlePreviewChange" />
    <!-- script -->
    <el-dialog title="脚本" :visible.sync="scriptVisible" :close-on-click-modal="false"  width="880px" @close="scriptDialogClose">
      <div id="container" ></div>
    </el-dialog>
  </div>
</template>

<script>
import generateID from '@/utils/generateID'
import toast from '@/utils/toast'
import { mapState } from 'vuex'
import Preview from '@/components/Editor/Preview'
import { commonStyle, commonAttr } from '@/custom-component/component-list'
import eventBus from '@/utils/eventBus'
import User from '@/components/User'
import { updatePage } from '@/api'

import 'monaco-editor/esm/vs/editor/browser/controller/coreCommands.js'
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js'

export default {
    components: { Preview, User },
    props: {
        pageInfo: {
            type: Object,
        },
    },
    data() {
        return {
            isShowPreview: false,
            needToChange: [
                'top',
                'left',
                'width',
                'height',
                'fontSize',
                'borderWidth',
            ],
            timer: null,
            layouts: [
                {
                    value: '1',
                    label: '固定',
                },
                {
                    value: '2',
                    label: 'auto',
                },
            ],
            scriptVisible: false,
        }
    },
    computed: {
        ...mapState([
            'componentData',
            'canvasStyleData',
            'areaData',
            'curComponent',
        ]),
        scriptData: {
            get() {
                return this.$store.state.scriptData
            },
            set(v) {
                this.$store.commit('setScriptData', v)
            },
        },

    },
    created() {
        eventBus.$on('preview', this.preview)
        eventBus.$on('save', this.save)
        eventBus.$on('clearCanvas', this.clearCanvas)
    },
    mounted() {
        this.initMonacoEnvironment()
    },
    methods: {
        lock() {
            this.$store.commit('lock')
        },

        unlock() {
            this.$store.commit('unlock')
        },

        compose() {
            this.$store.commit('compose')
            this.$store.commit('recordSnapshot')
        },

        decompose() {
            this.$store.commit('decompose')
            this.$store.commit('recordSnapshot')
        },

        undo() {
            this.$store.commit('undo')
        },

        redo() {
            this.$store.commit('redo')
        },

        handleFileChange(e) {
            const file = e.target.files[0]
            if (!file.type.includes('image')) {
                toast('只能插入图片')
                return
            }

            const reader = new FileReader()
            reader.onload = (res) => {
                const fileResult = res.target.result
                const img = new Image()
                img.onload = () => {
                    this.$store.commit('addComponent', {
                        component: {
                            ...commonAttr,
                            id: generateID(),
                            component: 'Picture',
                            label: '图片',
                            icon: '',
                            propValue: fileResult,
                            style: {
                                ...commonStyle,
                                top: 0,
                                left: 0,
                                width: img.width,
                                height: img.height,
                            },
                        },
                    })

                    this.$store.commit('recordSnapshot')

                    // 修复重复上传同一文件，@change 不触发的问题
                    document.querySelector('#input').setAttribute('type', 'text')
                    document.querySelector('#input').setAttribute('type', 'file')
                }

                img.src = fileResult
            }

            reader.readAsDataURL(file)
        },

        preview() {
            this.isShowPreview = true
            this.$store.commit('setEditMode', 'preview')
        },

        save() {
            localStorage.setItem('canvasData', JSON.stringify(this.componentData))
            localStorage.setItem('canvasStyle', JSON.stringify(this.canvasStyleData))
            this.$message.success('保存成功')
        },

        clearCanvas() {
            this.$store.commit('setCurComponent', { component: null, index: null })
            this.$store.commit('setComponentData', [])
            this.$store.commit('recordSnapshot')
        },

        handlePreviewChange() {
            this.$store.commit('setEditMode', 'edit')
        },
        // 布局切换 auto布局隐藏画布大小和画布比例，画布宽高设置为auto
        layoutModeChange(type) {
            if (type === '1') {
                console.log('layoutModeChange', type)
            } else {
                console.log('layoutModeChange', type)
            }
        },
        update() {
            let that = this
            this.$confirm('确定保存么', '提示', {
                type: 'info',
                closeOnClickModal: false,
                async callback(type) {
                    if (type === 'confirm') {
                        const { data: updatePageData } = await updatePage({
                            id: that.pageInfo._id,
                            content: JSON.stringify({
                                canvasStyle: that.canvasStyleData,
                                canvasData: that.componentData,
                                scriptData: that.scriptData,
                            }),
                        })
                        if (updatePageData.code === 200) {
                            toast('保存成功', 'success')
                        }
                    }
                },
            })
        },
        showScript() {
            this.scriptVisible = true
            this.$nextTick(this.initEditor)
        },
        initMonacoEnvironment() {
            // eslint-disable-next-line no-restricted-globals
            self.MonacoEnvironment = {
                getWorkerUrl(moduleId, label) {
                    if (label === 'typescript' || label === 'javascript') {
                        return './ts.worker.bundle.js'
                    }
                    return './editor.worker.bundle.js'
                },
               
            }
        },
        initEditor() {
            if (!this.editor) {
                this.editor = monaco.editor.create(document.getElementById('container'), {
                    /* eslint-disable no-tabs */
                    value: [this.scriptData].join('\n'),
                    language: 'javascript',
                    theme: 'vs-dark',
                })
            } else {
                const value = [this.scriptData].join('\n')
                this.editor.setValue(value)
            }
        },
        scriptDialogClose() {
            this.scriptData = this.editor.getValue()
            console.log(this.scriptData)
        },
    },

}
</script>

<style lang="scss" scoped>
.toolbar {
  height: 64px;
  padding: 0 10px;
  display: flex;
  white-space: nowrap;
  align-items: center;
  overflow-x: auto;
  background: #fff;
  border-bottom: 1px solid #ddd;
  .line {
    height: 20px;
    border-right: 1px solid #ccc;
    margin: 0 20px;
  }
  .canvas-config {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #606266;

    input {
      width: 50px;
      margin-left: 10px;
      outline: none;
      padding: 0 5px;
      border: 1px solid #ddd;
      color: #606266;
    }

    span {
      margin-left: 10px;
    }
  }

  .insert {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
    margin-left: 10px;

    &:active {
      color: #3a8ee6;
      border-color: #3a8ee6;
      outline: 0;
    }

    &:hover {
      background-color: #ecf5ff;
      color: #3a8ee6;
    }
  }
  .icon-info {
    font-size: 24px;
    color: #409eff;
  }
}
 #container{
    height: 480px;
  }
</style>
