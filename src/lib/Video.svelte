<script lang="ts">
  import { onMount } from "svelte";
  import videojs from "video.js";
  // 厦门卫视
  //   let src =
  //     "rtsp://27.148.219.129:554/live/ch15102712173616484873.sdp?playtype=1&boid=001&backupagent=27.148.219.129:554&clienttype=1&time=20191117235503+08&life=172800&ifpricereqsnd=1&vcdnid=001&userid=5922751202156&mediaid=ch15102712173616484873&ctype=2&TSTVTimeLife=7200&contname=&authid=0&terminalflag=1&UserLiveType=0&stbid=65100499007034400000288CB89A9654&nodelevel=3&AuthInfo=BESeR9eMRDi8RsZJsJm5uQoE7EG%2F%2Bys66FA%2FjZJwHJmaFNaHiO5CgDpob9wb1bQItcJ7NgDL0pa6L%2FNky0Uo7A%3D%3D&bitrate=2000%20RTSP/1.0";

  onMount(() => {
    videojs("videoId", {
      autoplay: "any",
      liveui: true,
      controls: true,
      sources: [
        {
          type: "application/x-mpegURL",
          // src: "https://live3.kxm.xmtv.cn/jtj1/playlist.m3u8", // 厦门大桥出岛方向
          src: "http://www.dalitv.com.tw:4568/live/dali/index.m3u8", // 大立电视台
        },
      ],
    });
  });
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video id="videoId" class="video-js vjs-default-skin vjs-big-play-centered" />

<style scoped>
  #videoId {
    width: 100%;
  }
</style>
