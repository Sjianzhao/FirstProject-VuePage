<template>
  <div class="master">
    <div class="header">
      <h1 style= "margin: 0;">标题</h1>
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
.master {
  background-size:cover;
  height: 100%;
  width: 100%;
  background: url('./assets/home_background.jpg') no-repeat center;
  background-size: cover;
}
.header {
  background: rgba(255, 255, 255, 0.808) none repeat scroll 0 0 !important;
}
.main {
  width: 100%;
  height: 680px;
  display: flex;
}
.content {
  width: 100%;
  height: 100%;
  background-color: rgba(251, 250, 255, 0.322);
}
h1{
  text-align:center;
  margin: 2px;
}
</style>
