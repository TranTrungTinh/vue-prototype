<template>
  <a-spin :spinning="loading" :indicator="indicator">
    <div class="user-profile mb-5">
      <div class="user-profile-header">
        <user-avatar />
        <h3>Quyen Pham Khac</h3>
        <p>What's your story in one line?
          <a-icon type="edit"/>
        </p>
        <a-button block>Preview Public Mode</a-button>
        <div class="status">
          <span class="circle-point"></span>Online
        </div>
      </div>
      <div class="user-profile-content">
        <a-divider />
        <div class="item">
          <span>
            <a-icon type="environment"/>
            <span style="paddingLeft: 15px">From</span>
          </span>
          <span class="bold">Ho Chi Minh city</span>
        </div>
        <div class="item">
          <span>
            <a-icon type="user"/>
            <span style="paddingLeft: 15px">Member since</span>
          </span>
          <span class="bold">Mar 2019</span>
        </div>
        <a-divider />
        <div class="item">
          <span>
            <a-icon type="bank"/>
            <span style="paddingLeft: 15px">Out of Office</span>
          </span>
          <span>
            <a-switch :defaultChecked="false"/>
          </span>
        </div>
        <a-divider />
      </div>
      <div>
        <a-row type="flex" justify="space-between" class="description-info">
          <a-col class="block-title">Desscription</a-col>
          <a-col>
            <span style="color: #00698c">Edit Descripton</span>
          </a-col>
        </a-row>
        <p>My name is Binh Bui, and I’m a full stack developer working out of and residing in the Ho Chi Minh city, Viet Nam. I am largely a Java developer, but have knowledge in the frontend world as well. During my free time I enjoy gym, swimming and watching movie.</p>
      </div>
    </div>
  </a-spin>
</template>

<script>
import UserAvatar from './Avatar.vue'
export default {
  components: {
    UserAvatar
  },
  data () {
    return {
      loading: false,
      indicator: <a-icon type="loading" style="font-size: 24px" spin />
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.bold {
  font-weight: 600;
}
.light {
  opacity: 0.7;
}
.mb-5 {
  margin-bottom: 50px;
}
.user-profile {
  height: auto;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px 30px;
  font-size: 14px;
  line-height: 130%;
  border-radius: 3px;
}
.user-profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.user-profile-header h3 {
  margin: 10px 0;
}
.user-profile-header .status {
  position: absolute;
  top: 0px;
  right: 0px;
  border: 1px solid #1dbf73;
  border-radius: 10px;
  color: #1dbf73;
  padding: 2px 8px;
  text-transform: capitalize;

  display: flex;
  align-items: center;
  justify-content: space-around;
}
.user-profile-header .circle-point {
  display: inline-block;
  border-radius: 50%;
  background-color: #1dbf73;
  margin-right: 5px;
  width: 7px;
  height: 7px;
}
.user-profile-content {
  margin: 20px 0;
}
.user-profile-content .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}

.block-title {
  font-size: 16px;
  font-weight: 600;
}
.description-info {
  margin: 0 0 15px 0;
}

.right-profile-header {
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0 25px;
  margin-bottom: 40px;
  height: 50px;
  position: relative;
}
</style>
