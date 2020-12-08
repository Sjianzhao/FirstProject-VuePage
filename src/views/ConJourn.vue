<template>
<div class="con-jour">
  <el-row>
    <div class="con-title">
      <p style="color: rgb(181,205,231); background: rgba(135,205,252,0.10);">
        <b>阈值设置：</b></p>
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
  <div style="margin: 10px; height: 40px">
    <el-col :span="9" style="font-size: large; margin: 6px;color: white;">一级报警：</el-col>
    <el-input v-model="inputOne"
    type="text"
    placeholder="请输入阈值"
    :rows="2"
    style="width: 140px; height: 20px; background: transparent;">
    </el-input>
  </div>
  <div style="margin: 10px; height: 40px">
    <el-col :span="9" style="font-size: large; margin: 6px;color: white;">二级报警：</el-col>
    <el-input v-model="inputTwo"
      type="text"
      placeholder="请输入阈值"
      :rows="2"
      style="width: 140px; height: 10px;"
    ></el-input>
  </div>
  <div style="margin: 10px; height: 40px">
    <el-col :span="9" style="font-size: large; margin: 6px;color: white;">三级报警：</el-col>
    <el-input v-model="inputThree"
      type="text"
      placeholder="请输入阈值"
      :rows="2"
      style="width: 140px; height: 10px;"
    ></el-input>
  </div>
  <br>
  <el-row style="text-align: center">
    <el-button type="text" plain
    round @click="setThresholdValue"
    style="background-color: transparent; margin-right: 60px;"
    >设置</el-button>
    <el-button type="text" style="background-color: transparent;"
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
        .get('http://47.105.215.208:8005/intfa/queryData/16068992')
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
      this.$http
        .get('http://47.105.215.208:8005/intfa/queryData/16069029')
        .then((res) => {
          if (res.data) {
            for (let i = 0; i < res.data.entity.length; i += 1) {
              this.options[i + 3].label = res.data.entity[i].eName;
              this.options[i + 3].myValue = res.data.entity[i].eValue;
              this.options[i + 3].value = i + 3;
            }
          }
        })
        .catch();
      this.$http
        .get('http://47.105.215.208:8005/intfa/queryData/16069044')
        .then((res) => {
          if (res.data) {
            for (let i = 0; i < res.data.entity.length; i += 1) {
              this.options[i + 5].label = res.data.entity[i].eName;
              this.options[i + 5].myValue = res.data.entity[i].eValue;
              this.options[i + 5].value = i + 5;
            }
          }
        })
        .catch();
      // 按键按下
      if (this.stateFlag === 1) {
        if (this.inputOne !== '' && this.inputTwo !== '' && this.inputThree !== '' && this.factor !== '') {
          this.conState = '阈值设置成功';
          this.stateFlag = 0;
        } else if ((this.inputOne !== '' || this.inputTwo !== '' || this.inputThree !== '') && this.factor !== '') {
          this.conState = '阈值设置失败';
          this.stateFlag = 0;
        } else {
          this.conState = '失败';
          this.stateFlag = 0;
        }
      }
      // 设置成功
      if (this.conState === '阈值设置成功' && this.setFlag === 1) {
        if (this.inputOne - this.options[this.factor].myValue < 0) {
          // this.$alert(this.options[this.factor].label.toString() + '一级警告', '消息提示框',
          //   { confirmButtonText: '确定' });
          this.$message.error({
            title: '一级报警',
            dangerouslyUseHTMLString: true,
            message: '一级报警:<br><br>' + this.options[this.factor].label.toString() + '一级报警',
            // 设置弹窗生命周期
            duration: 55000,
            // 框偏移位置
            offset: 300,
            center: true,
            showClose: true,
          });
          this.setFlag = 0;
          this.BaoJinTime = 0;
          // console.log('一级报警');
        } else if (this.inputTwo - this.options[this.factor].myValue < 0
        && this.inputOne - this.options[this.factor].myValue > 0) {
          // this.$alert(this.options[this.factor].label.toString() + '二级警告', '消息提示框',
          //   { confirmButtonText: '确定' });
          this.$message.warning({
            title: '二级报警',
            dangerouslyUseHTMLString: true,
            message: '二级报警:<br><br>' + this.options[this.factor].label.toString() + '二级报警',
            // 设置弹窗生命周期
            duration: 55000,
            // 框偏移位置
            offset: 300,
            center: true,
            showClose: true,
          });
          this.setFlag = 0;
          this.BaoJinTime = 0;
          // console.log('二级报警');
        } else if (this.inputThree - this.options[this.factor].myValue < 0
        && this.inputTwo - this.options[this.factor].myValue > 0) {
          // this.$alert(this.options[this.factor].label.toString() + '三级警告', '消息提示框',
          //   { confirmButtonText: '确定' });
          this.$message({
            title: '三级报警',
            // 实现换行显示
            dangerouslyUseHTMLString: true,
            message: '三级报警:<br><br>' + this.options[this.factor].label.toString() + '三级报警',
            // 设置弹窗生命周期
            duration: 55000,
            // 框偏移位置
            offset: 300,
            center: true,
            showClose: true,
          });
          this.setFlag = 0;
          this.BaoJinTime = 0;
          // console.log('三级报警');
        } else {
          console.log(typeof this.options[this.factor].label);
        }
      }
      if (this.conState === '阈值设置成功' && this.setFlag === 0 && this.BaoJinTime > 30) {
        this.BaoJinTime = 0;
        this.setFlag = 1;
      }
      this.BaoJinTime += 1;
    }, 2000);
  },
  data() {
    return {
      inputOne: '',
      inputTwo: '',
      inputThree: '',
      BaoJinTime: 0,
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
  text-align:center;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 2px 2px rgba(135,205,252,0.20);
  font-size: 20px;
}
.el-low {
  width: 100%;
}
.el-input__inner {
    -webkit-appearance: none;
    background-color: transparent;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #2f56af;
    box-sizing: border-box;
    color:rgba(251,227,131,0.8);
    display: inline-block;
    font-size: inherit;
    height: 35px;
    line-height:5px;
    outline: 0;
    padding: 0;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
/*alert 成功弹出框样式*/
/* .el-message--warning {
  top: 80px !important;
} */
.el-message .el-icon {
  font-size: 18px;
}
.el-message .el-message__content {
  font-size: 18px;
  font-weight: 700;
}
</style>
