<template>
  <a-layout id="user-app">
    <slider :collapsed="collapsed"/>
    <a-layout>
      <header-component :collapsed="collapsed" :toggleCollaped="toggleCollaped"/>

      <a-layout-content class="content">
        <router-view/>
        <!-- set progressbar -->
        <!-- <vue-progress-bar></vue-progress-bar> -->
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { HeaderComponent } from '@/components/header'
import { Slider } from '@/components/slider'

export default {
  components: { HeaderComponent, Slider },
  data () {
    return {
      collapsed: true,
      isAdmin: false
    }
  },
  computed: {},
  mounted () {},
  methods: {
    toggleCollaped () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
<style lang="scss" scoped>
#user-app {
  min-height: 100%;
  height: auto;
}
.breadcrumb {
  margin: 10px 16px;
  padding: 24px;
  background: #fff;
  max-height: 70px;
}
.content {
  margin: 16px;
  padding: 24px;
  background: #fff;
}
</style>
