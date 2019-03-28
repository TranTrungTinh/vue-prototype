<template>
  <a-layout-sider v-model="collapsed">
    <div class="logo"/>
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[1]">
      <a-menu-item v-for="item in showNavSliders" :key="item.id">
        <router-link :to="item.link">
          <a-icon :type="item.icon"/>
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
export default {
  props: {
    menus: [],
    collapsed: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false }
  },
  data () {
    return {
      navSliders: {
        admin: [
          { id: 1, icon: 'pie-chart', title: 'Report', link: '/admin' },
          { id: 2, icon: 'user', title: 'Profile', link: '/admin/profile' },
          {
            id: 3,
            icon: 'dashboard',
            title: 'Dashboard',
            link: '/admin/dashboard'
          }
        ],
        worker: [
          { id: 1, icon: 'dashboard', title: 'Dashboard', link: '/app' },
          { id: 2, icon: 'user', title: 'Profile', link: '/app/profile' },
          { id: 3, icon: 'plus', title: 'Request', link: '/app/add-request' }
        ]
      }
    }
  },
  computed: {
    showNavSliders () {
      if (this.isAdmin) return this.navSliders.admin
      return this.navSliders.worker
    }
  }
}
</script>
<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
