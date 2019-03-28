<template>
  <a-form id="components-form-demo-validate-other" :form="form" @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout" label="Message">
      <a-textarea
        v-decorator="[
          'message',
          { rules: [{ required: true, message: 'Please input reuest message!' }] }
        ]"
        placeholder="Message of request"
        autosize
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="Attachment">
      <div>
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
      </div>
    </a-form-item>
    <div style="margin-top: 10px"></div>
    <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
      <div>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </div>
    </a-form-item>
  </a-form>
</template>

<script>
import { Auth, API, Storage } from 'aws-amplify'

export default {
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
  }),
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  computed: {},
  methods: {
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

          let apiName = 'TDSApi'
          let path = '/tasks'
          let param = {
            body: {
              message,
              requestId: 'sampleID',
              ...(attachment && { attachment })
            }
          }

          API.post(apiName, path, param)
            .then(rs => {
              console.log(rs)
              this.$message.success('Post a request successful!')
            })
            .catch(error => {
              console.log(error)
              this.$message.error(error.response || 'Create request failed!!')
            })
        }
      })
    },
    handleReset () {
      this.form.resetFields()
    },

    normFile (e) {
      console.log('Upload event:', e)
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
    uploadS3: async ({ data, file, onError, onProgress, onSuccess }) => {
      const key = `${Date.now()}_${file.name}`
      const credentials = await Auth.currentCredentials()
      const { identityId: userId } = credentials
      const level = 'protected'
      Storage.put(key, file, {
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
<style>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>
