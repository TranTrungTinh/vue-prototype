<template>
  <div id="components-modal-demo-position">
    <a-modal
      title="Delivery a task"
      centered
      v-model="modal"
      :footer="null"
    >
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="complete-form"
        @submit="handleSubmit"
      >
        <a-form-item>
            <h3>Messages</h3>
            <a-textarea placeholder="Input your messages" :autosize="{ minRows: 2, maxRows: 6 }" 
              v-decorator="[ 'messages', { rules: [{ required: true, message: 'Please input your messages !' }] }]"
            />
        </a-form-item>

        <a-divider />

        <a-form-item>
          <a-upload-dragger name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" @change="handleChange">
            <p class="ant-upload-drag-icon"><a-icon type="inbox" /></p>
            <p class="ant-upload-text">Click or drag file to this area to upload (maxsize: 30MB)</p>
            <p class="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
          </a-upload-dragger>
        </a-form-item>

        <a-form-item>
          <a-button
            type="primary"
            size="large"
            html-type="submit"
            class="complete-form-button"
          >
            Complete Task
          </a-button>
        </a-form-item>

      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  data() {
    return {
      modal: false,
      task: {}
    }
  },
  methods: {
    openModal(task) {
        this.modal = true;
        this.task = { ...task };
    },
    closeModal() {
      this.modal = false;
    },
    handleChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            this.$message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            this.$message.error(`${info.file.name} file upload failed.`);
        }
    },
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.closeModal();
          this.$store.dispatch('doneTask', this.task);
        }
      });
    }
  }
}
</script>

<style>
.complete-form-button {
  width: 100%;
}
</style>

