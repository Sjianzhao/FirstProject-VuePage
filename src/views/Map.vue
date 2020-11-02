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
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
// import XYZ from 'ol/source/XYZ';
import TileWMS from 'ol/source/TileWMS';
// import OSM from 'ol/source/OSM';
import { Vector as SourceVec } from 'ol/source';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Style, Icon } from 'ol/style';
import { Vector as LayerVec } from 'ol/layer';

export default {
  name: 'container',
  data() {
    return {
      map: null,
      position: [
        {
          longitude: 109.81366, latitude: 40.71558, name: '昆都仑河公园观测站',
        },
      ],
      dialogPreviewVisible: false,
      currentDevice1: {},
      currentDevice2: {},
    };
  },
  mounted() {
    const map = new Map({
      target: 'container',
      // view: new View({
      //   center: [109.801488, 40.678239],
      //   zoom: 16,
      // }),
      view: new View({
        projection: 'EPSG:4326',
        center: [109.81366, 40.71555],
        maxZoom: 19,
        minZoom: 12,
        zoom: 16,
      }),
      layers: [
        new Tile({
          // source: new XYZ({
          //   url: 'http://192.168.1.223:8081/images/map/tiles/{z}/{y}/{x}.png',
          // }),
          // source: new OSM(),
          source: new TileWMS({
            url: 'http://192.168.1.223:8600/geoserver/neimenggu/wms',
            params: {
              LAYERS: 'neimenggu:L18',
              TILED: true,
            },
            serverType: 'geoserver',
          }),
        }),
      ],
    });
    // const markerIcon = new Map.Icon({
    //   size: new Map.Size(50, 50),
    //   image: '../../src/assets/location.png',
    //   imageSize: new Map.Size(50, 50),
    // });
    // const markers = [];
    // for (let i = 0; i < this.position.length; i += 1) {
    //   const marker = new Map.Marker({
    //     position: new Map.LngLat(this.position[i].longitude, this.position[i].latitude),
    //     icon: markerIcon,
    //     label: {
    //       content: this.position[i].name,
    //       direction: 'top',
    //     },
    //   });
    //   map.on('click', () => {
    //     this.dialogPreviewVisible = true;
    //     this.$http
    //       .get('http://192.168.1.223:8005/intfa/queryData/16069877')
    //       .then((res) => {
    //         this.currentDevice1 = res.data;
    //       })
    //       .catch((error) => console.log(error));
    //     this.$http
    //       .get('http://192.168.1.223:8005/intfa/queryData/15112501')
    //       .then((res) => {
    //         this.currentDevice2 = res.data;
    //       })
    //       .catch((error) => console.log(error));
    //   });
    //   markers.push(marker);
    // }
    // map.add(markers);
    const vectorSource = new SourceVec({});
    const iconFeature = new Feature({
      geometry: new Point([109.81158, 40.71659], 'XY'),
    });
    vectorSource.addFeature(iconFeature);
    const iconStyle = new Style({
      image: new Icon({
        // size: new ol.style.Size(50, 50),
        opacity: 0.8,
        // src: '../assets/location.png',
        src: 'http://192.168.1.223:8081/images/onstage/location.png',
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        scale: 0.15,
        // src: '../assets.location.png',
      }),
    });
    map.on('click', () => {
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
    const vectorLayer = new LayerVec({
      source: vectorSource,
      style: iconStyle,
    });
    map.addLayer(vectorLayer);
    this.map = map;
  },
  methods: {
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
    position: relative;
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
