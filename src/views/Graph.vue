<template>
  <div class="gra-ui">
    <div class="gra-cont">
      <p id="gra-tit" style="background: rgba(135,205,252,0.10);"><b>数据曲线</b></p>
    </div>
      <div id="gra-chart" ></div>
  </div>

</template>

<script>
import echarts from 'echarts';

export default {
  name: 'gra-ui',
  data() {
    return {
      channel: [
        [], [], [], [],
        [], [], [], [],
        [], [], [], [],
        [], [], [], [],
      ],
      channelTime: [],
      channelValue: [],
      channelName: [],
      postnumber: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.$http
        .get('http://192.168.1.223:8005/intfa/queryData/16069877')
        .then((response) => {
          if (response.data) {
            for (let i = 0; i < response.data.entity.length; i += 1) {
              this.channelName[i] = response.data.entity[i].eName;
              this.channelValue[i] = response.data.entity[i].eValue;
              this.channelTime[i] = response.data.entity[i].datetime;
            }
            this.channelTime[9] = response.data.entity[0].datetime;
            this.channelTime[10] = response.data.entity[0].datetime;
            this.channelTime[11] = response.data.entity[0].datetime;
            this.channelTime[12] = response.data.entity[0].datetime;
            this.channelTime[13] = response.data.entity[0].datetime;
          }
        })
        .catch();
      this.$http
        .get('http://192.168.1.223:8005/intfa/queryData/15112501')
        .then((response) => {
          if (response.data) {
            for (let i = 0; i < response.data.entity.length; i += 1) {
              this.channelName[i + 9] = response.data.entity[i].eName;
              this.channelValue[i + 9] = response.data.entity[i].eValue;
            }
          }
        })
        .catch();
      for (let i = 0; i < 14; i += 1) {
        if (this.postnumber >= 600) {
          this.channel[i].shift();
        }
        this.channel[i].push({
          name: this.channelName[i],
          value: [this.channelTime[i], this.channelValue[i]],
        });
      }
      this.postnumber += 1;
      this.chartLine.setOption({
        series: [{
          name: this.channelName[0],
          data: this.channel[0],
        }, {
          name: this.channelName[1],
          data: this.channel[1],
        }, {
          name: this.channelName[2],
          data: this.channel[2],
        }, {
          name: this.channelName[3],
          data: this.channel[3],
        }, {
          name: this.channelName[4],
          data: this.channel[4],
        }, {
          name: this.channelName[5],
          data: this.channel[5],
        }, {
          name: this.channelName[6],
          data: this.channel[6],
        }, {
          name: this.channelName[7],
          data: this.channel[7],
        }, {
          name: this.channelName[8],
          data: this.channel[8],
        }, {
          name: this.channelName[9],
          data: this.channel[9],
        }, {
          name: this.channelName[10],
          data: this.channel[10],
        }, {
          name: this.channelName[11],
          data: this.channel[11],
        }, {
          name: this.channelName[12],
          data: this.channel[12],
        }, {
          name: this.channelName[13],
          data: this.channel[13],
        }, {
          name: this.channelName[14],
          data: this.channel[14],
        }, {
          name: this.channelName[15],
          data: this.channel[15],
        }],
      });
    }, 61000);
    this.chartLine = echarts.init(document.getElementById('gra-chart'));
    const option = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        x: '52px',
        y: '80px',
        x2: '80px',
        y2: '30px',
      },
      legend: {
        data: '',
      },
      color: [
        '#8AE09F', '#FA0053', '#90EE90', '#CC0000',
        '#CC0099', '#FFFF00', '#008080', '#A0522D',
      ],
      xAxis: {
        type: 'time',
        splitLine: {
          show: false,
        },
        triggerEvent: true,
        boundaryGap: false,
        name: '时间',
        nameTextStyle: {
          color: '#000000',
          fontSize: 12,
          padding: [0, 0, 5, 0],
        },
        axisLine: {
          lineStyle: {
            color: '#666666',
          },
        },
      },
      yAxis: {
        name: '数值',
        type: 'value',
        boundaryGap: [0, '30%'],
        nameTextStyle: {
          color: '#000000',
          fontSize: 12,
          padding: [0, 0, 5, 0],
        },
        axisLine: {
          lineStyle: {
            color: '#666666',
          },
        },
      },
      toolbox: {
        left: 'right',
        top: 20,
        feature: {
          dataZoom: {
            yAxisIndex: 'none',
          },
          restore: {},
          saveAsImage: {},
        },
      },
      dataZoom: [
        {
          type: 'inside',
          show: true,
          xAxisIndex: [0],
        },
        {
          type: 'inside',
          xAxisIndex: [0],
        },
      ],
      series: [
        {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }, {
          name: '',
          data: [],
          type: 'line',
          symbol: 'none',
        }],
    };
    this.chartLine.setOption(option);
  },
  methods: {
  },
};
</script>

<style>
.gra-ui {
  width: 100%;
  height: 100%;
}
.gra-cont {
  width: 100%;
  height: 15%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
  #gra-tit {
  width: 100%;
  color: rgb(181,205,231);
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 2px 2px #092b88;
  font-size: 20px;
  }
.el-tabs__item {
  margin: 0px;
  padding-left: 10px;
  padding-right: 10px;
}
li a {
  display: block;
  color: #000;
  padding: 8px 8px;
  text-decoration: none;
}
li a:hover:not(.active) {
  color: white;
}
.gra-tab {
  height: 15%;
}
#gra-chart {
  width: 100%;
  height: 85%;
}
</style>
