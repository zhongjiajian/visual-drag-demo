<!-- TODO: 这个页面后续将用 JSX 重构 -->
<template>
  <div class="attr-list">
    <el-form>
      <el-form-item
        v-for="({ key, label }, index) in styleKeys"
        :key="index"
        :label="label"
      >
        <el-color-picker
          v-if="key == 'borderColor'"
          v-model="curComponent.style[key]"
        ></el-color-picker>
        <el-color-picker
          v-else-if="key == 'color'"
          v-model="curComponent.style[key]"
        ></el-color-picker>
        <el-color-picker
          v-else-if="key == 'backgroundColor'"
          v-model="curComponent.style[key]"
        ></el-color-picker>
        <el-select
          v-else-if="selectKey.includes(key)"
          v-model="curComponent.style[key]"
        >
          <template v-if="key == 'textAlign'">
            <el-option
              v-for="item in textAlignOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </template>
          <template v-else-if="key == 'borderStyle'">
            <el-option
              v-for="item in borderStyleOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </template>
          <template v-else>
            <el-option
              v-for="item in verticalAlignOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </template>
        </el-select>
        <el-input
          type="number"
          v-else
          v-model.number="curComponent.style[key]"
        />
      </el-form-item>
      <el-form-item
        label="内容"
        v-if="curComponent && !excludes.includes(curComponent.component)"
      >
        <i class="el-icon-full-screen icon-magnify" @click="magnifyContent"></i>
        <el-input type="textarea" v-model="curComponent.propValue" />
      </el-form-item>
      <el-form-item label="拓展样式" v-if="curComponent">
        <i
          class="el-icon-full-screen icon-magnify"
          @click="magnifyExpandStyle"
        ></i>
        <el-input type="textarea" v-model="curComponent.expandStyle" />
      </el-form-item>
    </el-form>

    <!-- 内容textarea放大 -->
    <el-dialog
      title="内容"
      :visible.sync="contentMagnifyVisible"
      :close-on-click-modal="false"
      width="1100px"
      fullscreen
      @close="htmlDialogClose"
    >
      <div id="html-editor-container"></div>
    </el-dialog>
    <!-- 拓展样式textarea放大 -->
    <el-dialog
      title="拓展样式"
      :visible.sync="expandStyleMagnifyVisible"
      :close-on-click-modal="false"
      width="880px"
      @close="cssDialogClose"
    >
      <div id="css-editor-container"></div>
    </el-dialog>
  </div>
</template>

<script>
import attrNameData from '@/utils/attrNameData'

import 'monaco-editor/esm/vs/editor/browser/controller/coreCommands.js'
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
// import 'monaco-editor/esm/vs/language/css/monaco.contribution.js'
// import 'monaco-editor/esm/vs/basic-languages/css/css.contribution.js'
import 'monaco-editor/esm/vs/language/html/monaco.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/html/html.contribution.js'
import 'monaco-editor/esm/vs/language/json/monaco.contribution.js'

export default {
    data() {
        return {
            excludes: ['Picture', 'Group'], // 这些组件不显示内容
            textAlignOptions: [
                {
                    label: '左对齐',
                    value: 'left',
                },
                {
                    label: '居中',
                    value: 'center',
                },
                {
                    label: '右对齐',
                    value: 'right',
                },
            ],
            borderStyleOptions: [
                {
                    label: '实线',
                    value: 'solid',
                },
                {
                    label: '虚线',
                    value: 'dashed',
                },
            ],
            verticalAlignOptions: [
                {
                    label: '上对齐',
                    value: 'top',
                },
                {
                    label: '居中对齐',
                    value: 'middle',
                },
                {
                    label: '下对齐',
                    value: 'bottom',
                },
            ],
            selectKey: ['textAlign', 'borderStyle', 'verticalAlign'],
            attrNameData,
            contentMagnifyVisible: false,
            expandStyleMagnifyVisible: false,
        }
    },
    mounted() {
        this.initMonacoEnvironment()
    },
    computed: {
        styleKeys() {
            if (this.$store.state.curComponent) {
                const curComponentStyleKeys = Object.keys(
                    this.$store.state.curComponent.style,
                )
                return this.attrNameData.filter((item) => curComponentStyleKeys.includes(item.key))
            }
            return []
        },
        curComponent() {
            return this.$store.state.curComponent
        },
    },
    methods: {
        magnifyContent() {
            this.contentMagnifyVisible = true
            this.$nextTick(this.initHtmlEditor)
        },
        magnifyExpandStyle() {
            this.expandStyleMagnifyVisible = true
            this.$nextTick(this.initCssEditor)
        },
        initMonacoEnvironment() {
            if (!window.MonacoEnvironment) {
                window.MonacoEnvironment = {
                    getWorkerUrl(moduleId, label) {
                        if (label === 'json') {
                            return './json.worker.bundle.js'
                        }
                        if (label === 'css' || label === 'scss' || label === 'less') {
                            return './css.worker.bundle.js'
                        }
                        if (
                            label === 'html'
                            || label === 'handlebars'
                            || label === 'razor'
                        ) {
                            return './html.worker.bundle.js'
                        }
                        if (label === 'typescript' || label === 'javascript') {
                            return './ts.worker.bundle.js'
                        }
                        return './editor.worker.bundle.js'
                    },
                }
            }
        },
        initCssEditor() {
            if (!this.cssEditor) {
                this.cssEditor = monaco.editor.create(
                    document.getElementById('css-editor-container'),
                    {
                        value: [this.curComponent.expandStyle].join('\n'),
                        language: 'json',
                        theme: 'vs-dark',
                        automaticLayout: true,
                    },
                )
            } else {
                const value = [this.curComponent.expandStyle].join('\n')
                this.cssEditor.setValue(value)
            }
        },
        cssDialogClose() {
            this.curComponent.expandStyle = this.cssEditor.getValue()
        },
        initHtmlEditor() {
            if (!this.htmlEditor) {
                this.htmlEditor = monaco.editor.create(
                    document.getElementById('html-editor-container'),
                    {
                        value: [this.curComponent.propValue.replaceAll('<br>', '\n')].join('\n'),
                        language: 'html',
                        theme: 'vs-dark',
                        automaticLayout: true,
                    },
                )
                window.htmlEditor = this.htmlEditor
            } else {
                const value = [this.curComponent.propValue.replaceAll('<br>', '\n')].join('\n')
                this.htmlEditor.setValue(value)
            }
        },
        htmlDialogClose() {
            this.curComponent.propValue = this.htmlEditor.getValue().replaceAll('\n', '<br>')
        },
    },
}
</script>

<style lang="scss" scoped>
.attr-list {
  overflow: auto;
  padding: 20px;
  padding-top: 0;
  height: 100%;
  .icon-magnify {
    cursor: pointer;
  }
}
#html-editor-container{
  height: 660px;
}
#css-editor-container {
  height: 480px;
}
</style>
