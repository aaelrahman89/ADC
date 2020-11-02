<template>
    <header>
      <div class="container">
          <div class="row">
              <div class="col-md-3 d-none d-sm-block">
                  <nuxt-link :to="localePath('/')"><img src="~assets/images/logo.png"></nuxt-link>
              </div>
              <div class="col-md-3"></div>
              <div class="col-md-6">
                  <div class="right mt-3">
                      <span class="dark" role="button" @click="darkMode"><i class="fas fa-sun"></i> {{$t('darkmode')}}</span>
                      <span class="hotline" role="button"><a href="tel:16781"><i class="fas fa-phone-alt" v-if="$i18n.locale =='en'"></i> <i class="fas fa-phone" v-if="$i18n.locale =='ar'"></i> 16781</a></span>
                      <span class="zoom" role="button" @click="zoomMinus">A-</span>
                      <span class="zoom" role="button" @click="zoom">A</span>
                      <!-- <span class="zoom" role="button" @click="zoomPlus">A+</span> -->
                      <span class="lang" role="button"><nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')" > <img src="~assets/images/en-flag.png"> </nuxt-link>  <nuxt-link v-if="$i18n.locale !== 'ar'" :to="switchLocalePath('ar')" > <img src="~assets/images/ar-flag.png"> </nuxt-link></span>
                      <span class="login d-none"><i class="fas fa-sign-in-alt"></i> {{$t('login')}}</span>
                  </div>
              </div>
          </div>
      </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
     methods: {
         darkMode(){
             document.querySelector('body').classList.toggle('dark-mode');
         },
         zoomMinus(){
             document.querySelector('*').style.cssText = "font-size: smaller !important;";
         },
         zoomPlus(){
             document.querySelector('*').style.cssText = "font-size: larger !important;";
         },
             zoom(){
             document.querySelector('*').style.cssText = "font-size: inherit !important;";
         }
     }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable.scss';
$small: 768px;
span{
    padding: 0px 8px;
    @media screen and (max-width: $small) {
    padding: 0px;
  }
}
   .dark{
       color: #737373;
       font-size: 17px;
       @media screen and (max-width: $small) {
    display: none;
   }
       i{
           color: #000;
           font-size: 22px;
       }
   }
   .hotline{
       color: $mainColor;
       font-weight: bold;
       font-size: 25px;
       @media screen and (max-width: $small) {
    font-size: 17px;
  }
       a{
           color: $mainColor;
           &:hover{
               opacity: 0.9;
           }
       }
   }
   .zoom{
    width: 30px;
    height: 30px;
    color: #737373;
    border: 1px solid #737373;
    font-weight: bold;
    display: inline-block;
    font-size: 16px;
    padding: 0px 3px;
    text-align: center;
    line-height: 30px;
    @media screen and (max-width: $small) {
    display: none;
   }
   }
   .lang{
           position: relative;
    top: -2px;
    @media screen and (max-width: $small) {
    top: 0px;
  }
    img{
        border-radius: 3px;
        @media screen and (max-width: $small) {
    width: 80%;
  }
    }
   }
   .right{
       text-align: right;
         @media screen and (max-width: $small) {
    display: flex;
    justify-content: space-between;
    margin: 5px 0px !important;
  }
   }
   .right:lang(ar){
       text-align: left;
   }
   .active-link, .exact-active-link{
       background-color: transparent !important;
   }
</style>