<template>
  <a-row>
    <a-list
      class="demo-loadmore-list"
      itemLayout="horizontal"
      size="large"
      :loading="loading"
      :pagination="pagination"
      :dataSource="getfilteredData"
    >
      
      <a-list-item slot="renderItem" slot-scope="item" key="item.id">
        <a-list-item-meta :description="item.title" class="task-messages">
          <!-- <a-avatar slot="avatar" src="https://privat.starlaeducation.com/content/uploads/2017/05/RPP-Starla-1.png" /> -->
        </a-list-item-meta>
        <div>
            <a-button v-if="item.isFile" type="primary" icon="download" size="small">Download</a-button>
            <span class="task-tag">
              <a-tag color="#87d068">Pending</a-tag>
            </span>
        </div>

        <a slot="actions" v-if="isAdmin">
          <span style="color: #e58e26">CANCEL</span> 
        </a>
        <a slot="actions" v-if="isAdmin">
          <span style="color: #e84118">DELETE</span> 
        </a>

        <a-popconfirm v-if="!isAdmin" slot="actions" title="Are you sure pickup this task?" @confirm="confirm(item)" okText="Yes" cancelText="No">
          <span style="color: #4834d4">Pickup a task</span> 
        </a-popconfirm>
        <a v-if="!isAdmin" slot="actions" @click="showInfo(item)">Task info</a>


      </a-list-item>
    </a-list>

    <div>
      <show-info ref="showInfo" />
    </div>

  </a-row>
</template>
<script>
import { mapGetters } from 'vuex';
import ShowInfo from '../utils/ShowInfo.vue';
import { setTimeout } from 'timers';

export default {
  props: {
    isAdmin: { type: Boolean, default: false }
  },
  data () {
    return {
      loading: true,
      data: [],
      pagination: {
        pageSize: 8,
      }
    }
  },
  mounted () {
    this.$Progress.start();
    setTimeout(() => {
      this.firstFetchTasks();
      this.$Progress.finish();
    }, 1000);
  },
  computed: {
    ...mapGetters(['filter']),
    getfilteredData() {
      return this.data.filter(item => {
        return item.title.includes(this.filter.title.toLowerCase())
      })
    }
  },
  methods: {
    firstFetchTasks() {
      this.$store.dispatch('getTasks')
      .then(data => {
        this.loading = false;
        this.data = data;
      })
    },
    showInfo(dataItem) {
      this.$refs.showInfo.showDrawer(dataItem);
    },
    confirm (task) {
      this.$store.dispatch('pickupTask', task);
      this.$message.success('A task pickup successfully');
    }
  },
  components: {
    ShowInfo
  }
}
</script>
<style>
.demo-loadmore-list {
  min-height: 350px;
}
.task-messages {
  color: black;
}
.task-tag {
  padding: 0 0 0 30px;
}
</style>
