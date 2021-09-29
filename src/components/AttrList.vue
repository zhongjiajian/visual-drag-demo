<!-- TODO: 这个页面后续将用 JSX 重构 -->
<template>
    <div class="attr-list">
        <el-form>
            <el-form-item v-for="({key,label}, index) in styleKeys" :key="index" :label="label">
                <el-color-picker v-if="key == 'borderColor'" v-model="curComponent.style[key]"></el-color-picker>
                <el-color-picker v-else-if="key == 'color'" v-model="curComponent.style[key]"></el-color-picker>
                <el-color-picker v-else-if="key == 'backgroundColor'" v-model="curComponent.style[key]"></el-color-picker>
                <el-select v-else-if="selectKey.includes(key)" v-model="curComponent.style[key]">
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
                <el-input type="number" v-else v-model.number="curComponent.style[key]" />
            </el-form-item>
            <el-form-item label="内容" v-if="curComponent && !excludes.includes(curComponent.component)">
                <i class="el-icon-full-screen icon-magnify" @click="magnifyContent"></i>
                <el-input type="textarea" v-model="curComponent.propValue" />
            </el-form-item>
            <el-form-item label="拓展样式" v-if="curComponent">
                <i class="el-icon-full-screen icon-magnify" @click="magnifyExpandStyle"></i>
                <el-input type="textarea" v-model="curComponent.expandStyle" />
            </el-form-item>
        </el-form>

        <!-- 内容textarea放大 -->
        <el-dialog title="内容" :visible.sync="contentMagnifyVisible" :close-on-click-modal="false"  width="60%">
             <el-input type="textarea"  :autosize="{ minRows: 20}" v-model="curComponent.propValue" />
        </el-dialog>
        <!-- 拓展样式textarea放大 -->
         <el-dialog title="拓展样式" :visible.sync="expandStyleMagnifyVisible" :close-on-click-modal="false"  width="60%">
             <el-input type="textarea"  :autosize="{ minRows: 20}" v-model="curComponent.expandStyle" placeholder="严格JSON格式" />
        </el-dialog>
    </div>
</template>

<script>
import attrNameData from '@/utils/attrNameData'

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
    computed: {
        styleKeys() {
            if (this.$store.state.curComponent) {
                const curComponentStyleKeys = Object.keys(this.$store.state.curComponent.style)
                return this.attrNameData.filter(item => curComponentStyleKeys.includes(item.key))
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
        },
        magnifyExpandStyle() {
            this.expandStyleMagnifyVisible = true
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
    .icon-magnify{
        cursor: pointer;
    }
}
</style>
