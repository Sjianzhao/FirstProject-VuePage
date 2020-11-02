<template>
  <div class="master">
    <div class="header">
      <h1 style= "margin: 10px;  color: rgb(181,205,231);">昆都仑河国家湿地公园监控平台</h1>
    </div>
    <div class="main">
      <div class="nav">
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
html {
  height: 100%;
  width: 100%;
}
body {
  height: 100%;
  width: 100%;
  margin: 0px;
  display: flex;
}
.master {
  background-size:cover;
  height: 100%;
  width: 100%;
  background: url('./assets/heseqipan.png') no-repeat center;
  background-size: cover;
}
.header {
  box-shadow: 1px 1px 1px rgba(8, 8, 8, 0.8);
  height: 7%;
}
.main {
  width: 100%;
  height: 90%;
  display: flex;
}
.content {
  width: 100%;
  height: 100%;
}
h1{
  text-align:center;
  margin: 2px;
}
</style>
