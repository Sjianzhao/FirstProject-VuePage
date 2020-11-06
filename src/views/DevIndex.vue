<template>
  <div class="Divlist">
    <br>
    <el-select v-model="factorDevList" @change="setId"
    placeholder="设备列表"
    style="width: 110px; height: 20px;">
      <el-option v-for="item in SortDevId"  :key="item.ID"
        :label="item.ID" :value="item.ID">
      </el-option>
    </el-select>
  </div>
</template>

<script >
export default {
  name: 'DevList',
  data() {
    return {
      // 存储最终排序好了的ID
      ListNumber: [{
        DevID: 0,
        value: 0,
      }],
      // 用于存储设备所有信息
      EleList: [],
      // 用于存储提取出来的设备ID
      DevListId: [],
      // 获取设备ID和对应的PM2.5的值进行排序之前
      SortDevId: [{
        ID: '排序中...',
        PM25: 11,
      }],
      ReshTime: 0,
      DevNumber: 0,
      loginForm: {
        username: 'TD',
        password: '123456',
      },
      //  双向绑定的数据
      factorDevList: '',
      usertoken: '',
      flag: 0,
    };
  },
  // 9162900
  mounted() {
    // 对获取到的设备进行排序。
    setInterval(() => {
      // 当设备ID获取到了之后
      if (this.DevListId.length !== 0 && this.ReshTime % 10 === 0) {
        // 每回进来先清空数组中的数据
        while (this.SortDevId.length > 0) {
          this.SortDevId.shift();
        }
        // 获取设备对应的PM2.5
        console.log(1111);
        for (let i = 0; i < this.DevListId.length; i += 1) {
          this.$http
            .get(`http://27.223.13.155:8005/intfa/queryData/${this.DevListId[i]}`)
            .then((res) => {
              if (res.data) {
                // 当设备上有传感器的时候
                if (res.data.entity.length > 5) {
                  this.SortDevId.push({
                    ID: res.data.deviceId,
                    PM25: Number(res.data.entity[5].eValue),
                    // ID: res.data.deviceName,
                  });
                } else {
                  this.SortDevId.push({
                    ID: res.data.deviceId,
                    PM25: 0,
                    // ID: res.data.deviceName,
                  });
                }
              }
              // 排序
              // 必须在这里面进行排序，出去了就不行了
              this.SortDevId.sort((a, b) => b.PM25 - a.PM25);
            })
            .catch();
        }
        // console.log(this.ListNumber);
        // console.log(this.SortDevId);
        // 排序
        // this.SortDevId.sort((a, b) => b.PM25 - a.PM25);
        // console.log(this.SortDevId);
        // for (let j = 1; j < this.DevNumber; j += 1) {
        //   if (this.SortDevPM[j] > this.SortDevPM[j - 1]) {
        //     // 取出要插入的数
        //     // console.log(j);
        //     this.SortId = this.SortDevId[j];
        //     this.SortPM = this.SortDevPM[j];
        //     for (this.BiaoJi = j - 1; this.BiaoJi >= 0; this.BiaoJi -= 1) {
        //       // 把要插入的数和前面每一个数相比较
        //       if (this.SortPM > this.SortDevPM[this.BiaoJi]) {
        //         console.log(3333);
        //         console.log(this.SortzzPM);
        //         this.SortzzPM = this.SortDevPM[this.BiaoJi];
        //         this.SortDevPM[this.BiaoJi + 1] = this.SortzzPM;
        //         this.SortDevId[this.BiaoJi + 1] = this.SortDevId[this.BiaoJi];
        //       } else {
        //         // console.log(4444);
        //         // 找到比自己大的数后果断跳出
        //         break;
        //       }
        //     }
        //     this.SortDevPM[this.BiaoJi + 1] = this.SortPM;
        //     this.SortDevId[this.BiaoJi + 1] = this.SortId;
        //   }
        // }
        // console.log(3333);
      }
      this.ReshTime += 1;
    }, 6000);
    // 登录获取账号里面的设备信息
    setTimeout(() => {
      // 获取token
      this.$http
        .post('http://27.223.13.155:8005/login', {
          username: this.loginForm.username,
          password: this.loginForm.password,
        }).then((response) => {
          if (response.data.token) {
            // console.log(response.data.token);
            sessionStorage.setItem('username', this.loginForm.username);
            sessionStorage.setItem('password', this.loginForm.password);
            sessionStorage.setItem('token', response.data.token);
          }
        }).catch();
      // 获取用户名  TD
      const username = sessionStorage.getItem('username');
      this.$http
        //  获取用户信息
        .get(`http://27.223.13.155:8005/user/${username}`, {
          headers: {
            // 填入 token
            token: sessionStorage.getItem('token'),
          },
        })
        //   返回用户信息
        .then((response) => {
          if (response.status === 200) {
            const { data } = response;// 接收返回数据
            this.$store.commit('userId', { userId: data.id });
            this.EleList = data.devices;//   获取设备信息
            const promiseArr = [];
            this.EleList.forEach((device) => {
              const p = new Promise((resolve) => {
                this.$http
                  .get(`http://27.223.13.155:8005/data/${device.facId}`, {
                    headers: {
                      token: sessionStorage.getItem('token'),
                    },
                  })
                  .then((res) => {
                    device.e6 = res.data.e6;
                    resolve();
                  });
              });
              promiseArr.push(p);//  获取设备的数据
            });
            // Promise 异步操作；
            Promise.all(promiseArr).then(() => {
              this.EleList.sort((a, b) => b.e6 - a.e6);//  对list进行排序
              for (let i = 0; i < this.EleList.length; i += 1) {
                this.DevListId[i] = this.EleList[i].facId;// 获取设备的ID
              }
              this.ListNumber.shift();
              // 第一次先把设备ID送上去，后面再每30S进行一次排序
              for (let j = 0; j < this.EleList.length; j += 1) {
                this.DevNumber += 1;
                this.ListNumber.push({
                  DivID: this.DevListId[j],
                  value: j,
                });
              }
            });
            // this.EleList.push(...data.pests);//  设备的数据最终装入这里
            // console.log(this.DevListId[this.EleList.length - 1]);
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            if (error.response.status === 403) {
              sessionStorage.removeItem('username');//  移除缓存区的用户名
              sessionStorage.removeItem('token');
            }
          }
        });
    }, 2000);
  },
  methods: {
    setId() {
      // // emit发射事件到 transferUser 中，然后父组件中的 transferUser 进行接收
      // this.$emit('transferUser', this.factorDevList);
      //  // NewDevID = this.factorDevList;
      this.$store.commit('NewDevID', { NewDevID: this.factorDevList });
    },
    // compare(property, desc) {
    //   return function (a, b) {
    //     const value1 = a[property];
    //     const value2 = b[property];
    //     if (desc === true) {
    //       // 升序排列
    //       return value1 - value2;
    //     }
    //     // 降序排列
    //     return value2 - value1;
    //   };
    // },
  },
};
</script>

<style>
.Divlist {
  width: 100%;
  height: 100%;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}

</style>
