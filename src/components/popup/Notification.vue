<template>
  <a-popover
    title="You have 5 notifications"
    trigger="click"
    placement="bottomRight"
    v-model="visible"
  >
    <div slot="content">
        <a-list
            itemLayout="horizontal"
            bordered
            :dataSource="data"
        >
            <a-list-item slot="renderItem" slot-scope="item">
            <a-list-item-meta
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
                <a slot="title" href="https://vue.ant.design/">{{item.title}}</a>
                <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </a-list-item-meta>
            </a-list-item>
        </a-list>
        <div class="noti-sync">
            <span class="noti-sync-text">Synced at: 14 Mar 2019 17:36</span>
            <span class="noti-sync-icon" @click="toggleSync">
                <span v-if="loading" style="opacity: 0.5">
                    <a-icon type="sync" spin/>
                    Loading...
                </span>
                <a-icon type="sync" v-else/>
            </span>
        </div>
    </div>
    <a-icon type="bell" theme="filled" @click="open"/>
  </a-popover>
</template>

<script>
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]
export default {
  data () {
    return {
      visible: false,
      data,
      loading: false
    }
  },
  methods: {
    open() {
        this.visible = true
    },
    hide() {
      this.visible = false
    },
    toggleSync() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 1500)
    }
  },
}
</script>
<style>
.noti-sync {
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
}
.noti-sync-icon {
    cursor: pointer;
    font-size: 16px;
}
</style>
