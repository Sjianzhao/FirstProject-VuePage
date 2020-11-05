<template>
  <div class="content">
    <div class="line_1">
      <div class="chunk_1_1">
        <div style="width:100%">
          <div class="baseifmt">
            <div style="width:100%">
              <div class="basetitle">
                <h4 style="color: rgb(181,205,231);background: rgba(135,205,252,0.10);">基础信息</h4>
              </div>
              <div class="basebody">
                <div class="basename" style="width: 30%; color: antiquewhite;margin: 5px;">
                  <div style="background: rgba(181,205,231,0.80);
                  text-align:center;border-radius: 8px; color: black;">
                    站点名称:
                  </div>
                  <div>
                    <div id="stockGraph" width="20" height="20"></div>
                  </div>
                  <div style = "font-size: 14px; text-align: center;">
                    {{element.deviceName}}
                  </div>
                </div>
                <div class="baseid" style="width: 25%; color: antiquewhite;margin: 5px;">
                  <div style="background: rgba(181,205,231,0.80);
                  text-align:center;border-radius: 8px; color: black;">
                    站点类型:
                  </div>
                  <div>
                    <div id="stockGraph" width="20" height="20"></div>
                  </div>
                  <div style = "font-size: 14px; text-align: center;">
                    自动气象站
                  </div>
                </div>
                <div class="basetime" style="width: 45%; color: antiquewhite;margin: 5px;">
                  <div style="background: rgba(181,205,231,0.80);
                  text-align:center;border-radius: 8px; color: black;">
                    更新时间:
                  </div>
                  <div>
                    <div id="stockGraph" width="20" height="20"></div>
                  </div>
                  <div style = "font-size: 14px; text-align: center;">
                    {{UpdaTime[0].datetime}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="datalayout" style= "height:75%;">
            <div>
              <h4 style="color: rgb(181,205,231);background: rgba(135,205,252,0.10);">实时数据</h4>
            </div>
            <el-row :gutter="10" style= "height:18%;">
              <el-col :span="6"><div class="grid-content bg-purple">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[0]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[0]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[0]}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple1">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[1]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[1]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[1]}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple2">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[2]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[2]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[2]}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple3">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[3]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[3]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[3]}}</span>
                </div>
              </div></el-col>
            </el-row>
            <el-row :gutter="10" style= "height:18%;">
              <el-col :span="6"><div class="grid-content bg-purple3">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[4]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[4]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[4]}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[5]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[5]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[5]}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple1">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[6]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[6]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[6]}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple2">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[7]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[7]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[7]}}</span>
                </div>
              </div></el-col>
            </el-row>
            <el-row :gutter="10" style= "height:18%;">
              <el-col :span="6"><div class="grid-content bg-purple2">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[8]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[8]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[8]}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple3">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[9]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[9]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[9]}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[10]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[10]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[10]}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple1">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[11]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[11]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[11]}}</span>
                </div>
              </div></el-col>
            </el-row>
            <el-row :gutter="10" style="padding: 0px; height:18%;">
              <el-col :span="6"><div class="grid-content bg-purple1">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[12]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[12]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[12].substring(0,2)}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple2">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[13]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[13]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[13]}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple3">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[14]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[14]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[14]}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[0].eName[15]}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue[15]}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit[15]}}</span>
                </div>
              </div></el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div style=" width: 2%; display: flex; padding: 0px;"></div>
      <div class="chunk_1_2">
        <!-- <router-view /> -->
        <TestMap></TestMap>
      </div>
      <div style=" width: 2%; display: flex; padding: 0px;"></div>
      <div class="chunk-hisdata">
        <TextHistoryData></TextHistoryData>
      </div>
    </div>
    <div class="line_null">
    </div>
    <div class="content_1">
      <div class="line_2">
        <div class="chunk_2_1">
          <DevMean></DevMean>
          <!--<TestVideo></TestVideo>!-->
        </div>
        <div style=" width: 2%; display: flex; padding: 0px;"></div>
        <div class="chunk_2_2">
          <TextGraph></TextGraph>
        </div>
        <div style=" width: 2%; display: flex; padding: 0px;"></div>
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
// import TestVideo from './Video.vue';
import TextGraph from './Graph.vue';
import TextHistoryData from './HistoryData.vue';
import TextConJourn from './ConJourn.vue';
import DevMean from './DevMean.vue';

export default {
  name: 'Home',
  mounted() {
    setInterval(() => {
      this.$http
        // .get('http://192.168.1.223:8005/intfa/queryData/16069877')
        .get(`http://27.223.13.155:8005/intfa/queryData/${this.changeId}`)
        .then((res) => {
          if (res.data) {
            this.element = res.data;
            this.UpdaTime[0].datetime.splice(0, 1, res.data.entity[0].datetime);
            for (let i = 0; i < res.data.entity.length; i += 1) {
              // this.typedata[i] = res.data.entity[i];
              // 需要响应式的
              this.typedata[0].eName.splice(i, 1, res.data.entity[i].eName);
              this.typedata[0].eValue.splice(i, 1, res.data.entity[i].eValue);
              this.typedata[0].eUnit.splice(i, 1, res.data.entity[i].eUnit);
            }
          }
        })
        .catch();
    }, 3000);
  },
  data() {
    return {
      element: {},
      UpdaTime: [{
        datetime: [],
      }],
      typedata: [
        {
          eName: [
            '-----', '-----', '-----', '-----', '-----', '-----', '-----', '-----',
            '-----', '-----', '-----', '-----', '-----', '-----', '-----', '-----',
          ],
          eValue: [
            '-----', '-----', '-----', '-----', '-----', '-----', '-----', '-----',
            '-----', '-----', '-----', '-----', '-----', '-----', '-----', '-----',
          ],
          eUnit: [
            ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
            ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          ],
        },
      ],
      // 利用变量接收父组件传过来的变量
      // changeId: this.changeId,
      changeId: 0,
    };
  },
  // 父组件中传递过来的ID
  // props: ['changeVal'],
  components: {
    TestMap,
    //  TestVideo,
    TextGraph,
    TextHistoryData,
    TextConJourn,
    DevMean,
  },
  methods: {
  },
  computed: {
    NewDevID() {
      return this.$store.state.NewDevID;
    },
  },
  watch: {
    NewDevID() {
    //  console.log(this.NewDevID);
      this.changeId = this.NewDevID;
      for (let i = 0; i < 16; i += 1) {
        this.typedata[0].eName[i] = '-----';
        this.typedata[0].eValue[i] = '-----';
        this.typedata[0].eUnit[i] = ' ';
      }
    },
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
  height: 58%;
  display: flex;
}
.line_null {
  width: 100%;
  height: 2%;
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
  padding: 6px;
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
#stockGraph {
  border-style: solid;
  border-width: 10px 5px 1px 5px;
  border-color: rgba(181,205,231,0.80) transparent transparent transparent;
  width: 0px;
  height: 0px;
  margin-left: 50%;
}
.baseifmt {
  width: 100%;
  height:25%;
  display: flex;
  box-shadow: 1px 1px 1px 1px  rgba(135,205,252,0.1);
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
  margin-top: 5px;
  margin-bottom: 5px;
  box-shadow: 1px 1px 2px 1px rgba(135,205,252,0.20);
  font-size: 20px;
}
.subLay1_1 {
  width: 25%;
  background-color: rgba(25, 229, 222, 0.55);
  border-radius: 10px;
  margin: 5px 5px 5px 5px;
}
.el-row {
  margin-bottom: 10px;
  height: 15%;
  &:last-child {
    margin-bottom: 0px;
    padding-left: 4px;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: rgba(85, 86, 156, 0.05);
}
.bg-purple {
  background:rgba(85, 86, 156, 0.05);
  box-shadow: 0 2px 4px rgba(37, 32, 32, 0.788), 0 0 6px rgba(26, 24, 24, 0.658);
}
.bg-purple1 {
  background:rgba(85, 86, 156, 0.05);
  box-shadow: 0 2px 4px rgba(37, 32, 32, 0.788), 0 0 6px rgba(26, 24, 24, 0.658);
}
.bg-purple2 {
  background:rgba(85, 86, 156, 0.05);
  box-shadow: 0 2px 4px rgba(37, 32, 32, 0.788), 0 0 6px rgba(26, 24, 24, 0.658);
}
.bg-purple3 {
  background: rgba(85, 86, 156, 0.05);
  box-shadow: 0 2px 4px rgba(37, 32, 32, 0.788), 0 0 6px rgba(26, 24, 24, 0.658);
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
  width: 46%;
  height: 97.3%;
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
// #container {
//   width: 100%;
//   height: 100%;
//   display: flex;
// }
/*显示视频的第三个块部分*/
.chunk_2_1 {
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
/*显示折线图的第四个块部分*/
.chunk_2_2 {
  top: 60%;
  left: 40%;
  width: 45.9%;
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
p {
  width: 100%;
}
/*显示图形的第五个块部分*/
.chunk-hisdata {
  width: 19.7%;
  display: flex;
  padding: 5px;
  box-shadow: 0 0 0.2vw transparent inset;
  background: linear-gradient( transparent, transparent) left top,
  linear-gradient(transparent, transparent) left top,
  linear-gradient(transparent, transparent) right top,
  linear-gradient(transparent, transparent) right top,
  linear-gradient(transparent, transparent) left bottom,
  linear-gradient(transparent, transparent) left bottom,
  linear-gradient(transparent,transparent) right bottom,
  linear-gradient(transparent,transparent) right bottom;
  background-size: 0.1vw 18vw, 1.5vw 0.1vw;
}
/*显示图形的第六个块部分*/
.chunk-conjourn {
  width: 20.2%;
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
