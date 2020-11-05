<template>
    <footer>
      <div class="container">

          <!--footer start -->
      <div class="row">
              <div class="col-md-4 map col-6 d-none d-sm-block">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2175582809505!2d31.279783314975337!3d29.973177028890973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583866dbed6013%3A0x4589f2adf784fdc7!2sAndalusia%20Hospital%20Maadi!5e0!3m2!1sen!2seg!4v1603184104785!5m2!1sen!2seg" width="100%" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>

             <div class="col-md-2 col-6 d-none d-sm-block">
                 <h5>{{$t('MAINMENU')}}</h5>
                 <ul class="mt-4 links">
                     <li><nuxt-link :to="localePath('/')">{{ $t('menu.home') }}</nuxt-link></li>
                     <li><nuxt-link :to="localePath('/about-us')">{{ $t('menu.about') }}</nuxt-link></li>
                     <li><nuxt-link :to="localePath('/services')">{{ $t('menu.services') }}</nuxt-link></li>
                     <li><nuxt-link :to="localePath('/clinics')">{{ $t('menu.clinics') }}</nuxt-link></li>
                     <li><nuxt-link :to="localePath('/contact')">{{ $t('menu.contact') }}</nuxt-link></li>
                 </ul>
             </div>

                          <div class="col-md-2 col-6 d-none d-sm-block">
                 <h5>{{$t('ourServices')}}</h5>
                 <ul class="mt-4 links">
                     <li v-for="(footerService, index) in footerServices" :key="footerService.id"><nuxt-link v-if="index < 5" :to="localePath(`/service/${footerService.slug}`)">{{footerService.name}}</nuxt-link></li>
                 </ul>
             </div>


             <div class="col-md-4">
                 <ValidationObserver v-slot="{ invalid }">
                     <form @submit.prevent="newsletter">
                 <div class="newsletter position-relative">
                     <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                         <div><input class="form-control" type="text" :placeholder="$t('newsletter')" v-model="email"> <button type="submit" class="btn newsletter-btn" :disabled="invalid"><i class="fas fa-paper-plane"></i></button></div>
                     <small class="text-white"> {{ errors[0] }} </small>
                      </ValidationProvider>
                 </div>
                     </form>

                 </ValidationObserver>
                 <ul class="mt-4 contacts">
                   <li><span :class="$i18n.locale =='ar'?'ml-2':'mr-2'"><i class="fas fa-home"></i></span> Sanabel St., Jeddah, Saudi Arabia.</li>
                   <li><span :class="$i18n.locale =='ar'?'ml-2':'mr-2'"><i class="fas fa-envelope"></i></span> <a href="mailto:clinicssanabel@andalusiaegypt.com">clinicssanabel@andalusiaegypt.com</a></li>
                   <li><span :class="$i18n.locale =='ar'?'ml-2':'mr-2'"><i class="fas fa-phone-alt"></i></span> <a href="tel:+966 126 251 255">+966 126 251 255</a></li>
                 </ul>
             </div>

          </div>
          <!-- footer end -->

           <!-- copyright start -->
              <div class="row copyright">
                  <div class="col-md-10">
                   <Copyright />
                  </div>
                  <div class="col-md-2 text-right">
                      <ul class="footer-social w-75 d-flex justify-content-between" :class="$i18n.locale == 'ar'?'mr-auto':'ml-auto'">
                          <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
                          <li><a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube-square"></i></a></li>
                          <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter-square"></i></a></li>
                          <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram-square"></i></a></li>
                      </ul>
                  </div>
              </div>
           <!-- copyright end -->

      </div>
    </footer>
</template>

<script>
import Copyright from '@/components/shared/Copyright';
import axios from "axios";
export default {
    name: 'Footer',
     components: {
         Copyright
     },
     props: ['footerServices'],
     data(){
         return {
             email: ''
         }
     },
     methods: {
         newsletter(){
             axios.post('api/newsletter',{email:this.email}).then(res => {
                 this.email = '';
             });
         }
     },
       computed: {
  isComplete () {
    return this.email;
  }
}
}
</script>

<style lang="scss" scoped>
$small: 768px;
 footer{
   background: rgb(36,68,23);
   background: linear-gradient(0deg, rgba(36,68,23,1) 0%, rgba(65,124,32,1) 100%);
   padding: 30px 0px 20px 0px;
   h5{
       color: #ffc258;
       font-size: 1rem;
       font-weight: bold;
   }
   .active-link, .exact-active-link{
       all: unset !important;
       color: #fff !important;
   }
   .map{
       @media screen and (max-width: $small) {
    margin-bottom: 20px;
  }
   }
   .links{
   li{
       margin-bottom: 25px;
       font-weight: bold;
       font-size: 0.85rem;
       text-transform: capitalize;
       a{
           color: #fff;
   }
 }
   }

   .contacts{
       li{
           color: #fff;
           margin: 30px 0px;
           span{
               background-color: #5f945c;
               border-radius: 50%;
                   width: 35px;
    height: 35px;
    display: inline-block;
    text-align: center;
    line-height: 35px;
               i{
                   font-size: 1.3rem;
                   position: relative;
    top: 2px;
               }
           }
           a{
               color: #fff;
           }
       }
   }
   .form-control{
       background-color: #5f945c;
       color: #fff;
       border: none;
       border-radius: 2px;
       font-size: 0.9rem;
       width: 90%;
       height: 45px;
       &::placeholder{
          color: #fff;
          opacity: 0.8;
       }
   }
   .newsletter{
       @media screen and (max-width: $small) {
           margin-top: 15px;
       }
       .newsletter-btn{
position: absolute;
    right: 39px;
    top: 4px;
    background-color: #205b02;
    color: #fff;
    border-radius: 3px;
    padding: 0px 5px;
    font-size: 25px;
       }
       span:lang(ar){
           left: 39px;
           right: auto;
       }
   }
   .copyright{
       color: #fff;
       font-size: 0.95rem;
       border-top: 2px solid #326225;
       padding-top: 20px;
         @media screen and (max-width: $small) {
    font-size: 0.8rem;
    text-align: center;
  }
   }
   .footer-social{
        @media screen and (max-width: $small) {
    margin: auto;
  }
       a{
           color: #fff;
           font-size: 1.2rem;
           &:hover{
               opacity: 0.8;
           }
       }
   }
 }
 footer:lang(ar){
     text-align: right;
 }
 .newsletter-btn:lang(ar){
    left: 39px;
    right: auto !important;
 }
</style>
