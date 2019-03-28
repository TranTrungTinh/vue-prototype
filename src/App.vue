<template>
  <router-view/>
</template>
<script>
import { AmplifyEventBus } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'

export default {
  name: 'App',

  created () {
    this.authenticate()
  },
  mounted () {
    AmplifyEventBus.$on('authState', async info => {
      if (info === 'signedIn' || info === 'signedOut') {
        this.authenticate()
      } else {
        console.log('authState:', info)
      }
    })
  },
  methods: {
    async authenticate () {
      try {
        let user = await Auth.currentAuthenticatedUser()
        let groups = user.signInUserSession.getIdToken().payload['cognito:groups']
        const credentials = await Auth.currentCredentials()
        user = Object.assign(
          {},
          {
            user,
            groups,
            userId: credentials.identityId
          }
        )
        this.$store.commit('auth/set', user)
        this.$router.replace({ path: '/app' })
      } catch (err) {
        this.$store.commit('auth/reset')
        this.$router.replace({ path: '/auth' })
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: calc(100vh);
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
.nav-text {
  a {
    color: white;
    text-decoration: none;
  }
}
</style>
