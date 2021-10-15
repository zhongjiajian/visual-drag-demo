<template>
  <div class="canvas-container">
            <div class="canvas"
                 :style="canvasStyleData.layoutMode==='1'?{
                    width: canvasStyleData.width + 'px',
                    height: canvasStyleData.height + 'px',
                }:{
                    width: '100%',
                    height: 'auto',
                }"
            >
                <ComponentWrapper
                    v-for="(item, index) in componentData"
                    :key="index"
                    :config="item"
                />
            </div>
        </div>
</template>

<script>
import ComponentWrapper from '@/components/Editor/ComponentWrapper'
import generateID from '@/utils/generateID'

import { getPageInfo } from '@/api'

export default {
    components: { ComponentWrapper },
    data() {
        return {
            canvasStyleData: {},
            componentData: [],

        }
    },
    created() {
        this.initPage()
    },
    methods: {
        async initPage() {
            const pageId = this.$router.history.current.params.id
            if (pageId) {
                const { data: pageInfoData } = await getPageInfo(pageId)
                if (pageInfoData.code === 200) {
                    document.title = pageInfoData.data.title
                    window.setData = null
                    if (pageInfoData.data.content) {
                        const content = JSON.parse(pageInfoData.data.content)
                        if (content.scriptData) {
                            const script = document.createElement('script')
                            script.textContent = content.scriptData
                            document.head.appendChild(script)
                        }
                        if (window.setData) {
                            content.canvasData = JSON.stringify(content.canvasData)
                            for (let key in window.setData) {
                                if (Object.prototype.hasOwnProperty.call(window.setData, key)) {
                                    const regexp = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g')
                                    content.canvasData = content.canvasData.replace(regexp, window.setData[key] + '')
                                }
                            }
                            content.canvasData = JSON.parse(content.canvasData)
                        }
                        this.canvasStyleData = content.canvasStyle
                        this.componentData = this.resetID(content.canvasData)
                    }
                }
            }
        },
        resetID(data) {
            data.forEach(item => {
                item.id = generateID()
            })

            return data
        },
    },

}
</script>