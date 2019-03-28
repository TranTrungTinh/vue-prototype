<template>
  <div>
    <a-row type="flex" justify="space-between" class="header">
      <a-col class="title">Language</a-col>
      <a-col>
        <span class="add-button" @click="showModal">
          <a-icon type="edit" />
        </span>
      </a-col>
    </a-row>
    <a-tag
      v-for="(lang) in languagesEntities"
      v-bind:key="lang.name"
    >
      {{ lang.name || '' }}
    </a-tag>

    <language-form ref="languageForm" :update="updateLanguage" :defaultValues="initValues" />
  </div>
</template>

<script>
import LanguageForm from './LanguageForm.vue'
import { authApi } from '@/api'
export default {
  name: 'profile-language',
  components: {
    LanguageForm
  },
  data () {
    return {
      visible: false
    }
  },
  props: {
    languages: {
      type: String,
      required: true,
      default: JSON.stringify({})
    },
    updateProfile: {
      type: Function
    }
  },
  methods: {
    showModal () {
      this.$refs.languageForm.showModal()
    },
    async updateLanguage (languages = []) {
      let payload = {}
      languages.forEach((lang, index) => {
        payload[index] = {
          name: lang
        }
      })
      const result = await authApi.updateAttribute('custom:lang', JSON.stringify(payload))
      if (result === 'SUCCESS') {
        this.updateProfile('custom:lang', JSON.stringify(payload))
      }
    }
  },
  computed: {
    languagesEntities: function () {
      return JSON.parse(this.languages || {})
    },
    initValues: function () {
      return Object.values(JSON.parse(this.languages || {}))
        .map(lang => lang.name)
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

.add-button {
  color: #00698c;
  cursor: pointer;
  font-size: 1.5rem;
}

.add-button:hover {
  font-weight: 700;
}
</style>
