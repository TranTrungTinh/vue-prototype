<template>
<a-drawer placement="left"
    title="MENU"
    :closable="false"
    @close="onClose"
    :visible="visible"
>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
</a-drawer>
</template>
<script>
export default {
    data () {
        return {
            visible: false
        }
    },
    methods: {
        showDrawer() {
            this.visible = true
        },
        onClose() {
            this.visible = false
        }
    }
}
</script>


