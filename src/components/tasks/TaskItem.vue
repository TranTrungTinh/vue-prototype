<template>
  <div v-if="item" class="task-item">
    <a-list-item-meta :description="item.message" class="task-messages"></a-list-item-meta>
    <div class="task-tag">
      <a-tooltip placement="top" >
        <template slot="title">
          <span>Task included an attchment file</span>
        </template>
        <a-button
          v-if="item.attachment"
          type="primary"
          @click="downloadAttachment(item.attachment)"
          icon="download"
          size="small"
          :disabled="item.status === 0"
        >Download</a-button>
      </a-tooltip>
      <a-tag :color="statusTask.color">{{ statusTask.title }}</a-tag>
    </div>

    <div class="task-actions">
      <div v-if="isAdmin" class="a-action">
        <a slot="actions">
          <span style="color: #e58e26">CANCEL</span>
        </a>
        <a slot="actions">
          <span style="color: #e84118">DELETE</span>
        </a>
      </div>

      <div class="u-action">
        <a-popconfirm
          slot="actions"
          title="Are you sure pickup this task?"
          @confirm="pickUp(item)"
          okText="Yes"
          cancelText="No"
          v-if="isNew"
        >
          <a style="color: #4834d4">Pickup a task</a>
        </a-popconfirm>

        <a v-if="isTodo" slot="actions" class="red" @click="showModal(item)">Delivery a task</a>
        <a slot="actions" @click="showInfoFunc(item)">Task info</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { storageApi } from '@/api'

export default {
  props: {
    isAdmin: { type: Boolean, default: false },
    type: { type: String, default: 'new' },
    item: { type: Object },
    showInfoFunc: { type: Function },
    showModal: { type: Function }
  },
  computed: {
    isNew () {
      return this.type === 'new'
    },
    isTodo () {
      return this.type === 'todo'
    },
    isCompleted () {
      return this.type === 'completed'
    },
    statusTask () {
      if (this.item.status === 1) {
        return { color: '#e67e22', title: 'To do' }
      }
      if (this.item.status === 2) {
        return { color: '#e74c3c', title: 'Complete' }
      }
      return { color: '#2ecc71', title: 'New' }
    }
  },
  methods: {
    ...mapActions({
      updateStatus: 'tasks/updateStatus'
    }),

    pickUp (task) {
      const param = Object.assign({}, task, { status: '1' })
      this.updateStatus(param)
    },

    // release (task) {
    //   const param = Object.assign({}, task, { status: '2' })
    //   this.updateStatus(param)
    // },

    delete (task) {
      console.log('DELETEF')
    },

    downloadAttachment (attachment) {
      const { key } = attachment
      storageApi
        .get(attachment)
        .then(rs => {
          const url = window.URL.createObjectURL(new Blob([rs.Body]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', key)
          document.body.appendChild(link)
          link.click()
        })
        .catch(err => this.$message.error(err.message))
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.task-item {
  width: 100%;
  display: flex;
  .u-action {
    display: flex;
    a {
      padding: 8px;
    }
  }
  .task-messages {
    color: black;
  }
  .task-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin: 8px;
    }
  }
}
</style>
