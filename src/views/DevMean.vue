<template>
  <div style="height: 100%;width:100%">
    <div class="devswitch-tit">
      <p style="color: rgb(181,205,231);background: rgba(135,205,252,0.10);"> <b>时段均值</b></p>
    </div>
    <div id="devmean-view" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: 'Devselect',
  data() {
    return {
      userID: 0,
      // 存要素的平均数据
      barData: [
        [], [], [], [],
        [], [], [], [],
        [], [], [], [],
        [], [], [], [],
      ],
      meanValue: [],
      barValue: [],
      barName: [],
      postnumber: 0,
      barLestTime: '0',
      barTime: '0',
    };
  },
  mounted() {
    setInterval(() => {
      this.$http
        // .get('http://192.168.1.223:8005/intfa/queryData/16069877')
        .get(`http://27.223.13.155:8005/intfa/queryData/${this.userID}`)
        .then((res) => {
          if (res.data) {
            for (let i = 0; i < res.data.entity.length; i += 1) {
              this.barValue[i] = res.data.entity[i].eValue;
              this.barName[i] = res.data.entity[i].eName;
            }
            this.barTime = res.data.entity[0].datetime;
          }
        })
        .catch();
      for (let i = 0; i < this.barName.length; i += 1) {
        if (this.postnumber >= 600) {
          if (this.barLestTime !== this.barTime) {
            this.barData[i].shift();
          }
        }
        if (this.barLestTime !== this.barTime) {
          this.barData[i].push(
            Number(this.barValue[i]),
          );
        }
        // 每分钟一次，计算均值
        if (this.postnumber % 3 === 0) {
          for (let j = 0; j < this.barData.length; j += 1) {
            // console.log(this.barData[0]);
            if (this.barName[j]) {
              //  求历史上获取的数据之和
              this.meanValue[j] = this.evil(this.barData[j].join('+'));
              // 取数据的平均值
              this.meanValue[j] /= this.barData[j].length;
              // 保留一位小数点
              this.meanValue[j] = this.meanValue[j].toFixed(1);
            }
          }
        }
      }
      this.postnumber += 1;
      if (this.postnumber > 600) {
        this.postnumber = 600;
      }
      this.barLestTime = this.barTime;
      this.chartMean.setOption({
        xAxis: [{
          data: this.barName,
        }],
        series: [{
          type: 'bar',
          data: this.meanValue,
        }],
      });
    }, 6000);
    this.chartMean = echarts.init(document.getElementById('devmean-view'));
    const option = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        x: '35px',
        y: '40px',
        x2: '30px',
        y2: '30px',
      },
      color: [
        '#8AE09F', '#FA0053', '#90EE90', '#CC0000',
        '#CC0099', '#FFFF00', '#008080', '#A0522D',
      ],
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      xAxis: [{
        type: 'category',
        data: [],
        axisLine: {
          lineStyle: {
            color: '#000000',
          },
        },
      }],
      yAxis: [{
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#660066',
          },
        },
      }],
      series: [{
        type: 'bar',
        data: [],
      }],
    };
    this.chartMean.setOption(option);
  },
  methods: {
    evil(fn) {
      const Fn = Function;
      return new Fn('return ' + fn)();
    },
  },
  computed: {
    NewDevID() {
      return this.$store.state.NewDevID;
    },
  },
  watch: {
    NewDevID() {
    //  console.log(this.NewDevID);
      this.userID = this.NewDevID;
      for (let j = 0; j < 16; j += 1) {
        while (this.barData[j].length !== 0) {
          this.barData[j].shift();
        }
      }
      while (this.barName.length !== 0) {
        this.barName.shift();
      }
      while (this.barValue.length !== 0) {
        this.barValue.shift();
      }
    },
  },
};
</script>

<style>
.devswitch-tit {
  width: 100%;
  height: 7%;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 0px;
}
.devswitch-tit p {
  text-align: center;
  font-size: 20px;
  margin: 2px;
  box-shadow: 1px 1px 2px 2px  rgba(135,205,252,0.20);
  font-size: 20px;
  background: rgba(135,205,252,0.10);
}
#devmean-view {
  width: 100%;
  height: 90%;
}
</style>
