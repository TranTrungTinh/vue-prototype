<template>
  <a-layout-header class="header">
    <a-row>
      <a-col :span="4">
        <a-icon class="header-trigger--desktop" type="menu-unfold" @click="onToggle"/>
        <a-icon class="header-trigger--phone" type="menu-unfold" @click="onDraw"/>
        <drawer-left ref="drawer"/>
      </a-col>
      <a-col :span="20">
        <div class="header-user">
          <div v-if="user">
            <span>
              <profile-popup/>
              <span class="header-user-name">{{ user.username }}</span>
            </span>
            <a-badge count="5">
              <span class="fs-24">
                <notification/>
              </span>
            </a-badge>
            <span class="header-icon fs-24">
              <a-icon type="setting"/>
            </span>
          </div>
          <a-icon type="loading" v-else/>
        </div>
      </a-col>
    </a-row>
  </a-layout-header>
</template>
<script>
import { mapGetters } from 'vuex'

import Notification from './Notification.vue'
import ProfilePopup from './ProfilePopup.vue'
import DrawerLeft from './DrawerLeft.vue'

export default {
  components: { Notification, ProfilePopup, DrawerLeft },
  props: {
    toggleCollaped: { type: Function }
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters['auth/currentUser']`
      user: 'auth/currentUser'
    })
  },
  methods: {
    onToggle() {
      this.toggleCollaped();
    },
    onDraw() {
      this.$refs.drawer.showDrawer();
    }
  }
}
</script>
<style src="./Header.scss" lang="scss" scoped></style>
