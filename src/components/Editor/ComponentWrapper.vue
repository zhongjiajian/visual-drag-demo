<template>
    <div @click="handleClick">
        <component
            class="component"
            :is="config.component"
            :style="getComponentStyle(config.style,config.expandStyle)"
            :propValue="config.propValue"
            :element="config"
        />
    </div>
</template>

<script>
import { getStyle } from '@/utils/style'
import runAnimation from '@/utils/runAnimation'
import { mixins } from '@/utils/events'

export default {
    props: {
        config: {
            type: Object,
            require: true,
        },
    },
    mounted() {
        runAnimation(this.$el, this.config.animations)
    },
    mixins: [mixins],
    methods: {
        getComponentStyle(style, expandStyle) {
            const result = getStyle(style)
            if (!expandStyle || !expandStyle.trim()) return result
            try {
                let expandStyleJson = JSON.parse(expandStyle)
                if (typeof expandStyleJson === 'object') return { ...result, ...expandStyleJson }
                return result
            } catch (err) {
                console.log(err)
                return result
            }
        },
        handleClick() {
            const events = this.config.events
            Object.keys(events).forEach(event => {
                this[event](events[event])
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.component {
    position: absolute;
}
</style>