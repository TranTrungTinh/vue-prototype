<template>
  <a-popover
    trigger="click"
    placement="bottomRight"
    v-model="visible"
  >
    <div slot="content">
        <div><a href="#">Profile</a></div>
        <a-divider/>
        <div><a href="#">Setting</a></div>
        <div><a href="#">Help & Support</a></div>
        <a-divider/>
        <div><a href="#">Log out</a></div>
    </div>
    <a-avatar src="https://randomuser.me/api/portraits/women/12.jpg" @click="open"/>
  </a-popover>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
    }
  },
  methods: {
    open() {
        this.visible = true
    },
    hide() {
      this.visible = false
    }
  },
}
</script>
<style>

</style>
