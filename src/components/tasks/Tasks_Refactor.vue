<template>
  <a-list
      class="demo-loadmore-list"
      itemLayout="horizontal"
      size="large"
      :dataSource="data"
    >
      <a-list-item slot="renderItem" slot-scope="item" key="item.id">
        <item :item="item" />
      </a-list-item>
    </a-list>
</template>
<script>
import Item from '@/components/tasks/TaskItem_Refactor';

export default {
    components: { Item },
    data() {
        return {
            data: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
                {id: 5},
                {id: 6},
                {id: 7},
                {id: 8},
            ]
        }
    }
}
</script>
