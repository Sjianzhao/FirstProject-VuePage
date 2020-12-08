<template>
  <div class="video-contant">
    <ul class="ul-cont">
      <li @click="videoone(this)"><a href="#videocon1">恒源尾矿1</a></li>
      <li @click="videotwo(this)"><a href="#videocon2">恒源尾矿2</a></li>
      <li @click="videothree(this)"><a href="#videocon3">恒源尾矿3</a></li>
      <li @click="videofour(this)"><a href="#videocon4">鸿运矿区</a></li>
      <li @click="videofive(this)"><a href="#videocon5">恒源排洪口</a></li>
    </ul>
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
        flv: 'https://flvopen.ys7.com:9188/openlive/25c44aed13df4a0a9a5b943f58d351c3.flv',
      }, {
        channel: 2,
        flv: 'https://flvopen.ys7.com:9188/openlive/32002089ba5a4a1ab9637525552de558.flv',
      }, {
        channel: 3,
        flv: 'https://flvopen.ys7.com:9188/openlive/d90c09373e0e4efd83a589ddcc9ea832.flv',
      }, {
        channel: 4,
        flv: 'https://flvopen.ys7.com:9188/openlive/8c17d4b1e6cc4bb29544da35cf23a831.flv',
      }, {
        channel: 5,
        flv: 'https://flvopen.ys7.com:9188/openlive/e91e0c1247574dc6b381dbc8a7413c23.flv',
      }],
      currentvideo: 'videocon1',
      ClickFlag: 0,
    };
  },
  methods: {
    videoLoad() {
      if (flvjs.isSupported()) {
        for (let i = 0; i < 4; i += 1) {
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
      this.ClickFlag = 0;
    },
    videoone() {
      this.currentvideo = 'videocon1';
      if (flvjs.isSupported()) {
        const video = document.getElementById('videocon1');
        const flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: this.videoList[0].flv,
        });
        flvPlayer.attachMediaElement(video);
        flvPlayer.load();
        flvPlayer.play();
      }
      this.ClickFlag = 1;
    },
    videotwo() {
      this.currentvideo = 'videocon2';
      if (flvjs.isSupported()) {
        const video = document.getElementById(this.currentvideo);
        const flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: this.videoList[1].flv,
        });
        flvPlayer.attachMediaElement(video);
        flvPlayer.load();
        flvPlayer.play();
      }
      this.ClickFlag = 2;
    },
    videothree() {
      this.currentvideo = 'videocon3';
      if (flvjs.isSupported()) {
        const video = document.getElementById(this.currentvideo);
        const flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: this.videoList[2].flv,
        });
        flvPlayer.attachMediaElement(video);
        flvPlayer.load();
        flvPlayer.play();
      }
      this.ClickFlag = 3;
    },
    videofour() {
      this.currentvideo = 'videocon4';
      if (flvjs.isSupported()) {
        const video = document.getElementById(this.currentvideo);
        const flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: this.videoList[3].flv,
        });
        flvPlayer.attachMediaElement(video);
        flvPlayer.load();
        flvPlayer.play();
      }
      this.ClickFlag = 4;
    },
    videofive() {
      this.currentvideo = 'videocon5';
      if (flvjs.isSupported()) {
        const video = document.getElementById(this.currentvideo);
        const flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: this.videoList[4].flv,
        });
        flvPlayer.attachMediaElement(video);
        flvPlayer.load();
        flvPlayer.play();
      }
      this.ClickFlag = 5;
    },
  },
  mounted() {
    this.videoLoad();
    setInterval(() => {
      if (this.ClickFlag === 0) {
        this.videoLoad();
      } else if (this.ClickFlag === 1) {
        this.videoone();
      } else if (this.ClickFlag === 2) {
        this.videotwo();
      } else if (this.ClickFlag === 3) {
        this.videothree();
      } else if (this.ClickFlag === 4) {
        this.videofour();
      } else if (this.ClickFlag === 5) {
        this.videofive();
      }
    }, 300000);
  },
};
</script>

<style>
.video-contant{
  width: 100%;
  display: flex;
  height: 100%;
}
.ul-cont{
  width: 19%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: rgba(135,205,252,0.10);
  overflow: auto;

}
li a{
  display: block;
  color: rgba(218, 215, 223,0.3);
  padding: 4px 4px;
  text-decoration: none;
}
li a:hover:not(.active) {
  background-color: rgba(49, 47, 47,0.2);
  color: white;
}
.many-vedio{
  width: 81%;
  display: flex;
  height: 100%;
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
  height: 80%;
}
</style>
