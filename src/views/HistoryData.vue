<template>
  <div class="hisdata">
    <div class="hisdata-title">
      <div class="hisdata-tit">
        <p> <b>历史数据</b></p>
      </div>
      <div class="hisdata-bady">
        <el-table
          class = "hisdata-table" :data.sync="tableData" style="width: 100%" height="100%"
        >
          <el-table-column
          fixed prop="date" label="日期" width="98"
          style="padding: 5px"
          >
          </el-table-column>
          <el-table-column prop="data0" :label="tableData[0].tableName[0]" width="90">
          </el-table-column>
          <el-table-column prop="data1" :label="tableData[0].tableName[1]" width="90">
          </el-table-column>
          <el-table-column prop="data2" :label="tableData[0].tableName[2]" width="90">
          </el-table-column>
          <el-table-column prop="data3" :label="tableData[0].tableName[3]" width="90">
          </el-table-column>
          <el-table-column prop="data4" :label="tableData[0].tableName[4]" width="90">
          </el-table-column>
          <el-table-column prop="data5" :label="tableData[0].tableName[5]" width="90">
          </el-table-column>
          <el-table-column prop="data6" :label="tableData[0].tableName[6]" width="90">
          </el-table-column>
          <el-table-column prop="data7" :label="tableData[0].tableName[7]" width="90">
          </el-table-column>
          <el-table-column prop="data8" :label="tableData[0].tableName[8]" width="90">
          </el-table-column>
          <el-table-column prop="data9" :label="tableData[0].tableName[9]" width="90">
          </el-table-column>
          <el-table-column prop="data10" :label="tableData[0].tableName[10]" width="90">
          </el-table-column>
          <el-table-column prop="data11" :label="tableData[0].tableName[11]" width="90">
          </el-table-column>
          <el-table-column prop="data12" :label="tableData[0].tableName[12]" width="90">
          </el-table-column>
          <el-table-column prop="data13" :label="tableData[0].tableName[13]" width="90">
          </el-table-column>
          <el-table-column prop="data14" :label="tableData[0].tableName[14]" width="90">
          </el-table-column>
          <el-table-column prop="data15" :label="tableData[0].tableName[15]" width="90">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hisdata',
  mounted() {
    setInterval(() => {
      this.$http
        .get('http://115.28.187.9:8005/intfa/queryData/16067968')
        .then((res) => {
          if (res.data) {
            if (this.hisDateFlag === 0) {
              this.tableData[0].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[0][`data${i}`] = res.data.entity[i].eValue;
                this.tableData[0].tableName.splice(i, 1, res.data.entity[i].eName);
              }
            } else if (this.hisDateFlag === 1) {
              this.tableData[1].date = res.data.entity[1].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[1][`data${i}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 2) {
              this.tableData[2].date = res.data.entity[2].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[2][`data${i}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 3) {
              this.tableData[3].date = res.data.entity[3].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[3][`data${i}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 4) {
              this.tableData[4].date = res.data.entity[4].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[4][`data${i}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 5) {
              this.tableData[5].date = res.data.entity[5].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[5][`data${i}`] = res.data.entity[i].eValue;
              }
            }
          }
        })
        .catch();
      const date = new Date();
      this.hisDataTimeMin = date.getMinutes();
      this.hisDataTimeSec = date.getSeconds();
      if (this.hisDataTimeMin % 3 === 2) {
        this.acquireDataFlag = 1;
      } if (this.hisDataTimeMin % 3 === 0 && this.acquireDataFlag === 1) {
        this.acquireDataFlag = 0;
        this.hisDateFlag += 1;
      } if (this.hisDateFlag === 6) {
        this.hisDateFlag = 0;
      }
    }, 10000);
  },
  data() {
    return {
      hisDataTimeMin: 0,
      hisDataTimeSec: 0,
      hisDateFlag: 0,
      acquireDataFlag: 0,
      tableData: [
        {
          date: '',
          data0: '',
          data1: '',
          data2: '',
          data3: '',
          data4: '',
          data5: '',
          data6: '',
          data7: '',
          data8: '',
          data9: '',
          data10: '',
          data11: '',
          data12: '',
          data13: '',
          data14: '',
          data15: '',
          tableName: [
            '---', '---', '---', '---', '---', '---', '---', '---',
            '---', '---', '---', '---', '---', '---', '---', '---'],
        }, {
          date: '',
          data0: '',
          data1: '',
          data2: '',
          data3: '',
          data4: '',
          data5: '',
          data6: '',
          data7: '',
          data8: '',
          data9: '',
          data10: '',
          data11: '',
          data12: '',
          data13: '',
          data14: '',
          data15: '',
        }, {
          date: '',
          data0: '',
          data1: '',
          data2: '',
          data3: '',
          data4: '',
          data5: '',
          data6: '',
          data7: '',
          data8: '',
          data9: '',
          data10: '',
          data11: '',
          data12: '',
          data13: '',
          data14: '',
          data15: '',
        }, {
          date: '',
          data0: '',
          data1: '',
          data2: '',
          data3: '',
          data4: '',
          data5: '',
          data6: '',
          data7: '',
          data8: '',
          data9: '',
          data10: '',
          data11: '',
          data12: '',
          data13: '',
          data14: '',
          data15: '',
        }, {
          date: '',
          data0: '',
          data1: '',
          data2: '',
          data3: '',
          data4: '',
          data5: '',
          data6: '',
          data7: '',
          data8: '',
          data9: '',
          data10: '',
          data11: '',
          data12: '',
          data13: '',
          data14: '',
          data15: '',
        }, {
          date: '',
          data0: '',
          data1: '',
          data2: '',
          data3: '',
          data4: '',
          data5: '',
          data6: '',
          data7: '',
          data8: '',
          data9: '',
          data10: '',
          data11: '',
          data12: '',
          data13: '',
          data14: '',
          data15: '',
        },
      ],
    };
  },
  methods: {
  },
  created() {
    this.$http
      .get('http://115.28.187.9:8005/intfa/queryData/16067968')
      .then((res) => {
        if (res.data) {
          for (let i = 0; i < res.data.entity.length; i += 1) {
            this.tableData[0].tableName[i] = res.data.entity[i].eName;
          }
        }
      })
      .catch();
  },
};
</script>

<style>
.hisdata {
  width: 100%;
  height: 100%;
  display: flex;
}
.hisdata-title {
  width: 100%;
  height: 100%;
  float: left;
}
.hisdata-tit {
  width: 100%;
  height: 7%;
  margin: 0;
  padding: 0px;
}
.hisdata-tit p {
  color: black;
  text-align: center;
  font-size: 20px;
  margin: 2px;
}
.hisdata-bady {
  width: 100%;
  height: 93%;
  margin: 0;
}
.hisdata-bady p {
  color: black;
  text-align: center;
  margin: 2px;
}
.hisdata-table{
  size: mini;
}
</style>
