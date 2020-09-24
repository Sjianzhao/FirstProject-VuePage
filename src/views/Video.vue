<template>
  <div class="video-contant">
    <div class="many-vedio" >
      <video
        :id= currentvideo
        controls
        style="object-fit: fill;"
        webkit-playsinline
        playsinline
        x-webkit-airplay="allow"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        x5-video-orientation="portraint"
        class="video-contant"
        autoplay="autoplay"
        muted="muted"
      ></video>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoContant',
  data() {
    return {
      videoList: [{
        channel: 1,
        flv: 'ws://192.168.1.223:8888/rtsp?url=rtsp://admin:XPH123456@192.168.1.220:554/MPEG-4/ch1/main/av_stream',
      }, {
        channel: 2,
        flv: 'https://flvopen.ys7.com:9188/openlive/2843e65ebd5e423f8870146fb16de9c8.flv',
      }, {
        channel: 3,
        flv: 'https://flvopen.ys7.com:9188/openlive/89f4f933c4db4733950deb8ffd0adf40.flv',
      }, {
        channel: 4,
        flv: 'https://flvopen.ys7.com:9188/openlive/1bc373316ab842dcbfb6500b82397048.flv',
      }, {
        channel: 5,
        flv: 'https://flvopen.ys7.com:9188/openlive/c84da35c642f4e28b77254132e2cea11.flv',
      }, {
        channel: 6,
        flv: 'https://flvopen.ys7.com:9188/openlive/e7b16a2e14e74d6789de91714f9ccae1.flv',
      }, {
        channel: 7,
        flv: 'https://flvopen.ys7.com:9188/openlive/b0930a811b144f3dbf8067edadb27b4e.flv',
      }],
      currentvideo: 'videocon1',
      mousrLickEvent: 0,
    };
  },
  methods: {
    videoLoad() {
      if (flvjs.isSupported()) {
        for (let i = 0; i < 1; i += 1) {
          const video = document.getElementById(`videocon${i + 1}`);
          const flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: this.videoList[i].flv,
          });
          flvPlayer.attachMediaElement(video);
          flvPlayer.load();
          flvPlayer.play();
        }
      }
    },
    Register() {
      this.$http.get('http://192.168.1.223:7000/api/login?host=192.168.1.220&port=8000&username=admin&password=XPH123456');
    },
    start(userID, cmd) {
      this.$http.get(`http://192.168.1.223:7000/api/ptzcontrol?userID=${userID}&ptzcommand=${cmd}&stop=0&speed=3`);
    },
    stop(userID) {
      this.$http.get(`http://192.168.1.223:7000/api/ptzcontrol?userID=${userID}&ptzcommand=21&stop=1&speed=3`);
    },
    setPreset(userID, cmd) {
      this.$http.get(`http://192.168.1.223:7000/api/ptzpreset?userID=${userID}&ptzpresetcmd=${cmd}&presetindex=1`);
    },
  },
  mounted() {
    this.videoLoad();
    this.Register();
    setInterval(() => {
      this.videoLoad();
    }, 300000);
  },
};
</script>

<style>
.video-contant{
  width: 100%;
  display: flex;
}
.ul-cont{
  width: 20%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background: #137ee2;
  overflow: auto;
}
.many-vedio{
  width: 100%;
  display: flex;
  position: relative;
}
#videocon1{
  width: 100%;
}
#videocon2{
  width: 100%;
}
#videocon3{
  width: 100%;
}
#videocon4{
  width: 100%;
}
#videocon5{
  width: 100%;
}
#videocon6{
  width: 100%;
  display: flex;
}
.video-content {
  width: 100%;
  height: 100%;
}
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
