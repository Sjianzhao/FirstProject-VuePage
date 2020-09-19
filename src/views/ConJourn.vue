<template>
<div class="con-jour">
  <el-row>
    <div class="con-title">
      <p style="color: antiquewhite"><b>阈值设置：</b></p>
    </div>
  </el-row>
  <el-row style="margin: 10px;">
   <el-col :span="9" style="font-size: large; margin: 6px;color: white;">选择要素：</el-col>
    <el-select
    v-model="factor" placeholder="请选择要素"
    style="width: 140px; height: 20px;"
    >
      <el-option v-for="item in options"  :key="item.value"
        :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </el-row>
  <div style="margin: 10px; height: 36px">
    <el-col :span="9" style="font-size: large; margin: 6px;color: white;">设置上限：</el-col>
    <el-input v-model="inputUp" placeholder="请输入上限"
    style="width: 140px; height: 20px">
    </el-input>
  </div>
  <div style="margin: 10px; height: 36px">
    <el-col :span="9" style="font-size: large; margin: 6px;color: white;">设置下限：</el-col>
    <el-input v-model="inputDown" placeholder="请输入下限"
    style="width: 140px; height: 20px;"></el-input>
  </div>
  <br>
  <el-row style="text-align: center">
    <el-button type="primary"
    round @click="setThresholdValue"
    style="background-color: transparent;"
    >设置</el-button>
    <el-button type="success" plain style="background-color: transparent;"
    >{{this.conState}}</el-button>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'con-jour',
  mounted() {
    setInterval(() => {
      this.$http
        .get('http://115.28.187.9:8005/intfa/queryData/16067968')
        .then((res) => {
          if (res.data) {
            for (let i = 0; i < res.data.entity.length; i += 1) {
              this.options[i].label = res.data.entity[i].eName;
              this.options[i].myValue = res.data.entity[i].eValue;
              this.options[i].value = i;
            }
          }
        })
        .catch();
      if (this.stateFlag === 1) {
        if (this.inputUp !== '' && this.inputDown !== '' && this.factor !== '') {
          this.conState = '成功';
          this.stateFlag = 0;
        } else {
          this.conState = '失败';
          this.stateFlag = 0;
        }
      }
      if (this.conState === '成功' && this.setFlag === 1) {
        if (this.inputUp - this.options[this.factor].myValue < 0) {
          this.$alert(this.options[this.factor].label.toString() + '超出上限', '消息提示框',
            { confirmButtonText: '确定' });
          this.setFlag = 0;
        } else if (this.inputDown - this.options[this.factor].myValue > 0) {
          this.$alert(this.options[this.factor].label.toString() + '低于上限', '消息提示框',
            { confirmButtonText: '确定' });
          this.setFlag = 0;
        } else {
          console.log(typeof this.options[this.factor].label);
        }
      }
    }, 2000);
  },
  data() {
    return {
      inputUp: '',
      inputDown: '',
      factor: '',
      setFlag: 0,
      stateFlag: 0,
      conState: '状态',
      options: [{
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }, {
        value: '',
        label: '',
        myValue: 0,
      }],
    };
  },
  methods: {
    setThresholdValue() {
      this.stateFlag = 1;
      this.setFlag = 1;
    },
  },
};
</script>

<style>
.con-jour {
  height: 100%;
  width: 100%;
}
.con-title p {
  height: 50%;
  color: black;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 2px 2px #092b88;
  font-size: 20px;
}
.el-low {
  width: 100%;
}
</style>
