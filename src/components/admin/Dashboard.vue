<template>
<div>
  
  <div class="dashboard-tabs">
    <a-tabs defaultActiveKey="1">
      <a-tab-pane tab="Tasks Management" key="1"><tasks :isAdmin="true" /></a-tab-pane>
      <a-tab-pane tab="Workers Management" key="2"><workers /></a-tab-pane>
    </a-tabs>
  </div>

</div>
</template>
<script>
import Tasks from '../tasks/Tasks';
import Workers from '../workers/Workers'

export default {
  data () {
    return {
    }
  },
  methods: {
    
  },
  components: {
    Tasks, Workers
  }
}
</script>

<style scoped>
.dashboard-filter {
  margin: 10px 0 30px 0;
}
.dashboard-filter--search {
  width: 100%;
}
.dashboard-filter--select {
  width: 200px;
  float: right;
}
</style>
