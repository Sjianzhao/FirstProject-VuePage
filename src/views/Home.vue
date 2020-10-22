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
                    昆都仑河公园
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
                    {{UpdaTime}}
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
                  {{typedata[0].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[0].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[0].eUnit}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple1">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[1].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[1].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[1].eUnit}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple2">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[2].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[2].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[2].eUnit}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple3">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[3].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[3].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[3].eUnit}}</span>
                </div>
              </div></el-col>
            </el-row>
            <el-row :gutter="10" style= "height:18%;">
              <el-col :span="6"><div class="grid-content bg-purple3">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[4].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[4].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[4].eUnit}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[5].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[5].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[5].eUnit}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple1">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[6].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[6].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[6].eUnit}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple2">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[7].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[7].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[7].eUnit}}</span>
                </div>
              </div></el-col>
            </el-row>
            <el-row :gutter="10" style= "height:18%;">
              <el-col :span="6"><div class="grid-content bg-purple2">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[8].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[8].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[8].eUnit}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple3">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[9].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[9].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[9].eUnit}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[10].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[10].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[10].eUnit}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple1">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[11].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[11].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[11].eUnit}}</span>
                </div>
              </div></el-col>
            </el-row>
            <el-row :gutter="10" style="padding: 0px; height:18%;">
              <el-col :span="6"><div class="grid-content bg-purple1">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[12].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[12].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[12].eUnit.substring(0,2)}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple2">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[13].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[13].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[13].eUnit}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple3">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[14].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[14].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[14].eUnit}}</span>
                </div>
              </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">
                <div style="background: rgba(135,205,252,0.20);">
                  <p style="margin: 0px;font-size: 14px;color: rgb(150, 150, 150);">
                  {{typedata[15].eName}}:</p>
                </div>
                <div>
                  <span style="margin: 0px;font-size: 18px;color: rgb(251,227,131);">
                  {{typedata[15].eValue}}{{' '}}</span>
                  <span style="margin: 0px;font-size: 12px;color: rgb(105, 106, 156);">
                  {{typedata[15].eUnit}}</span>
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
          <TestVideo></TestVideo>
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
import TestVideo from './Video.vue';
import TextGraph from './Graph.vue';
import TextHistoryData from './HistoryData.vue';
import TextConJourn from './ConJourn.vue';

export default {
  name: 'Home',
  mounted() {
    setInterval(() => {
      this.$http
        // .get('http://192.168.1.223:8005/intfa/queryData/16069877')
        .get('http://47.105.215.208:8005/intfa/queryData/16069044')
        .then((res) => {
          if (res.data) {
            this.element = res.data;
            for (let i = 0; i < res.data.entity.length; i += 1) {
              this.typedata[i] = res.data.entity[i];
            }
          }
        })
        .catch();
      this.$http
        // .get('http://192.168.1.223:8005/intfa/queryData/15112501')
        .get('http://47.105.215.208:8005/intfa/queryData/16069044')
        .then((res) => {
          if (res.data) {
            this.UpdaTime = res.data.entity[0].datetime;
            for (let i = 0; i < res.data.entity.length; i += 1) {
              this.typedata[i + 9] = res.data.entity[i];
            }
          }
        })
        .catch();
    }, 3000);
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
    }
  },
  data() {
    return {
      element: {},
      UpdaTime: ' ',
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
  methods: {
    draw() {
      const canvas = document.getElementById('stockGraph');
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
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
