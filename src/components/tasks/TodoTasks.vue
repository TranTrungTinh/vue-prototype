<template>
  <a-row>
    <a-list
      class="demo-loadmore-list"
      itemLayout="horizontal"
      size="large"
      :loading="loading"
      :pagination="pagination"
      :dataSource="todoTasks"
    >
      
      <a-list-item slot="renderItem" slot-scope="item" key="item.id">
        <a-list-item-meta :description="item.title">
          <!-- <a-avatar slot="avatar" src="https://privat.starlaeducation.com/content/uploads/2017/05/RPP-Starla-1.png" /> -->
        </a-list-item-meta>
        <div>
            <a-button v-if="item.isFile" type="primary" icon="download" size="small">Download</a-button>
            <span class="task-tag">
              <a-tag color="#f1c40f">To do</a-tag>
            </span>
        </div>

        <a slot="actions" class="red" @click="showModal(item)">Delivery a task</a>
        <a slot="actions" @click="showInfo(item)">Task info</a>
      </a-list-item>
    </a-list>

    <div>
      <show-info ref="showInfo" />
      <modal ref="showModal" />
    </div>

  </a-row>
</template>
<script>
import { mapGetters } from 'vuex';
import ShowInfo from '../utils/ShowInfo.vue';
import Modal from '../utils/Modal.vue';
import { setTimeout } from 'timers';

export default {
  data () {
    return {
      loading: true,
      pagination: {
        pageSize: 8,
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  computed: {
    ...mapGetters(['todoTasks'])
  },
  methods: {
    
    showInfo(dataItem) {
      this.$refs.showInfo.showDrawer(dataItem);
    },
    showModal(task) {
        this.$refs.showModal.openModal(task)
    }
  },
  components: {
    ShowInfo, Modal
  }
}
</script>
<style>
.demo-loadmore-list {
  min-height: 350px;
}
a.red,
a.red:hover,
a.red:active {
    color: red;
}
</style>
