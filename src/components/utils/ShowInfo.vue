<template>
    <a-drawer
      width=640
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <p :style="[pStyle, pStyle2]">User Profile</p>
      <p :style="pStyle">Personal</p>
      <a-row>
        <a-col :span="12">
          <description-item title="Full Name" content="AAA" />
        </a-col>
        <a-col :span="12">
          <description-item title="Account" content="AntDesign@example.com" />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <description-item title="City" content="HangZhou" />
        </a-col>
        <a-col :span="12">
          <description-item title="Country" content="China🇨🇳" />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <description-item title="Birthday" content="February 2,1900" />
        </a-col>
        <a-col :span="12">
          <description-item title="Website" content="-" />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <description-item
            title="Message"
            :content="dataItem.title"
          />
        </a-col>
      </a-row>
      <a-divider />
      <p :style="pStyle">Company</p>
      <a-row>
        <a-col :span="12">
          <description-item title="Position" content="Programmer" />
        </a-col>
        <a-col :span="12">
          <description-item title="Responsibilities" content="Coding" />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <description-item title="Department" content="AFX" />
        </a-col>
        <a-col :span="12">
          <description-item title="Supervisor" >
            <a slot="content">Lin</a>
          </description-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <description-item
            title="Skills"
            :content="dataItem.body"
          />
        </a-col>
      </a-row>
      <a-divider />
      <p :style="pStyle">Contacts</p>
      <a-row>
        <a-col :span="12">
          <description-item title="Email" content="ant-design-vue@example.com" />
        </a-col>
        <a-col :span="12">
          <description-item title="Phone Number" content="+86 181 0000 0000" />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <description-item
            title="Github"
          >
            <a slot='content' href="https://github.com/vueComponent/ant-design-vue">
              github.com/vueComponent/ant-design-vue
            </a>
          </description-item>
        </a-col>
      </a-row>
    </a-drawer>
</template>

<script>
import descriptionItem from './DescriptionItem'
export default {
    data() {
        return {
            visible: false,
            dataItem: {},
            pStyle: {
                fontSize: '16px',
                color: 'rgba(0,0,0,0.85)',
                lineHeight: '24px',
                display: 'block',
                marginBottom: '16px',
            },
            pStyle2: {
                marginBottom: '24px'
            }
        }
    },
    methods: {
        showDrawer(dataItem) {
            this.visible = true;
            this.dataItem = {...dataItem};
        },
        onClose() {
            this.visible = false;
        },
    },
    components: {
      descriptionItem
    }
}
</script>

