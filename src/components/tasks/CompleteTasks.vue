<template>
  <a-row>
    <a-list
      class="demo-loadmore-list"
      itemLayout="horizontal"
      size="large"
      :loading="loading"
      :pagination="pagination"
      :dataSource="completeTasks"
    >
      
      <a-list-item slot="renderItem" slot-scope="item" key="item.id">
        <a-list-item-meta :description="item.title">
          <!-- <a-avatar slot="avatar" src="https://privat.starlaeducation.com/content/uploads/2017/05/RPP-Starla-1.png" /> -->
        </a-list-item-meta>
        <div>
            <a-button v-if="item.isFile" type="primary" icon="download" size="small">Download</a-button>
            <span class="task-tag">
              <a-tag color="#f50">Complete</a-tag>
            </span>
        </div>
      </a-list-item>
    </a-list>

  </a-row>
</template>
<script>
import { mapGetters } from 'vuex';
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
    ...mapGetters(['completeTasks'])
  },
  methods: {
    
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
