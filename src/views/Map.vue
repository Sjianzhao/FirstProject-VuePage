<template>
  <div class="map-contant">
    <div id="container" class="map-contain"></div>
    <el-dialog title= "数据预览" :visible.sync="dialogPreviewVisible" :modal= "false"
      width="300px">
    <el-card class="preview-card">
      <div slot="header">
        <span>设备名称：{{currentDevice1.deviceName}}</span>
      </div>
      <div v-if="currentDevice1.entity">更新时间：{{currentDevice1.entity[0].datetime}}</div>
      <div v-for="(item, index) in currentDevice1.entity" :key="index">
        {{`${item.eName}: ${item.eValue} ${item.eUnit}`}}
      </div>
      <div v-for="(item, index) in currentDevice2.entity" :key="index">
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
          longitude: 109.801488, latitude: 40.678239, name: '昆都仑河公园观测站',
        },
      ],
      dialogPreviewVisible: false,
      currentDevice1: {},
      currentDevice2: {},
    };
  },
  methods: {
  },
  mounted() {
    const satellite = new AMap.TileLayer.Satellite();
    const roadNet = new AMap.TileLayer.RoadNet();
    const map = new AMap.Map('container', {
      zoom: 8,
      center: [109.801488, 40.678239],
      resizeEnable: true,
      layers: [
        satellite,
        roadNet,
      ],
    });
    const markerIcon = new AMap.Icon({
      size: new AMap.Size(50, 50),
      image: 'http://115.28.187.9:8081/images/onstage/location.png',
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
          .get('http://192.168.1.223:8005/intfa/queryData/16069877')
          .then((res) => {
            this.currentDevice1 = res.data;
          })
          .catch((error) => console.log(error));
        this.$http
          .get('http://192.168.1.223:8005/intfa/queryData/15112501')
          .then((res) => {
            this.currentDevice2 = res.data;
          })
          .catch((error) => console.log(error));
      });
      markers.push(marker);
    }
    map.add(markers);
    this.map = map;
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
