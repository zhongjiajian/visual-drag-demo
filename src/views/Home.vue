<template>
    <div class="home">

        <Toolbar :pageInfo="pageInfo" />

        <main>
            <!-- 左侧组件列表 -->
            <section class="left">
                <ComponentList />
            </section>
            <!-- 中间画布 -->
            <section class="center">
                <div class="content" @drop="handleDrop" @dragover="handleDragOver"
                @mousedown="handleMouseDown" @mouseup="deselectCurComponent">
                    <Editor />
                </div>
            </section>
            <!-- 右侧属性列表 -->
            <section class="right">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="属性" name="attr">
                        <AttrList v-if="curComponent" />
                        <p v-else class="placeholder">请选择组件</p>
                    </el-tab-pane>
                    <el-tab-pane label="动画" name="animation">
                        <AnimationList v-if="curComponent" />
                        <p v-else class="placeholder">请选择组件</p>
                    </el-tab-pane>
                    <el-tab-pane label="事件" name="events">
                        <EventList v-if="curComponent" />
                        <p v-else class="placeholder">请选择组件</p>
                    </el-tab-pane>
                </el-tabs>
            </section>
        </main>
    </div>
</template>

<script>
import Editor from '@/components/Editor/index'
import ComponentList from '@/components/ComponentList' // 左侧列表组件
import AttrList from '@/components/AttrList' // 右侧属性列表
import AnimationList from '@/components/AnimationList' // 右侧动画列表
import EventList from '@/components/EventList' // 右侧事件列表
import componentList from '@/custom-component/component-list' // 左侧列表数据
import Toolbar from '@/components/Toolbar'

import { deepCopy } from '@/utils/utils'
import { mapState } from 'vuex'
import generateID from '@/utils/generateID'
import { listenGlobalKeyDown } from '@/utils/shortcutKey'

import { getPageInfo } from '@/api'

export default {
    components: { Editor, ComponentList, AttrList, AnimationList, EventList, Toolbar },
    data() {
        return {
            activeName: 'attr',
            reSelectAnimateIndex: undefined,
            pageInfo: {
                title: '1',
                uname: '',
            },
        }
    },
    computed: mapState([
        'componentData',
        'curComponent',
        'isClickComponent',
        'canvasStyleData',
        'editor',
    ]),
    created() {
        this.initStore()
        this.initPage()
        // 全局监听按键事件
        listenGlobalKeyDown()
    },
    methods: {
        initStore() {
            this.$store.commit('setCanvasStyle', { 
                layoutMode: '1', 
                width: 1200,
                height: 740,
                scale: 100,
            })
            this.$store.commit('setComponentData', [])
            this.$store.commit('setScriptData', '')
        },
        restore() {
            // 用保存的数据恢复画布
            if (localStorage.getItem('canvasStyle')) {
                this.$store.commit('setCanvasStyle', JSON.parse(localStorage.getItem('canvasStyle')))
            }
            if (localStorage.getItem('canvasData')) {
                this.$store.commit('setComponentData', this.resetID(JSON.parse(localStorage.getItem('canvasData'))))
            }
        },

        resetID(data) {
            data.forEach(item => {
                item.id = generateID()
            })

            return data
        },

        handleDrop(e) {
            e.preventDefault()
            e.stopPropagation()
            const index = e.dataTransfer.getData('index')
            const rectInfo = this.editor.getBoundingClientRect()
            if (index) {
                const component = deepCopy(componentList[index])
                component.style.top = e.clientY - rectInfo.y
                component.style.left = e.clientX - rectInfo.x
                component.id = generateID()
                this.$store.commit('addComponent', { component })
                this.$store.commit('recordSnapshot')
            }
        },

        handleDragOver(e) {
            e.preventDefault()
            e.dataTransfer.dropEffect = 'copy'
        },

        handleMouseDown() {
            this.$store.commit('setClickComponentStatus', false)
        },

        deselectCurComponent(e) {
            if (!this.isClickComponent) {
                this.$store.commit('setCurComponent', { component: null, index: null })
            }

            // 0 左击 1 滚轮 2 右击
            if (e.button != 2) {
                this.$store.commit('hideContextMenu')
            }
        },
        async initPage() {
            let that = this
            const pageId = this.$router.history.current.params.id
            if (pageId) {
                const { data: pageInfoData } = await getPageInfo(pageId)
                if (pageInfoData.code === 200) {
                    document.title = pageInfoData.data.title
                    this.pageInfo = {
                        title: pageInfoData.data.title,
                        uname: pageInfoData.data.uid.name,
                        _id: pageInfoData.data._id,
                    }
                    if (pageInfoData.data.content) {
                        const content = JSON.parse(pageInfoData.data.content)
                        if (content.scriptData) this.$store.commit('setScriptData', content.scriptData)
                        this.$store.commit('setCanvasStyle', content.canvasStyle)
                        this.$store.commit('setComponentData', this.resetID(content.canvasData))
                    }
                    if (localStorage.getItem('canvasData') || localStorage.getItem('canvasStyle')) {
                        this.$confirm('检测到本地缓存，是否使用', '提示', {
                            type: 'info',
                            closeOnClickModal: false,
                            callback(type) {
                                if (type === 'confirm') that.restore()
                                localStorage.removeItem('canvasStyle')
                                localStorage.removeItem('canvasData')
                            },
                        })
                    }
                }
            }
        },
    },
}
</script>

<style lang="scss">
.home {
    height: 100vh;
    background: #fff;
    overflow: hidden;
    main {
        height: calc(100% - 64px);
        position: relative;

        .left {
            position: absolute;
            height: 100%;
            width: 200px;
            left: 0;
            top: 0;
            padding-top: 10px;
        }

        .right {
            position: absolute;
            height: 100%;
            width: 262px;
            right: 0;
            top: 0;
        }

        .center {
            margin-left: 200px;
            margin-right: 262px;
            background: #f5f5f5;
            height: 100%;
            overflow: auto;
            padding: 20px;

            .content {
                width: 100%;
                height: 100%;
                overflow: auto;
            }
        }
    }

    .placeholder {
        text-align: center;
        color: #333;
    }
}
</style>
