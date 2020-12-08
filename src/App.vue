<template>
  <div class="master">
    <div class="master-map">
      <TestMap>
      </TestMap>
    </div>
    <div class="header">
      <el-col :span="6"><div class="grid-content bg-purple" style="padding-top: 7px;">
      </div></el-col>
      <el-col :span="12"><div class="header-title">
        <h1 style= "margin-top: 10px;">新 普 惠 在 线 监 测 平 台</h1>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple" style="padding-top: 7px;">
        <el-button icon="el-icon-full-screen" size="mini" type="primary" @click="FullScreen"
        style="background-color: transparent; margin-right: 60px;
        box-shadow: 1px 0.6px 0.8px rgba(59, 127, 129, 0.8); font-size: 16px;">全屏</el-button>
        <el-button icon="el-icon-full-screen" size="mini" type="primary" @click="ExitScreen"
        style="background-color: transparent; margin-right: 60px;
        box-shadow: 1px 0.6px 0.2px rgba(59, 127, 129, 0.8); font-size: 16px;">退出</el-button>
      </div></el-col>
    </div>
    <div class="main-left">
      <div class="content">
        <Homeleft></Homeleft>
      </div>
    </div>
    <div class="main-right">
      <div class="content1">
        <HomeRight></HomeRight>
      </div>
    </div>
  </div>
</template>

<script>
import TestMap from './views/Map.vue';
import Homeleft from './views/Homeleft.vue';
import HomeRight from './views/HomeRight.vue';

export default {
  components: {
    TestMap,
    Homeleft,
    HomeRight,
  },
  methods: {
    ExitScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    },
    FullScreen() {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen();
      }
    },
  },
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
  /* background: url('./assets/home_background.jpg') no-repeat center;
  background-size: cover; */
}
.master-map {
  background-size:cover;
  height: 100%;
  width: 100%;
  position: relative;
}
/* 渐变色标题 */
.header {
  box-shadow: 1px 1px 0.8px rgba(9, 27, 129, 0.8);
  height: 7%;
  overflow: hidden;
  background-image: -webkit-linear-gradient(top, #d9cfe2f5, #2977c0, #0c0722);
/* 规定背景绘制区域 */
  -webkit-background-clip: text;
/* 将文字隐藏 */
  -webkit-text-fill-color: transparent;
  position: absolute;
  width:100%;
  text-align:right;
  top:0%;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: transparent;
}
.bg-purple {
  background: transparent;
}
.bg-purple-light {
  background:transparent;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  margin-top: 10px;
  /* box-shadow: 2px 2px 0.8px rgba(9, 27, 129, 0.8); */
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.main-left {
  width: 30%;
  height: 93%;
  display: flex;
/* 在div上浮动一层div */
  position: absolute;
  text-align:left;
  top:7%;
}
.main-right {
  width: 30%;
  height: 93%;
  right: 0px;
  display: flex;
/* 在div上浮动一层div */
  position: absolute;
  text-align:left;
  top:7%;
}
.content {
  width: 100%;
  height: 100%;
}
.content1 {
  width: 100%;
  height: 100%;
}
h1{
  text-align:center;
  margin: 2px;
}
</style>
