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
@import '@/styles/app.scss';

html {
    // This defines what 1rem is
    font-size: 100%; //1 rem = 10px; 10px/16px = 62.5%
    scroll-behavior: smooth;

    @include respond(tab-land) { // width < 1200?
        font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
    }

    @include respond(tab-port) { // width < 900?
        font-size: 50%; //1 rem = 8px, 8/16 = 50%
    }
    
    @include respond(big-desktop) {
        font-size: 75%; //1rem = 12, 12/16
    }
}

body {
    box-sizing: border-box;
}
</style>
