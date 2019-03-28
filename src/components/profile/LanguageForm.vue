<template>
  <a-modal
    :visible="visible"
    title="Add your language"
    okText="Add"
    @cancel="handleCancel"
    @ok="handleOK"
  >
    <a-form layout="vertical" :form="form" ref="languageForm">
      <a-form-item
        label="Languages"
        has-feedback
      >
        <a-select
          v-decorator="[
            'select',
            {
              rules: [{ required: true, message: 'Please select your language !' }],
              initialValue: defaultValues
            }
          ]"
          mode="multiple"
          style="width: 100%"
          placeholder="Please select a language"
        >
          <a-select-option
            v-for="language in languages"
            v-bind:value="language"
            v-bind:key="language"
          >
            {{ language }}
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import langs from '@/assets/lang.json'
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  data () {
    return {
      visible: false
    }
  },
  props: {
    update: {
      type: Function
    },
    defaultValues: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleCancel () {
      this.form.resetFields()
      this.visible = false
    },
    handleOK (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.update(values['select'])
        }
      })
      this.form.resetFields()
      this.visible = false
    }
  },
  computed: {
    languages () {
      return Object.values(langs)
        .map(lang => lang.name)
    }
  }
}
</script>
