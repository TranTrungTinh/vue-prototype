<template>
  <a-spin :spinning="loading" :indicator="indicator">
    <div class="user-profile mb-5">
      <profile-language v-bind:languages="userAttributes['custom:lang']" :updateProfile="update" />
      <a-divider/>
      <profile-linked-account v-bind:linkedAccounts="linkedAccounts" :updateProfile="update" />
      <a-divider/>

      <a-row type="flex" justify="space-between" class="header">
        <a-col class="title">Skills</a-col>
        <a-col>
          <span style="color: #00698c">Add New</span>
        </a-col>
      </a-row>
      <div>
        <a-tag closable>NodeJs</a-tag>
        <a-tag closable>Web Development</a-tag>
        <a-tag closable>Database Design</a-tag>
        <a-tag closable>iOS</a-tag>
        <a-tag closable>Flutter</a-tag>
      </div>
      <a-divider/>

      <a-row type="flex" justify="space-between" class="header">
        <a-col class="title">Education</a-col>
        <a-col>
          <span style="color: #00698c">Add New</span>
        </a-col>
      </a-row>
      <p>B.A - It Engineer</p>
      <p class="light">UNIVERSITY OF TRANSPORT AND COMMUNICATIONS, Vietnam, Graduated 2006</p>
      <a-divider/>

      <a-row type="flex" justify="space-between" class="header">
        <a-col class="title">Certification</a-col>
        <a-col>
          <span style="color: #00698c">Add New</span>
        </a-col>
      </a-row>
      <p class="light">You don't have any Certification.</p>
    </div>
  </a-spin>
</template>

<script>
import { Auth } from 'aws-amplify'
import ProfileLanguage from './Language.vue'
import ProfileLinkedAccount from './LinkedAccount.vue'
export default {
  name: 'user-additional-info',
  components: {
    ProfileLanguage,
    ProfileLinkedAccount
  },
  data () {
    return {
      loading: false,
      indicator: <a-icon type="loading" style="font-size: 24px" spin />,
      userAttributes: {}
    }
  },
  async created () {
    const user = await Auth.currentUserInfo()
    this.userAttributes = user.attributes
  },
  methods: {
    update (attribute, value) {
      this.userAttributes[attribute] = value
    }
  },
  computed: {
    linkedAccounts: function () {
      return this.userAttributes['custom:linked_accounts'] || JSON.stringify({})
    }
  }
}
</script>

<style scoped>
.user-profile {
  height: auto;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px 30px;
  font-size: 14px;
  line-height: 130%;
  border-radius: 3px;
}

.user-profile .header .title {
  font-size: 16px;
  font-weight: 600;
}

.user-profile .header {
  margin: 0 0 15px 0;
}
</style>
