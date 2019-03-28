<template>
  <div id="components-modal-demo-position">
    <a-modal title="Delivery a task" centered v-model="modal" :footer="null">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="complete-form"
        @submit="handleSubmit"
      >
        <a-form-item label="Message">
          <a-textarea
            v-decorator="[
          'message',
          { rules: [{ required: true, message: 'Please input reuest message!' }] }
        ]"
            placeholder="Message of request"
            autosize
          />
        </a-form-item>

        <a-divider/>

        <a-form-item>
          <a-upload-dragger
            v-decorator="['attachments', {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          }]"
            name="files"
            action="/upload.do"
            :beforeUpload="beforeUpload"
            @change="handleChange"
            accept=".png, .jpg, .jpeg, .zip"
            :customRequest="uploadS3"
          >
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox"/>
            </p>
            <p class="ant-upload-text">Click or drag file to this area to upload</p>
            <p class="ant-upload-hint">Support for a single or bulk upload.</p>
          </a-upload-dragger>
        </a-form-item>

        <a-form-item>
          <a-button
            type="primary"
            size="large"
            html-type="submit"
            class="complete-form-button"
          >Complete Task</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { storageApi } from '@/api'

export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  data () {
    return {
      modal: false,
      task: {}
    }
  },
  computed: {
    ...mapGetters({
      userId: 'auth/userId'
    })
  },
  methods: {
    openModal (task) {
      this.modal = true
      this.task = { ...task }
    },
    closeModal () {
      this.modal = false
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          const { message, attachments = [] } = values
          const files = attachments
            .filter(file => file.response)
            .map(file => file.response)

          // TODO, this case only get first item.
          const attachment = files.length ? files[0] : null
          const param = {
            message,
            requestId: 'sampleID',
            ...(attachment && { attachment })
          }
          confirm.log(param)
          // TODO Do save task here.
        }
      })
    },
    handleReset () {
      this.form.resetFields()
    },
    normFile (e) {
      if (Array.isArray(e)) {
        return e
      }
      return e && e.fileList
    },

    beforeUpload (file) {
      const isLt2M = file.size / 1024 / 1024 < 20
      if (!isLt2M) {
        this.$message.error('Image must smaller than 20MB!')
      }
      return isLt2M
    },

    handleChange (info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    },

    uploadS3 ({ data, file, onError, onProgress, onSuccess }) {
      const key = `${Date.now()}_${file.name}`
      const level = 'private'
      const userId = this.userId
      storageApi
        .upload(key, file, {
          level,
          contentType: file.type,
          cacheControl: '31536000', // 1 year
          progressCallback: ({ total, loaded }) => {
            onProgress({ percent: Math.round((loaded / total) * 100) }, file)
          }
        })
        .then(({ key }) => {
          return {
            key,
            userId,
            level
          }
        })
        .then(response => {
          console.log(response)
          onSuccess(response, file)
        })
        .catch(onError)

      return {
        abort () {
          console.log('upload progress is aborted.')
        }
      }
    }
  }
}
</script>
<style scoped>
.complete-form-button {
  width: 100%;
}
</style>
