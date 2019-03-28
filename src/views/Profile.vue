<template>
  <a-row :gutter="16">
    <a-col :md="24" :lg="8">
      <user-info />
    </a-col>
    <a-col :md="24" :lg="16">
      <user-addtional-info />
    </a-col>
  </a-row>
</template>

<script>
import { UserInfo, UserAddtionalInfo } from '@/components/profile'
export default {
  components: {
    UserInfo,
    UserAddtionalInfo
  }
}
</script>
<style>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}

#user-profile {
  display: flex;
  justify-content: space-between;
}
</style>
