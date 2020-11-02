<template>
  <div class="video">
    <div v-if="!playVideo" class="background-video">
     <div>
       <h1 class="main-header">book with the best dentist in ksa...</h1>
       <img src="@/assets/images/video-icon.png" alt="video-icon" class="img-fluid video-icon" @click="resetVideo">
     </div>
    </div>
    <video controls :autoplay="AutoplayVideo" ref="video">
      <source :src="Video.home_background_video">
    </video>
  </div>
</template>

<script>
export default {
  props:['Video'],
  name: "Video",
  data(){
    return{
      playVideo: false,
      AutoplayVideo: false
    }
  },
  methods:{
    resetVideo(){
      this.playVideo = ! this.playVideo;
      this.AutoplayVideo = true;
      this.$refs.video.play();
      this.$refs.video.onended = () =>{
        this.AutoplayVideo = false;
        this.playVideo = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.video{
  position: relative;
  height: 100vh;
  overflow: hidden;
  .background-video{
    background: linear-gradient(to right, rgba(67, 66, 63, 0.45), rgba(67, 66, 63, 0.45)), url(../../assets/images/background-video.png) 80% 100% no-repeat;
    position: absolute;
    background-size: 105% 100%;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1080px) {
      background-size: cover;
    }
    .main-header{
      color: #fff;
      text-transform: capitalize;
      width: 75%;
      margin: 0 auto;
      text-align: center;
      font-weight: 600;
      letter-spacing: 2px;
    }
    .video-icon{
      display: block;
      margin: 1rem auto;
      width: 40px;
      height: 40px;
      object-fit: contain;
      border-radius: 50%;
      cursor: pointer;
      transition: all ease-in-out .3s;
      &:hover{
        box-shadow:0 0 6px 3px #fff;
      }
    }
  }
  video{
    outline: none;
    width: 100%;
    height: 80%;
  }
}
</style>
