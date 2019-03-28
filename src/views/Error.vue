<template>
  <a-layout id="page-404">
    <section>
      <h1>404</h1>
      <p>Page not found
        <router-link to="/app">Home page</router-link>
      </p>
    </section>
  </a-layout>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style lang="scss" scoped>
#page-404 {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-image: url(https://os.alipayobjects.com/rmsportal/NOAjOBbnYCrNzrW.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-attachment: fixed;
}

#page-404 h1 {
  color: #1890ff;
  font-weight: 500;
  font-size: 120px;
  margin: 0;
}

#page-404 p {
  font-weight: 700;
  font-size: 20px;
}

#page-404 section {
  position: absolute;
  top: 48%;
  left: 55%;
  margin: -103px 0 0 -120px;
  text-align: center;
}
</style>
