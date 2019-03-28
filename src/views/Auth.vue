<template>
  <a-layout id="authorize">
    <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
  </a-layout>
</template>

<script>
import { Auth } from 'aws-amplify'
export default {
  name: 'auth',
  components: {
  },
  data () {
    return {
      authConfig: {
        signUpConfig: {
          hiddenDefaults: ['phone_number']
        }
      }
    }
  },

  async beforeCreate () {
    try {
      await Auth.currentAuthenticatedUser()
      this.$router.push('/app')
    } catch (err) {
      console.log('NOT login')
    }
  }
}
</script>
<style lang="scss" scoped>
#authorize {
  min-height: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
