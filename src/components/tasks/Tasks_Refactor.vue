<template>
<div class="task-recent">
    <a-list
        class="task-recent-list"
        itemLayout="horizontal"
        size="large"
        :dataSource="data"
    >
            <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
                <item :item="item" />
            </a-list-item>
    </a-list>
    <div v-if="showLoadingMore" class="task-recent-loadmore">
        <a-spin v-if="loadingMore" />
        <a-button v-else @click="onLoadMore">loading more</a-button>
    </div>
</div>
</template>
<script>
import Item from '@/components/tasks/TaskItem_Refactor';

export default {
    components: { Item },
    data() {
        return {
            loadingMore: false,
            showLoadingMore: true,
            data: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
                {id: 5},
                {id: 6},
                {id: 7},
                {id: 8}
            ]
        }
    },
    methods: {
        onLoadMore() {
            this.loadingMore = true;
            setTimeout(() => {
                const items = [{ id: 2 }, {id: 4}, {id: 8}]
                this.data = this.data.concat(items);
                this.loadingMore = false;
            }, 1000)
        }
    }
}
</script>
<style lang="scss" scoped>
.task-recent {

    &-list {
        overflow-x: hidden;
        overflow-y: scroll;
        max-height: 600px;
    }

    &-loadmore {
        text-align: center;
        margin-top: 30px;
        height: 24px;
        line-height: 24px;
    }

}
</style>

