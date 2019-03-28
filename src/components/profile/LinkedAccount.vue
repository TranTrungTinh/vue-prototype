<template>
  <div>
    <a-row type="flex" justify="space-between" class="header">
      <a-col class="title">Linked Accounts</a-col>
      <a-col>
        <span class="edit-button" @click="showModal">
          <a-icon type="edit" />
        </span>
      </a-col>
    </a-row>
    <p v-for="linked in linkedAccountsObj" v-bind:key="linked.name">
      <a :href="linked.url" target="_blank">
        <span>
          <a-icon :type="linked.name"/>
        </span>
        <span style="paddingLeft: 15px">{{ getName(linked.name) }}</span>
      </a>
    </p>
    <linked-account-form :defaultValues="initFormValues" :update="update" ref="linkedAccountForm" />
  </div>
</template>

<script>
import LinkedAccountForm from './LinkedAccountForm.vue'
import { authApi } from '@/api'
export default {
  name: 'user-linked-account',
  components: {
    LinkedAccountForm
  },
  props: {
    linkedAccounts: {
      type: String,
      required: true,
      default: JSON.stringify({})
    },
    updateProfile: {
      type: Function
    }
  },
  computed: {
    linkedAccountsObj: function () {
      return JSON.parse(this.linkedAccounts)
    },
    initFormValues: function () {
      const initValues = {}
      Object.values(JSON.parse(this.linkedAccounts))
        .map(linkedAccount => {
          initValues[linkedAccount.name] = linkedAccount
        })
      return initValues
    }
  },
  methods: {
    showModal () {
      this.$refs.linkedAccountForm.showModal()
    },
    getName (name = '') {
      if (!name) {
        return ''
      }
      return name[0].toUpperCase() + name.slice(1)
    },
    async update (accounts = {}) {
      const payload = {}
      Object.keys(accounts).map((provider, index) => {
        payload[index] = {
          name: provider,
          url: accounts[provider]
        }
      })
      const result = await authApi.updateAttribute('custom:linked_accounts', JSON.stringify(payload))
      if (result === 'SUCCESS') {
        this.updateProfile('custom:linked_accounts', JSON.stringify(payload))
      }
    }
  }
}
</script>

<style scoped>
.header .title {
  font-size: 16px;
  font-weight: 600;
}

.header {
  margin: 0 0 15px 0;
}

.edit-button {
  color: #00698c;
  cursor: pointer;
  font-size: 1.5rem;
}

.edit-button:hover {
  font-weight: 700;
}

a {
  color: rgba(0, 0, 0, 0.65);
  text-decoration: none !important;
}

a:hover {
  color: #096dd9;
  font-weight: 700;
}
</style>
