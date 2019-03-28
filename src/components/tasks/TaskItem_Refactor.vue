<template>
  <div class="task-item">
    <a-row :gutter="16">
        <a-col :xs="24" :md="12" :lg="14" :xl="16" :xxl="18">
            <span>Sure, it might look pretty but when you start investigating the results, the overdone design might be a distraction. Not with Ample Admin Lite</span>
        </a-col>
        <a-col :xs="24" :md="6" :lg="5" :xl="4" :xxl="3">
            <div class="task-item--status">
                <a-tag class="task-item--status__tag" color="#4cd137">New</a-tag>
                <a-tooltip placement="top" >
                    <template slot="title">
                        <span>Task included an attchment file</span>
                    </template>
                    <a-button type="primary" icon="download" size="small">Download</a-button>
                </a-tooltip>
            </div>
        </a-col>
        <a-col :xs="24" :md="6" :lg="5" :xl="4" :xxl="3">
            <div class="task-item--action">
                <a-popconfirm
                    title="Are you sure pickup this task?"
                    okText="Yes"
                    cancelText="No"
                >
                    <a style="color: #4834d4">Pickup a task</a>
                </a-popconfirm>
                <a-divider type="vertical" />
                <a>Info</a>
            </div>
        </a-col>
    </a-row>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import '@/styles/app.scss';

.task-item {
    width: 100%;

    &--status {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        @include respond(phone) {
            margin: 15px 0;
        }

        &__tag {
           
        }
    }

    &--action {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>

