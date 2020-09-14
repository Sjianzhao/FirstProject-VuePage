<template>
  <div class="video-contant">
    <ul class="ul-cont">
      <li @click="videoone(this)"><a href="#videocon1">视屏1</a></li>
      <li @click="videotwo(this)"><a href="#videocon2">视屏2</a></li>
      <li @click="videothree(this)"><a href="#videocon3">视屏3</a></li>
      <li @click="videofour(this)"><a href="#videocon4">视屏4</a></li>
      <li @click="videofive(this)"><a href="#videocon5">视屏5</a></li>
      <li @click="videosix(this)"><a href="#videocon6">视屏6</a></li>
      <li @click="videoseven(this)"><a href="#videocon7">视屏7</a></li>
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
        flv: 'https://flvopen.ys7.com:9188/openlive/37dc3bb2e834497280293a778a1133ab.flv',
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
    };
  },
  methods: {
    videoLoad() {
      if (flvjs.isSupported()) {
        for (let i = 0; i < 7; i += 1) {
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
      // console.log(this.currentvideo);
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
    },
    videosix() {
      this.currentvideo = 'videocon6';
      if (flvjs.isSupported()) {
        const video = document.getElementById(this.currentvideo);
        const flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: this.videoList[5].flv,
        });
        flvPlayer.attachMediaElement(video);
        flvPlayer.load();
        flvPlayer.play();
      }
    },
    videoseven() {
      this.currentvideo = 'videocon7';
      console.log(77777);
      if (flvjs.isSupported()) {
        const video = document.getElementById(this.currentvideo);
        const flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: this.videoList[6].flv,
        });
        flvPlayer.attachMediaElement(video);
        flvPlayer.load();
        flvPlayer.play();
      }
    },
  },
  mounted() {
    this.videoLoad();
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
li a{
  display: block;
  color: rgb(8, 3, 3);
  padding: 4px 4px;
  text-decoration: none;
}
li a:hover:not(.active) {
  background-color: rgb(87, 83, 83);
  color: white;
}
.many-vedio{
  width: 80%;
  display: flex;
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
</style>
