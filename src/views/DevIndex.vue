<template>
  <div class="Divlist">
    <br>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link" style="color : #174d69;">
        <pre>   设备列表<i class="el-icon-arrow-down el-icon--right"></i></pre>
      </span>
      <el-dropdown-menu  slot="dropdown">
        <el-dropdown-item v-for="DivNumber in ListNumber" :key="DivNumber.value"
        :value="DivNumber.DivID">{{DivNumber.DivID}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'DevList',
  data() {
    return {
      ListNumber: [
        {
          value: 1,
          DivID: '16061101',
        }, {
          value: 2,
          DivID: '16061102',
        }, {
          value: 3,
          DivID: '16061103',
        }, {
          value: 4,
          DivID: '16061104',
        }, {
          value: 5,
          DivID: '16061105',
        }, {
          value: 6,
          DivID: '16061106',
        },
      ],
    };
  },
};
</script>

<style>
.Divlist {
  width: 100%;
  height: 100%;
}

</style>
