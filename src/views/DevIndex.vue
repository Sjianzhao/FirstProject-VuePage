<template>
  <div class="Divlist">
    <br>
    <el-select v-model="factorDevList" @change="setId"
    placeholder="设备列表"
    style="width: 110px; height: 20px;">
      <el-option v-for="item in ListNumber"  :key="item.value"
        :label="item.DivID" :value="item.DivID">
      </el-option>
    </el-select>
  </div>
</template>

<script >
export default {
  name: 'DevList',
  data() {
    return {
      ListNumber: [],
      // 用于存储最终排序好了的设备ID
      EleList: [],
      DevListId: [],
      loginForm: {
        username: '9162900',
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
    setTimeout(() => {
      // 获取token
      this.$http
        .post('http://47.105.215.208:8005/login', {
          username: this.loginForm.username,
          password: this.loginForm.password,
        }).then((response) => {
          if (response.data.token) {
            console.log(response.data.token);
            sessionStorage.setItem('username', this.loginForm.username);
            sessionStorage.setItem('password', this.loginForm.password);
            sessionStorage.setItem('token', response.data.token);
          }
        }).catch();
      // 获取用户名  9162900
      const username = sessionStorage.getItem('username');
      this.$http
        //  获取用户信息
        .get(`http://47.105.215.208:8005/user/${username}`, {
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
                  .get(`http://47.105.215.208:8005/data/${device.facId}`, {
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
              for (let j = 0; j < this.EleList.length; j += 1) {
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
