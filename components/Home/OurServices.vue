<template>
    <div class="services-box">
         <div class="container-fluid pr-0">
             <div class="row" :class="$i18n.locale =='ar'?'ml-0':'mr-0'">
                 <div class="col-md-2"></div>
                 <div class="col-md-2 mt-5 title">
                     <h5 class="text-capitalize mb-3 text-black">{{$t('ourServices')}}</h5>
                     <p class="mb-3 text-white">
                         Writers and stars of Veep have <br /> responded incredulously.
                     </p>
                     <span class="btn btn-success" role="button"><nuxt-link :to="localePath('/services')" class="text-white">{{$t('readMore')}}</nuxt-link></span>
                 </div>

            <div class="col-md-8" :class="$i18n.locale =='ar'?'pl-0':'pr-0'">
                  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="ourService in ourServices" :key="ourService.id">
        <div class="service">
            <img :src="ourService.photo" class="w-100" :alt="ourService.image_alt" :title="ourService.image_title">
            <div class="service-content">
                <h3>{{ourService.name}}</h3>
            <p>
                {{ourService.small_description}}
            </p>
            <nuxt-link :to="localePath(`/service/${ourService.slug}`)"><span role="button">{{$t('readMore')}}</span></nuxt-link>
            </div>
        </div>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
            </div>

             </div>
         </div>
    </div>
</template>

<script>
export default {
  name: 'OurServices',
        data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 3,
         loop: true,
          autoplay: {delay: 4000},
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
    },
    // when window width is <= 640px
    768: {
      slidesPerView: 2,
      spaceBetweenSlides: 10
    },
        900: {
      slidesPerView: 3,
      spaceBetweenSlides: 10
    }
  }
        }
      }
    },
    props: ['ourServices']
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable.scss';
$small: 768px;
   .services-box{
       background-color: #f1f6fa;
       background-image: url('~assets/images/home-services-bg.jpg');
       background-size: 40% 100%;
       background-repeat: no-repeat;
       padding: 0px 0px 20px 0px;
      @media screen and (max-width: $small) {
    background-image: none;
  }

  .title{
      h5{
          font-weight: bold;
          font-size: 32px;
      }
      p{
          font-size: 15px;
          @media screen and (max-width: $small) {
    color: #000 !important;
  }
      }
  }


   .service{
       background-color: #fff;
       padding-bottom: 10px;
       .service-content{
           padding: 15px;
       }
       img{
           height: 185px;
       }
       h3{
         color: #5d5d5d;
         font-size: 17px;
         font-weight: bold;
         height: 20px;
    overflow: hidden;
       }
       p{
         color: #737373;
         font-size: 15px;
         line-height: 1.87;
    height: 135px;
    overflow: hidden;
       }
       span{
            border: 2px solid $mainColor;
            border-radius: 5px;
            color: $mainColor;
            padding: 6px 20px;
            font-weight: bold;
            &:hover{
                background-color: $mainColor;
                color: #fff;
                transition: all 0.9s ease 0s;	
            }
       }
   }

   }

   ::v-deep{
       .swiper-button-prev, .swiper-button-next{
           background-color: #fff;
           top: 7%;
           color: #bac0c5;
           width: 32px;
           height: 32px;
           border-radius: 50%;
           &:hover{
               background-color: $mainColor;
               color: #fff;
               transition: all 0.9s ease 0s;	
           }
       }
       .swiper-container{
            padding-top: 70px;
       }
       .swiper-button-prev:after, .swiper-button-next:after {
    font-size: 16px;
    font-weight: bold;
       }
       .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: auto;
    right: 55px;
       }
   }

   html:lang(ar){
.services-box{
           text-align: right;
           background-position: right;
       }
       .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
               right: auto;
    left: 55px;
       }
       .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    left: 10px;
    right: auto;
       }
       .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    content: 'prev';
       }
       .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
    content: 'next';
   }
   .title{
        @media screen and (max-width: $small) {
    padding-right: 30px;
  }
   }
   }
      .btn-success{
        background-color: $mainColor;
        border-color: $mainColor;
        &:hover{
          opacity: 0.9;
        }
      }    
</style>