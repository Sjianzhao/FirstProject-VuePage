<template>
  <div class="content">
    <div class="line_1">
      <div class="chunk_1_1">
        <div style="width:100%">
          <div class="baseifmt">
            <div style="width:100%">
              <div class="basetitle">
                <h4>基地信息</h4>
              </div>
              <div class="basebody">
                <div class="basename" style="width: 30%">
                  站点名称:
                  <br />
                  {{element.deviceName}}
                </div>
                <div class="baseid" style="width: 30%">
                  站点ID:
                  <br />
                  {{element.deviceId}}
                </div>
                <div class="basetime" style="width: 40%">
                  更新时间:
                  <br />
                  {{UpdaTime}}
                </div>
              </div>
            </div>
          </div>
          <div class="datalayout">
            <h4>实时数据</h4><br />
            <el-row :gutter="10">
              <el-col :span="6"><div class="grid-content bg-purple">{{typedata[0].eName}}:
                <br>{{typedata[0].eValue}} {{typedata[0].eUnit}}</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple1">{{typedata[1].eName}}:
                <br>{{typedata[1].eValue}} {{typedata[1].eUnit}}</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple2">{{typedata[2].eName}}:
                <br>{{typedata[2].eValue}} {{typedata[2].eUnit}}</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple3">{{typedata[3].eName}}:
                <br>{{typedata[3].eValue}} {{typedata[3].eUnit}}</div></el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6"><div class="grid-content bg-purple3">{{typedata[4].eName}}:
                <br>{{typedata[4].eValue}} {{typedata[4].eUnit}}</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">{{typedata[5].eName}}:
                <br>{{typedata[5].eValue}} {{typedata[5].eUnit}}</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple1">{{typedata[6].eName}}:
                <br>{{typedata[6].eValue}} {{typedata[6].eUnit}}</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple2">{{typedata[7].eName}}:
                <br>{{typedata[7].eValue}} {{typedata[7].eUnit}}</div></el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6"><div class="grid-content bg-purple2">{{typedata[8].eName}}:
                <br>{{typedata[8].eValue}} {{typedata[8].eUnit}}</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple3">{{typedata[9].eName}}:
                <br>{{typedata[9].eValue}} {{typedata[9].eUnit}}</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">{{typedata[10].eName}}:
                <br>{{typedata[10].eValue}} {{typedata[10].eUnit}}</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple1">{{typedata[11].eName}}:
                <br>{{typedata[11].eValue}} {{typedata[11].eUnit}}</div></el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6"><div class="grid-content bg-purple1">{{typedata[12].eName}}:
                <br>{{typedata[12].eValue}} {{typedata[12].eUnit}}</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple2">{{typedata[13].eName}}:
                <br>{{typedata[13].eValue}} {{typedata[13].eUnit}}</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple3">{{typedata[14].eName}}:
                <br>{{typedata[14].eValue}} {{typedata[14].eUnit}}</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">{{typedata[15].eName}}:
                <br>{{typedata[15].eValue}} {{typedata[15].eUnit}}</div></el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="chunk_1_2">
        <!-- <router-view /> -->
        <TestMap></TestMap>
      </div>
      <div class="chunk-hisdata">
        <TextHistoryData></TextHistoryData>
      </div>
    </div>
    <div class="content_1">
      <div class="line_2">
        <div class="chunk_2_1">
          <TestVideo></TestVideo>
        </div>
        <div class="chunk_2_2">
          <TextGraph></TextGraph>
        </div>
        <div class="chunk-conjourn">
          <TextConJourn></TextConJourn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TestMap from './Map.vue';
import TestVideo from './Video.vue';
import TextGraph from './Graph.vue';
import TextHistoryData from './HistoryData.vue';
import TextConJourn from './ConJourn.vue';

export default {
  name: 'Home',
  mounted() {
    setInterval(() => {
      this.$http
        .get('http://115.28.187.9:8005/intfa/queryData/16067968')
        .then((res) => {
          if (res.data) {
            this.element = res.data;
            this.UpdaTime = res.data.entity[0].datetime;
            for (let i = 0; i < res.data.entity.length; i += 1) {
              this.typedata[i] = res.data.entity[i];
            }
          }
        })
        .catch();
    }, 1000);
  },
  data() {
    return {
      element: {},
      UpdaTime: '',
      typedata: [
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
        { eName: '-----', eValue: '-----', eUnit: ' ' },
      ],
    };
  },
  components: {
    TestMap,
    TestVideo,
    TextGraph,
    TextHistoryData,
    TextConJourn,
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  background: transparent;
}
.line_1 {
  width: 100%;
  height: 60%;
  display: flex;
}
.content_1 {
  width: 100%;
  height: 40%;
  display: flex;
}
.line_2 {
  width: 100%;
  height: 100%;
  display: flex;
}
/*显示基本要素的第一个块部分*/
.chunk_1_1 {
  width: 30%;
  display: flex;
  padding-right: 5px;
}

.baseifmt {
  width: 100%;
  display: flex;
}
.basetitle {
  width: 100%;
  display: flex;
}
.basebody {
  width: 100%;
  display: flex;
}
.dataifmt {
  width: 100%;
  display: flex;
}
h4 {
  width: 100%;
  text-align: center;
  margin: 7px;
}
.subLay1_1 {
  width: 25%;
  background-color: rgba(25, 229, 222, 0.55);
  border-radius: 10px;
  margin: 5px 5px 5px 5px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
    padding-left: 4px;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: rgba(255, 255, 255, 0.973);
}
.bg-purple {
  background: rgba(25, 229, 222, 0.55);
}
.bg-purple1 {
  background: rgba(229, 25, 219, 0.363);
}
.bg-purple2 {
  background: rgba(124, 229, 25, 0.459);
}
.bg-purple3 {
  background: rgba(229, 90, 25, 0.55);
}
.bg-purple-light {
  background: #11368d;
}
.grid-content {
  border-radius: 5px;
  min-height: 50px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
/*显示地图的第二个块部分*/
.chunk_1_2 {
  width: 50%;
  height: 100%;
  display: flex;
  padding-right: 5px;
}
// #container {
//   width: 100%;
//   height: 100%;
//   display: flex;
// }
/*显示视频的第三个块部分*/
.chunk_2_1 {
  top: 60%;
  left: 0%;
  width: 30%;
  height: 100%;
  display: flex;
  padding-top: 5px;
}
/*显示折线图的第四个块部分*/
.chunk_2_2 {
  top: 60%;
  left: 40%;
  width: 50%;
  display: flex;
  padding-top: 5px;
}
p {
  width: 100%;
}
/*显示图形的第五个块部分*/
.chunk-hisdata {
  width: 20%;
  display: flex;
}
/*显示图形的第六个块部分*/
.chunk-conjourn {
  width: 20%;
  display: flex;
}
</style>
