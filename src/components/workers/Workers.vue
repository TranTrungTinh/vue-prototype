<template>
<div>
    <a-row>
        <a-col :span="12">
            <a-input-search 
                placeholder="Find a worker by name" 
                @search="onSearch" 
                class="dashboard-filter--search"
            />
        </a-col>
        <a-col :span="6" :offset="6">
            <a-select placeholder="Action" style="width: 200px" @change="handleChange">
                <a-select-option value="add">
                    <span style="padding-right: 10px"><a-icon type="plus" /></span>
                    <span>Add a worker</span>
                </a-select-option>
            </a-select>
        </a-col>
    </a-row>
    <a-divider />
  <a-table :columns="columns" :dataSource="data" :loading="loading">
    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    <span slot="status" slot-scope="status">
      <a-tag v-if="status" color="#2ed573" :key="status">Active</a-tag>
      <a-tag v-else color="gray" :key="status">Disable</a-tag>
    </span>
    <span slot="tags" slot-scope="tags">
      <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
    </span>
    <span slot="action" slot-scope="record">
      <a href="javascript:;" :disabled="record.status" @click="enableWorker(record.id)">
          <span style="color: #2ed573">Enable</span>
      </a>
      <a-divider type="vertical" />
      <a href="javascript:;" :disabled="!record.status" @click="disableWorker(record.id)">
          <span style="color: #57606f" >Disable</span>
      </a>
      <a-divider type="vertical" />
      <a-popconfirm placement="topRight" :title="`Are you sure delete ${record.name} ?`" @confirm="deleteUser(record.id)" okText="Yes" cancelText="No">
        <a href="javascript:;"><span style="color: #e84118">DELETE</span></a>
      </a-popconfirm>
    </span>
  </a-table>
</div>
</template>
<script>
const columns = [{
  dataIndex: 'name',
  key: 'name',
  slots: { title: 'customTitle' },
  scopedSlots: { customRender: 'name' },
}, {
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
},{
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
},{
  title: 'Phone',
  dataIndex: 'phone',
  key: 'phone',
},{
  title: 'Status',
  key: 'status',
  dataIndex: 'status',
  scopedSlots: { customRender: 'status' }
},{
  title: 'Skills',
  key: 'id',
  dataIndex: 'tags',
  scopedSlots: { customRender: 'tags' },
},{
  title: 'Action',
  key: 'action',
  scopedSlots: { customRender: 'action' },
}];

import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      data: [],
      loading: true,
      columns,
    }
  },
  computed: {
      ...mapGetters(['workers'])
  },
  mounted() {
      setTimeout(() => this.initialFetch(), 1000);
  },
  methods: {
      ...mapActions(['getWorkers']),
      initialFetch() {
          this.getWorkers().then(workers => {
              this.loading = false;
              this.data = workers;
          })
      },

      enableWorker(id) {
          this.data = this.data.map(worker => {
              return worker.id !== id ? worker : {...worker, status: true}
          })
      },
      disableWorker(id) {
          this.data = this.data.map(worker => {
              return worker.id !== id ? worker : {...worker, status: false}
          })
      },
      deleteUser(id) {
          this.data = this.data.filter(worker => worker.id !== id);
      },
      onSearch (value) {
          const search = value.toLowerCase().trim() || ''
          this.data = this.data.filter(worker => worker.name.toLowerCase().includes(search));
      },
      handleChange(value) {

      }
  }
}
</script>
