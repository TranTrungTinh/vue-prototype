<template>
  <div class="upload-avatar">
    <a-avatar :size="128" :src="src"/>
    <div class="upload-avatar-hover">
      <div class="upload">
        <a-upload
          name="avatar"
          :showUploadList="false"
          :action="uploadHost"
          :beforeUpload="beforeUpload"
          @change="handleChange"
        >
          <span class="avatar-uploader">
            <a-icon type="camera"/>
          </span>
        </a-upload>
      </div>
    </div>
  </div>
</template>
<script>
function getBase64 (img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
export default {
  props: {
    src: {
      type: String,
      default:
        'http://kampus-stikespanakkukang.ac.id/assets/images/photo_empty.png'
    }
  },
  data () {
    return {
      uploadHost: '',
      imageUrl: ''
    }
  },
  methods: {
    handleChange (info) {
      if (info.file.status === 'uploading') {
        console.log('uploading');
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        console.log('done uploading');
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl
        })
      }
    },
    beforeUpload (file) {
      const acceptType = ['image/jpeg', 'image/png']
      const isImage = acceptType.includes(file.type)
      if (!isImage) {
        this.$message.error('You can only upload JPG or PNG file!')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!')
      }
      return isImage && isLt2M
    }
  }
}
</script>
<style lang="scss" scoped>
.upload-avatar {
  position: relative;
}
.upload-avatar:hover .upload-avatar-hover {
  background: rgb(0, 0, 0);
  opacity: 0.65;
}
.upload-avatar:hover .upload {
  display: block;
}
.upload-avatar-hover {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background: transparent;
}
.upload {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar-uploader {
  font-size: 36px;
  color: #fff;
  cursor: pointer;
}
</style>
