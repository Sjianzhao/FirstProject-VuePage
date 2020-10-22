<template>
  <div class="hisdata">
    <div class="hisdata-title">
      <div class="hisdata-tit">
        <p style="color: rgb(181,205,231);background: rgba(135,205,252,0.10);"> <b>历史数据</b></p>
      </div>
      <div class="hisdata-bady">
        <el-table
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          class = "hisdata-table" :data.sync="tableData" style="width: 100%" height="100%"
        >
          <el-table-column
          fixed prop="date" label="日期" width="110"
          style="padding: 3px;"
          >
          </el-table-column>
          <el-table-column prop="data0" :label="tableData[0].tableName[0]" width="80">
          </el-table-column>
          <el-table-column prop="data1" :label="tableData[0].tableName[1]" width="80">
          </el-table-column>
          <el-table-column prop="data2" :label="tableData[0].tableName[2]" width="80">
          </el-table-column>
          <el-table-column prop="data3" :label="tableData[0].tableName[3]" width="80">
          </el-table-column>
          <el-table-column prop="data4" :label="tableData[0].tableName[4]" width="80">
          </el-table-column>
          <el-table-column prop="data5" :label="tableData[0].tableName[5]" width="80">
          </el-table-column>
          <el-table-column prop="data6" :label="tableData[0].tableName[6]" width="80">
          </el-table-column>
          <el-table-column prop="data7" :label="tableData[0].tableName[7]" width="80">
          </el-table-column>
          <el-table-column prop="data8" :label="tableData[0].tableName[8]" width="90">
          </el-table-column>
          <el-table-column prop="data9" :label="tableData[0].tableName[9]" width="80">
          </el-table-column>
          <el-table-column prop="data10" :label="tableData[0].tableName[10]" width="80">
          </el-table-column>
          <el-table-column prop="data11" :label="tableData[0].tableName[11]" width="80">
          </el-table-column>
          <el-table-column prop="data12" :label="tableData[0].tableName[12]" width="80">
          </el-table-column>
          <el-table-column prop="data13" :label="tableData[0].tableName[13]" width="80">
          </el-table-column>
          <el-table-column prop="data14" :label="tableData[0].tableName[14]" width="80">
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
        // .get('http://192.168.1.223:8005/intfa/queryData/16069877')
        .get('http://47.105.215.208:8005/intfa/queryData/16069044')
        .then((res) => {
          if (res.data) {
            if (this.hisDateFlag === 0) {
              for (let i = 0; i < res.data.entity.length; i += 1) {
                // this.tableData[0].date = res.data.entity[0].datetime;
                this.tableData[0][`data${i}`] = res.data.entity[i].eValue;
                this.tableData[0].tableName.splice(i, 1, res.data.entity[i].eName);
              }
            } else if (this.hisDateFlag === 1) {
              // this.tableData[1].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[1][`data${i}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 2) {
              // this.tableData[2].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[2][`data${i}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 3) {
              // this.tableData[3].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[3][`data${i}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 4) {
              // this.tableData[4].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[4][`data${i}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 5) {
              // this.tableData[5].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[5][`data${i}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 6) {
              // this.tableData[6].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[6][`data${i}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 7) {
              // this.tableData[7].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[7][`data${i}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 8) {
              // this.tableData[8].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[8][`data${i}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 9) {
              // this.tableData[9].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[9][`data${i}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 10) {
              // this.tableData[10].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[10][`data${i}`] = res.data.entity[i].eValue;
              }
            }
          }
        })
        .catch();
      this.$http
        // .get('http://192.168.1.223:8005/intfa/queryData/15112501')
        .get('http://47.105.215.208:8005/intfa/queryData/16069044')
        .then((res) => {
          if (res.data) {
            if (this.hisDateFlag === 0) {
              this.tableData[0].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[0][`data${i + 9}`] = res.data.entity[i].eValue;
                this.tableData[0].tableName.splice(i + 9, 1, res.data.entity[i].eName);
              }
            } else if (this.hisDateFlag === 1) {
              this.tableData[1].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[1][`data${i + 9}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 2) {
              this.tableData[2].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[2][`data${i + 9}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 3) {
              this.tableData[3].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[3][`data${i + 9}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 4) {
              this.tableData[4].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[4][`data${i + 9}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 5) {
              this.tableData[5].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[5][`data${i + 9}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 6) {
              this.tableData[6].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[6][`data${i + 9}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 7) {
              this.tableData[7].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[7][`data${i + 9}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 8) {
              this.tableData[8].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[8][`data${i + 9}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 9) {
              this.tableData[9].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[9][`data${i + 9}`] = res.data.entity[i].eValue;
              }
            } else if (this.hisDateFlag === 10) {
              this.tableData[10].date = res.data.entity[0].datetime;
              for (let i = 0; i < res.data.entity.length; i += 1) {
                this.tableData[10][`data${i + 9}`] = res.data.entity[i].eValue;
              }
            }
          }
        })
        .catch();
      const date = new Date();
      this.hisDataTimeMin = date.getMinutes();
      this.hisDataTimeSec = date.getSeconds();
      if (this.hisDataTimeMin % 10 === 9) {
        this.acquireDataFlag = 1;
      } if (this.hisDataTimeMin % 10 === 0 && this.acquireDataFlag === 1) {
        this.acquireDataFlag = 0;
        this.hisDateFlag += 1;
      } if (this.hisDateFlag === 11) {
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
          tableName: [
            '---', '---', '---', '---', '---', '---', '---', '---',
            '---', '---', '---', '---', '---', '---'],
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
        },
      ],
    };
  },
  methods: {
  },
  created() {
  },
};
</script>

<style scoped>
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
  text-align: center;
  font-size: 20px;
  margin: 2px;
  box-shadow: 1px 1px 2px 2px  rgba(135,205,252,0.20);
  font-size: 20px;
  background: rgba(135,205,252,0.10);
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
  background-color: transparent;
}
.el-table::before {
  height: 0;
}
.el-table >>> th {
  background-color: rgba(135,205,252,0.10) !important;
  color: black;
  padding-top: 2px;
}
.el-table >>> tr {
  border: 0;
  color:rgba(251,227,131,0.8);
  background-color: transparent!important;
}
.el-table >>> tr:hover td {
  background-color: transparent;
  padding-top: 2px;
}
.el-table >>> tr:nth-child(2n+1) {
  background-color: transparent!important;
  color:rgba(139, 159, 179, 0.8);
  padding-top: 2px;
}
.el-table >>> td {
  border: 0;
  padding: 6px;
}
.el-table >>>.el-table__fixed::before {
  height: 0;
}
.el-pagination {
  background: transparent;
}
.el-pagination >>> .el-pagination__total {
  color: white;
}
.el-pagination >>> .btn-prev {
  color: white!important;
  background: transparent;
  border: 2px solid white;
}
.el-pagination >>> .el-pager .number {
  color: white!important;
  background: transparent;
  border: 2px solid white;
}
.el-pagination >>> .btn-next {
  color: white!important;
  background: transparent;
  border: 2px solid white;
}
.el-pagination >>> .el-pagination__jump {
  color: white!important;
  background: transparent;
}
</style>
