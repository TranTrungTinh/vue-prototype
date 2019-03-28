<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-row>
      <a-col :span="12">
        <a-icon class="trigger" type="menu-unfold" @click="this.toggleCollaped"/>
      </a-col>
      <a-col :span="12">
        <div class="header-user">
          <div v-if="user">
            <span>
              <!-- <a-avatar src="https://randomuser.me/api/portraits/women/12.jpg" @click="openProfilePopup"/> -->
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

export default {
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
  components: { Notification, ProfilePopup }
}
</script>
<style src="./Header.scss" lang="scss" scoped></style>
