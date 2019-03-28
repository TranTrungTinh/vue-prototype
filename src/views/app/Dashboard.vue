<template>
  <div>
    <a-row :gutter="16" class="dashboard-filter">
      <a-col :xs="24" :md="5">
        <div class="dashboard-filter--title">All recent tasks</div>
      </a-col>
      <a-col :xs="24" :md="12">
        <a-input-search
          placeholder="Search Task"
          @search="onSearch"
          class="dashboard-filter--search"
        />
      </a-col>
      <a-col :xs="24" :md="7">
        <a-select defaultValue="None" @change="handleChange" class="dashboard-filter--select">
          <a-select-opt-group label="Title">
            <a-select-option value="titleUp">Title
              <a-icon type="caret-up"/>
            </a-select-option>
            <a-select-option value="titleDown">Title
              <a-icon type="caret-down"/>
            </a-select-option>
          </a-select-opt-group>
          <a-select-opt-group label="Date">
            <a-select-option value="dateUp">Date
              <a-icon type="caret-up"/>
            </a-select-option>
            <a-select-option value="dateDown">Date
              <a-icon type="caret-down"/>
            </a-select-option>
          </a-select-opt-group>
        </a-select>
      </a-col>
    </a-row>

    <div class="dashboard-tabs">
      <!-- <a-tabs defaultActiveKey="1">
        <a-tab-pane tab="Available Tasks" key="1">
          <tasks :type="'new'"/>
        </a-tab-pane>
        <a-tab-pane tab="Your Tasks" key="2">
          <tasks :type="'todo'"/>
        </a-tab-pane>
        <a-tab-pane tab="Complete Tasks" key="3">
           <tasks :type="'completed'"/>
        </a-tab-pane>
      </a-tabs> -->
      <tasks />
    </div>
  </div>
</template>
<script>
// import { Tasks } from '@/components/tasks'
import Tasks from '@/components/tasks/Tasks_Refactor';

export default {
  data () {
    return {}
  },
  methods: {
    onSearch (value) {},
    handleChange (value) {}
  },
  components: {
    Tasks
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/app.scss';

.dashboard-filter {
  margin: 10px 0 30px 0;

  &--title {
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
  }

  &--search {
    width: 100%;
    
    @include respond(phone) {
      margin: 15px 0;
    }
  }

  &--select {
    @include respond(phone) {
      width: 100%;
    }

    width: 200px;
    float: right;
  }
}
</style>
