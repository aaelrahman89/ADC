<template>
  <div class="box pb-5">
      <HomeTitle :title="$t('onlineConsultation')" />
      <div class="container position-relative">

   <div class="subbox">
         <div class="item">
            <i class="fas fa-clinic-medical"></i> <span class="ml-1">Free Online Consultation</span>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

            </p>
         </div>

         <hr />

         <div class="item">
            <i class="fas fa-tooth"></i> <span class="ml-1">Self Checkup </span>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

            </p>
         </div>
   </div>

             <div class="text-center">
               <img src="~assets/images/home-online-consultation.jpg">
             </div>
      </div>
  </div>
</template>

<script>
import HomeTitle from '@/components/shared/HomeTitle';
export default {
  name: 'OnlineConsultation',
   components: {
     HomeTitle
   }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';
$small: 768px;
.box{
  background-color: #f1f6fa;
  background-image: url('~assets/images/onlineconsultation-bg.png');
  width: 100%;
  background-size: 50%;
    background-repeat: no-repeat;
        background-position-x: -200px;
}
img{
    width: 600px;
  height: 400px;
  margin-left: 200px;
    @media screen and (max-width: $small) {
    width: 100%;
  height: auto;
  margin-left: 0px;
  }
}
.subbox{
  position: absolute;
  background-color: #f6f8f9;
  padding: 20px;
    width: 440px;
    height: 300px;
      left: 20px;
    top: 55px;
    -webkit-box-shadow: 0 0 5px 0 rgba(34, 31, 31, 0.24);
-moz-box-shadow: 0 0 5px 0 rgba(34, 31, 31, 0.24);
    box-shadow: 0 0 5px 0 rgba(34, 31, 31, 0.24);
        @media screen and (max-width: $small) {
    width: 100%;
  height: auto;
  left: 0px;
  position: relative;
  top: 0px;
  margin-bottom: 20px;
  }
    .item{
      margin: 30px 0px;
    }
    span{
        font-size: 18px;
  font-weight: 600;
  color: $mainColor;
    }
    i{
      border: 1px solid $mainColor;
      padding: 3px;
      border-radius: 50%;
      color: $mainColor;
    }
    p{
      font-size: 15px;
    line-height: 1.36;
    color: #5d5d5d;
    margin-left: 8%;
    height: 40px;
    overflow: hidden;
    }
    hr{
      width: 88%;
    }
}

.subbox:lang(ar){
  text-align: right;
  right: 20px;
  left: auto;
   @media screen and (max-width: $small) {
    right: 0px;
  }
  p{
     margin-right: 8%;
     margin-left: auto;
     @media screen and (max-width: $small) {
   margin-right: 0%;
  }
  }
}
img:lang(ar){
    margin-right: 200px;
    margin-left: auto;
    @media screen and (max-width: $small) {
   margin-right: 0px;
  }
}
</style>
