<template>
  <el-button type="text" class="setting-button0" @mouseup.native="stop(0)"
        @mousedown.native="start(0, 21)" icon="el-icon-arrow-up">
      </el-button>
      <el-button type="text" class="setting-button1" @mouseup.native="stop(0)"
        @mousedown.native="start(0, 22)" icon="el-icon-arrow-down">
      </el-button>
      <el-button type="text" class="setting-button2" @mouseup.native="stop(0)"
        @mousedown.native="start(0, 23)" icon="el-icon-arrow-left">
      </el-button>
      <el-button type="text" class="setting-button3" @mouseup.native="stop(0)"
        @mousedown.native="start(0, 24)" icon="el-icon-arrow-right">
      </el-button>
      <el-button type="text" class="setting-button4" @mouseup.native="stop(0)"
        @mousedown.native="start(0, 11)" icon="el-icon-zoom-in" >
      </el-button>
      <el-button type="text" class="setting-button5" @mouseup.native="stop(0)"
        @mousedown.native="start(0, 12)" icon="el-icon-zoom-out" >
      </el-button>
      <el-button type="text" class="setting-button6"
        @mousedown.native="setPreset(0, 39)" icon="el-icon-circle-plus-outline">
      </el-button>
      <el-button type="text" class="setting-button7"
        @mousedown.native="setPreset(0, 8)" icon="el-icon-circle-check">
      </el-button>
      <el-button type="text" class="setting-button8"
        @mousedown.native="setPreset(0, 9)" icon="el-icon-circle-close">
      </el-button>
</template>




<style>
.setting-button0 {
  position: absolute;
  right: 35px;
  top: 25px;
  background: transparent;
  padding: 0px;
  margin: 2px;
}
.setting-button1 {
  position: absolute;
  right: 35px;
  top: 85px;
  background: transparent;
  padding: 0px;
  margin: 2px;
}
.setting-button2 {
  position: absolute;
  right: 65px;
  top: 55px;
  background: transparent;
  padding: 0px;
  margin: 2px;
}
.setting-button3 {
  position: absolute;
  right: 5px;
  top: 55px;
  background: transparent;
  padding: 0px;
  margin: 2px;
}
.setting-button4 {
  position: absolute;
  right: 65px;
  top: 5px;
  background: transparent;
  padding: 0px;
  margin: 2px;
}
.setting-button5 {
  position: absolute;
  right: 5px;
  top: 5px;
  background: transparent;
  padding: 0px;
  margin: 2px;
}
.setting-button6 {
  position: absolute;
  right: 35px;
  top: 55px;
  background: transparent;
  padding: 0px;
  margin: 2px;
}
.setting-button7 {
  position: absolute;
  right: 65px;
  top: 105px;
  background: transparent;
  padding: 0px;
  margin: 2px;
}
.setting-button8 {
  position: absolute;
  right: 5px;
  top: 105px;
  background: transparent;
  padding: 0px;
  margin: 2px;
}
</style>