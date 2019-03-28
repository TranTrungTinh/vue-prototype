import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
  async logout () {
    await Auth.signOut()
    return AmplifyEventBus.$emit('authState', 'signedOut')
  },
  async updateAttribute (attribute, value) {
    let payload = {}
    payload[attribute] = value
    const user = await Auth.currentAuthenticatedUser()
    const result = await Auth.updateUserAttributes(user, payload)
    return result
  }
}
