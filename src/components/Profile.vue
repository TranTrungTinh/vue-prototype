<template>
<a-spin :spinning="loading" :indicator="indicator">
  <div class="profile">
    <a-row>
      <a-col :span="8">
        <div class="left-profile mb-5">
          <div class="profile-main-info">
            <a-avatar :size="128" src="https://randomuser.me/api/portraits/women/12.jpg" />
            <h3>{{ user.name }}</h3>
            <p>What's your story in one line?<a-icon type="edit" /></p>
            <a-button block>Preview Public Mode</a-button>
            <div class="main-info-status"><span class="circle-point"></span>Online</div>
          </div>
          <div class="profile-secondary-info">
            <div class="secondary-info-item">
              <span>
                <a-icon type="environment" />
                <span style="paddingLeft: 15px">From</span>
              </span>
              <span class="bold">{{ user.address.city }}</span>
            </div>
            <div class="secondary-info-item">
              <span>
                <a-icon type="user" />
                <span style="paddingLeft: 15px">Member since</span>
              </span>
              <span class="bold">Mar 2019</span>
            </div>
          </div>
          <div class="finally-info-item">
            <span>
              <a-icon type="bank" />
              <span style="paddingLeft: 15px">Out of Office</span>
            </span>
            <span><a-switch :defaultChecked="false"/></span>
          </div>
        </div>

        <div class="left-profile mb-5">
          <div class="brand-logo"></div>
          <h4>Boost your sales, by boosting your expertise.</h4>
          <a-button type="primary" block>Enroll Now</a-button>
        </div>

        <div class="left-profile">
          <a-row type="flex" justify="space-between" class="description-info">
            <a-col class="block-title">Desscription</a-col>
            <a-col><span style="color: #00698c">Edit Descripton</span></a-col>
          </a-row>
          <p>My name is Binh Bui, and I’m a full stack developer working out of and residing in the Ho Chi Minh city, Viet Nam. I am largely a Java developer, but have knowledge in the frontend world as well. During my free time I enjoy gym, swimming and watching movie.</p>
          <a-divider />

          <a-row type="flex" justify="space-between" class="description-info">
            <a-col class="block-title">Languages</a-col>
            <a-col><span style="color: #00698c">Add New</span></a-col>
          </a-row>
          <p>Vietnamese <span class="bold">(Tiếng Việt)</span> - <span class="light">Native/Bilingual</span></p>
          <p>English - <span class="light">Basic</span></p>
          <a-divider />

          <a-row type="flex" justify="space-between" class="description-info">
            <a-col class="block-title">Linked Accounts</a-col>
          </a-row>
          <p>
            <span><a-icon type="facebook" theme="filled"/></span>
            <span style="paddingLeft: 15px">Facebook</span>
          </p>
          <p>
            <span><a-icon type="google" /></span>
            <span style="paddingLeft: 15px">Google</span>
          </p>
          <p>
            <a href="#">
              <span><a-icon type="plus" /></span>
              <span style="paddingLeft: 15px">Github</span>
            </a>
          </p>
          <p>
            <span><a-icon type="linkedin" theme="filled"/></span>
            <span style="paddingLeft: 15px">Linkedin</span>
          </p>
          <a-divider />

          <a-row type="flex" justify="space-between" class="description-info">
            <a-col class="block-title">Skills</a-col>
            <a-col><span style="color: #00698c">Add New</span></a-col>
          </a-row>
          <div>
            <a-tag closable>NodeJs</a-tag>
            <a-tag closable>Web Development</a-tag>
            <a-tag closable>Database Design</a-tag>
            <a-tag closable>Flutter</a-tag>
            <a-tag closable>iOS</a-tag>
          </div>
          <a-divider />

          <a-row type="flex" justify="space-between" class="description-info">
            <a-col class="block-title">Education</a-col>
            <a-col><span style="color: #00698c">Add New</span></a-col>
          </a-row>
          <p>B.A - It Engineer</p>
          <p class="light">UNIVERSITY OF TRANSPORT AND COMMUNICATIONS, Vietnam, Graduated 2006</p>
          <a-divider />

          <a-row type="flex" justify="space-between" class="description-info">
            <a-col class="block-title">Certification</a-col>
            <a-col><span style="color: #00698c">Add New</span></a-col>
          </a-row>
          <p class="light">You don't have any Certification.</p>

        </div>
      </a-col>
      <a-col :span="14" :offset="2">
        <div class="right-profile">
          <div class="right-profile-header">
            More content
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</a-spin>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      loading: true,
      indicator: <a-icon type="loading" style="font-size: 24px" spin />
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted() {
    this.$Progress.start();
    setTimeout(() => {
      this.$Progress.finish();
      this.loading = false;
      }, 1000);
  }
}
</script>
<style>
.bold {
  font-weight: 600;
}
.light {
  opacity: 0.7; 
}
.mb-5 {
  margin-bottom: 50px;
}
.left-profile {
  height: auto;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px 30px;
  font-size: 14px;
  line-height: 130%;
  border-radius: 3px;
}
.profile-main-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.profile-main-info h3 {
  margin: 10px 0;
}
.main-info-status {
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
.circle-point {
  display: inline-block;
  border-radius: 50%;
  background-color: #1dbf73;
  margin-right: 5px;
  width: 7px;
  height: 7px;
}

.profile-secondary-info {
  margin: 20px 0;
  border-top: solid 1px #ddd;
  border-bottom: solid 1px #ddd;
}
.secondary-info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}
.finally-info-item {
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

