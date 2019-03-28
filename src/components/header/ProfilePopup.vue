<template>
  <a-popover trigger="click" placement="bottomRight" v-model="visible">
    <div slot="content">
      <div class="profile-item">
        <a href="#">Profile</a>
      </div>
      <div class="small-divider"></div>
      <div class="profile-item">
        <a href="#">Setting</a>
      </div>
      <div class="profile-item">
        <a href="#">Help & Support</a>
      </div>
      <div class="small-divider"></div>
      <div class="profile-item" @click="logout">
        <a href="#">Log out</a>
      </div>
    </div>
    <a-avatar class="user-profile" src="https://randomuser.me/api/portraits/women/12.jpg" @click="open"/>
  </a-popover>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      visible: false
    }
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters['auth/currentUser']`
      user: 'auth/currentUser'
    })
  },
  methods: {
    ...mapActions({
      // map `this.logout` to `this.$store.dispatch['auth/logout']`
      logout: 'auth/logout'
    }),
    open () {
      this.visible = true
    }
  }
}
</script>
<style lang="scss" scoped>
.user-profile {
  cursor: pointer;
}
.profile-item {
  & a {
    color: #555;
  }

  & a:hover {
    color: #1dbf73;
  }
}
.small-divider {
  border-top: 1px solid #ddd;
  margin: 5px 0;
}
</style>
