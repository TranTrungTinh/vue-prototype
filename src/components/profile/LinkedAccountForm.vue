<template>
  <a-modal
    :visible="visible"
    title="Edit your linked account"
    okText="OK"
    @cancel="handleCancel"
    @ok="handleOK"
  >
    <a-form layout="vertical" :form="form">
      <a-form-item
        v-for="(provider, idx) in providers"
        v-bind:key="idx"
        :label="`${getName(provider)} :`"
      >
        <a-input
          v-decorator="[
            provider,
            {
              rules: [{
                type: 'url', message: 'The input is not valid linked link!',
              }],
              initialValue: getInitValues(provider)
            }
          ]"
          style="width: 100%"
        >
          <a-icon slot="prefix" :type="provider" />
        </a-input>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  name: 'linked-account-form',
  props: {
    update: {
      type: Function
    },
    defaultValues: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      visible: false,
      providers: [
        'google',
        'facebook',
        'github',
        'linkedin'
      ]
    }
  },
  methods: {
    getName (name) {
      return name[0].toUpperCase() + name.slice(1)
    },
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
          this.update(values)
        }
      })
      this.form.resetFields()
      this.visible = false
    },
    getInitValues: function (provider) {
      return (this.defaultValues[provider] && this.defaultValues[provider].url) || ''
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  }
}
</script>
