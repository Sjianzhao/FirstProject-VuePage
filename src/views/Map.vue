<template>
  <div class="map-contant">
    <div id="container" class="map-contain"></div>
    <el-dialog title= "数据预览" :visible.sync="dialogPreviewVisible" :modal= "false"
      width="300px">
    <el-card class="preview-card">
      <div slot="header">
        <span>设备名称：{{currentDevice.deviceName}}</span>
      </div>
      <div v-if="currentDevice.entity">更新时间：{{currentDevice.entity[0].datetime}}</div>
      <div v-for="(item, index) in currentDevice.entity" :key="index">
        {{`${item.eName}: ${item.eValue} ${item.eUnit}`}}
      </div>
    </el-card>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'map-contant',
  data() {
    return {
      map: null,
      position: [
        {
          longitude: 120.42348, latitude: 36.13225, name: '自动气象站', devicdId: ' ',
        },
      ],
      mapID: 0,
      dialogPreviewVisible: false,
      currentDevice: {},
    };
  },
  methods: {
  },
  mounted() {
    const satellite = new AMap.TileLayer.Satellite();
    const roadNet = new AMap.TileLayer.RoadNet();
    const map = new AMap.Map('container', {
      zoom: 10,
      center: [120.42348, 36.13225],
      viewMode: '3D',
      resizeEnable: true,
      layers: [
        satellite,
        roadNet,
      ],
    });
    const markerIcon = new AMap.Icon({
      size: new AMap.Size(50, 50),
      image: 'http://47.105.215.208:8081/images/onstage/location.png',
      imageSize: new AMap.Size(50, 50),
    });
    const markers = [];
    for (let i = 0; i < this.position.length; i += 1) {
      const marker = new AMap.Marker({
        position: new AMap.LngLat(this.position[i].longitude, this.position[i].latitude),
        icon: markerIcon,
        label: {
          content: this.position[i].name,
          direction: 'top',
        },
      });
      // addrweb.push('http://47.105.215.208:8005/intfa/queryData/');
      // addrweb.push(this.position[i].devicdId);
      // const AddrWeb = addrweb.join('');
      marker.on('click', () => {
        this.dialogPreviewVisible = true;
        this.$http
          .get(`http://47.105.215.208:8005/intfa/queryData/${this.mapID}`)
          .then((res) => {
            this.currentDevice = res.data;
          })
          .catch((error) => console.log(error));
      });
      markers.push(marker);
    }
    map.add(markers);
    this.map = map;
  },
  computed: {
    NewDevID() {
      return this.$store.state.NewDevID;
    },
  },
  watch: {
    NewDevID() {
    //  console.log(this.NewDevID);
      this.mapID = this.NewDevID;
    },
  },
};
</script>
<style  lang="scss" scoped>
.map-contant {
  width: 100%;
  height: 100%;
  .map-contain {
    width: 100%;
    height: 100%;
  }
}

.map-contant::v-deep .amap-logo {
  display: none;
  opacity:0 !important;
}
.map-contant:v-deep .amap-copyright {
  display: none;
  opacity:0 !important;
}
</style>
