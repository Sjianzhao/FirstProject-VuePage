<template>
<div class="con-jour">
  <el-row>
    <div class="con-title">
      <p style="color: rgb(181,205,231); background: rgba(135,205,252,0.10);">
        <b>阈值设置：</b></p>
    </div>
  </el-row>
  <el-row style="margin: 5px; height: 20%;">
   <el-col :span="9" style="font-size: large; margin: 6px;color: rgb(150,150,150);">选择要素：</el-col>
    <el-select
    v-model="factor" placeholder="请选择要素"
    style="width: 140px; height: 20px;"
    >
      <el-option v-for="item in options"  :key="item.value"
        :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </el-row>
  <div style="margin: 5px;  height: 20%;">
    <el-col :span="9" style="font-size: large; margin: 6px;color: rgb(150,150,150);">设置上限：</el-col>
    <el-input class="textarea"
     auto-complete="on"
     type="text"
     style="width: 140px; height: 20px;"
     v-model="inputUp"
     placeholder="请输入上限">
    </el-input>
  </div>
  <div style="margin: 5px;  height: 20%;">
    <el-col :span="9" style="font-size: large; margin: 6px;color: rgb(150,150,150);">设置下限：</el-col>
    <el-input v-model="inputDown"
      type="text"
      placeholder="请输入下限"
      :rows="2"
      style="width: 140px; height: 20px;"
    ></el-input>
  </div>
  <el-row style="text-align: center">
    <el-button type="text" plain
    round @click="setThresholdValue"
    style="background-color: transparent;"
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
        // .get('http://192.168.1.223:8005/intfa/queryData/16069877')
        .get(`http://27.223.13.155:8005/intfa/queryData/${this.changeId}`)
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
          this.$alert(this.options[this.factor].label.toString() + '低于下限', '消息提示框',
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
      changeId: 0,
      inputUp: '',
      inputDown: '',
      factor: '',
      setFlag: 0,
      stateFlag: 0,
      conState: '状态',
      options: [{
        value: 'a',
        label: '',
        myValue: 0,
      }, {
        value: 'b',
        label: '',
        myValue: 0,
      }, {
        value: 'c',
        label: '',
        myValue: 0,
      }, {
        value: 'd',
        label: '',
        myValue: 0,
      }, {
        value: 'e',
        label: '',
        myValue: 0,
      }, {
        value: 'f',
        label: '',
        myValue: 0,
      }, {
        value: 'g',
        label: '',
        myValue: 0,
      }, {
        value: ' ',
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
  computed: {
    NewDevID() {
      return this.$store.state.NewDevID;
    },
  },
  watch: {
    NewDevID() {
    //  console.log(this.NewDevID);
      this.changeId = this.NewDevID;
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
</style>
