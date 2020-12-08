<template>
  <div style="width:100%;height:100%;">
    <div style="width:100%;height:58%;">
      <Home></Home>
    </div>
    <div style="width:100%;height:2%;"></div>
    <div class="BoFang" style="width:98.2%;height:38%;">
      <VideoBoFang></VideoBoFang>
    </div>
  </div>
</template>

<script>
import Home from './Home.vue';
import VideoBoFang from './Video.vue';

export default {
  components: {
    Home,
    VideoBoFang,
  },
};
</script>

<style>
.BoFang {
  width: 30.1%;
  display: flex;
  padding: 5px;
  box-shadow: 0 0 0.2vw #071d49 inset;
  background: linear-gradient(#071d49, #071d49) left top,
  linear-gradient(#071d49, #071d49) left top,
  linear-gradient(#071d49, #071d49) right top,
  linear-gradient(#071d49, #071d49) right top,
  linear-gradient(#071d49, #071d49) left bottom,
  linear-gradient(#071d49, #071d49) left bottom,
  linear-gradient(#071d49, #071d49) right bottom,
  linear-gradient(#071d49, #071d49) right bottom;
  background-repeat: no-repeat;
  background-size: 0.1vw 18vw, 1.5vw 0.1vw;
}
</style>
