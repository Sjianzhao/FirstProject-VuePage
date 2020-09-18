<template>
  <div class="master">
    <div class="header">
      <h1 style= "margin: 0;  color: antiquewhite">气象监控平台</h1>
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
  background: url('./assets/backgroundimg.png') no-repeat center;
  background-size: cover;
}
.header {
  box-shadow: 0px 1px 3px rgba(9, 8, 8, 0.8);
}
.main {
  width: 100%;
  height: 680px;
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
