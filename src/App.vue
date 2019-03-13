<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      v-model="collapsed"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[1]">
        <a-menu-item v-for="item in navSliders" :key="item.id" >
          <router-link :to="item.link">
            <a-icon :type="item.icon" />
            <span>{{ item.title }}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row>
          <a-col :span="12">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="()=> collapsed = !collapsed"
            />
          </a-col>
          <a-col :span="12">
            <div class="header-user">
              <div v-if="user.name">
                <span>
                  <!-- <a-avatar src="https://randomuser.me/api/portraits/women/12.jpg" @click="openProfilePopup"/> -->
                  <profile-popup />
                  <span class="header-user-name">{{ user.name }}</span>
                </span>
                <a-badge count="5">
                  <span class="fs-24">
                    <notification />
                  </span>
                </a-badge>
                <span class="header-icon fs-24"><a-icon type="setting" /></span>
              </div>
              <a-icon type="loading" v-else/>
            </div>
          </a-col>
        </a-row>
        
      </a-layout-header>

      <a-layout :style="{ margin: '10px 16px', padding: '24px', background: '#fff', maxHeight: '70px' }">
        <a-breadcrumb separator=">">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>
            <router-link to="/profile">Profile</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <router-link to="/dashboard">Dashboard</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
      </a-layout>

      <a-layout-content :style="{ margin: '16px', padding: '24px', background: '#fff' }">
        <router-view />
        <!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { mapGetters } from 'vuex';
import Notification from './components/popup/Notification';
import ProfilePopup from './components/popup/ProfilePopup';

export default {
  data() {
    return {
      collapsed: false,
      navSliders: [
        {id: 1, icon: 'home', title: 'Home', link: "/"},
        {id: 2, icon: 'user', title: 'Profile', link: "/profile"},
        {id: 3, icon: 'dashboard', title: 'Dashboard', link: "/dashboard"},
      ]
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted() {
    this.$store.dispatch('getUser');
  },
  methods: {
  },
  components: {
    Notification, ProfilePopup
  }
  
}
</script>
<style>
#components-layout-demo-custom-trigger {
  min-height: 100%;
  height: auto;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
.header-user {
  float: right;
  padding: 0 20px;
}
.header-user-name {
  padding: 0 15px;
  font-weight: 600;
}
.header-icon {
  padding: 0 15px;
}
.fs-24 {
  font-size: 22px;
  cursor: pointer;
}
</style>
