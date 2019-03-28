<template>
  <a-row>
    <a-list
      class="demo-loadmore-list"
      itemLayout="horizontal"
      size="large"
      :loading="loading"
      :dataSource="data"
    >
      <a-list-item slot="renderItem" slot-scope="item" key="item.id">
        <item :item="item" :showInfoFunc="displayInfo" :showModal="showModal" :type="type"/>
      </a-list-item>
    </a-list>
    <div>
      <show-info ref="showInfo"/>
      <modal ref="showModal"/>
    </div>
  </a-row>
</template>
<script>
import { mapActions } from 'vuex'
import ShowInfo from './TaskInfo.vue'
import Modal from './Modal.vue'
import Item from './TaskItem.vue'

export default {
  props: {
    isAdmin: { type: Boolean, default: false },
    type: { type: String, default: 'new' }
  },
  data () {
    return {
      loading: true
    }
  },
  created () {
    this.load()
  },
  computed: {
    data () {
      if (this.type === 'new') {
        return this.$store.getters['tasks/newTasks']
      } else if (this.type === 'todo') {
        return this.$store.getters['tasks/todoTasks']
      } else {
        return this.$store.getters['tasks/completedTasks']
      }
    }
  },
  methods: {
    ...mapActions({
      get: 'tasks/get'
    }),

    displayInfo (dataItem) {
      this.$refs.showInfo.showDrawer(dataItem)
    },
    showModal (task) {
      this.$refs.showModal.openModal(task)
    },

    // TODO make paging later. Wait Khanh-san tell how to paging with DynamoDB
    load () {
      this.loading = true

      this.get({ type: this.type })
        .then(() => (this.loading = false))
        .catch(err => {
          console.log(err)
          this.$message.error('Load data failed, try again later.')
        })
    }
  },
  components: {
    ShowInfo,
    Item,
    Modal
  }
}
</script>
<style>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
