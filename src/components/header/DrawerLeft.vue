<template>
<div class="slider--phone">
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
</div>
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
<style lang="scss" scoped>
@import '@/styles/app.scss';

.slider--phone {
    display: none;
    @include respond(phone) {
        display: block
    }
}
</style>


