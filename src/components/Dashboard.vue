<template>
<div>
  <a-row class="dashboard-filter">
    <a-col :span="6">
      <a-input-search
      placeholder="Search Task"
      @search="onSearch"
      class="dashboard-filter--search"
    />
    </a-col>
    <a-col :span="18" >
      <a-select defaultValue="None" @change="handleChange" class="dashboard-filter--select">
        <a-select-opt-group label="Title">
          <a-select-option value="titleUp">Title <a-icon type="caret-up" /></a-select-option>
          <a-select-option value="titleDown">Title <a-icon type="caret-down" /></a-select-option>
        </a-select-opt-group>
        <a-select-opt-group label="Date">
          <a-select-option value="dateUp">Date <a-icon type="caret-up" /></a-select-option>
          <a-select-option value="dateDown">Date <a-icon type="caret-down" /></a-select-option>
        </a-select-opt-group>
      </a-select>
    </a-col>
  </a-row>
    
  <div class="dashboard-tabs">
    <a-tabs defaultActiveKey="1">
      <a-tab-pane tab="Available Tasks" key="1"><tasks /></a-tab-pane>
      <a-tab-pane tab="Your Tasks" key="2"><todo-tasks /></a-tab-pane>
      <a-tab-pane tab="Complete Tasks" key="3"><complete-tasks /></a-tab-pane>
    </a-tabs>
  </div>

</div>
</template>
<script>
import Tasks from './tasks/Tasks';
import TodoTasks from './tasks/TodoTasks';
import CompleteTasks from './tasks/CompleteTasks';

export default {
  data () {
    return {
    }
  },
  methods: {
    onSearch (value) {
      this.$store.dispatch('searchTitle', value)
    },
    handleChange(value) {
      this.$store.dispatch('sortSelected', value)
    }
  },
  components: {
    Tasks, TodoTasks, CompleteTasks
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
