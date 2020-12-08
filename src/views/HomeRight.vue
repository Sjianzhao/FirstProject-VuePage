<template>
  <div style="width:100%;height:100%;">
    <div  class="table-hisData">
      <HisData></HisData>
    </div>
    <div style="height:2%;"></div>
    <div class="Gra-ui">
      <Graph></Graph>
    </div>
  </div>
</template>

<script>
import HisData from './HistoryData.vue';
import Graph from './Graph.vue';

export default {
  components: {
    HisData,
    Graph,
  },
};
</script>

<style>
/*显示视频的第三个块部分*/
.table-hisData {
  height: 56%;
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

.Gra-ui{
  height:39%;
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
