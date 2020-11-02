<template>
    <div>
       <TopPhoto bgImg="services-img.jpg" />

<BreadCrumb current-page="Services"></BreadCrumb>

   <!-- services start -->
           <div class="container">

            <div class="title mb-3">
              <h1>{{$t('ourServices')}}</h1>
              <hr />
              <p class="mt-2 mb-2">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
              </p>
            </div>

           <div class="row">

  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="service in services" :key="service.id">
      <nuxt-link :to="localePath(`/service/${service.slug}`)">
            <div class="service text-center">
                    <img :src="service.service_icon" class="mt-3 mb-3" :alt="service.image_alt" :title="service.image_title">
                    <h3 class="mt-3 mb-3">{{service.name}}</h3>
                    <p class="mb-4">
                      {{service.small_description}}
                    </p>
                  </div>
      </nuxt-link>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

           </div>
       </div>
   <!-- services end -->

   <!-- Schedule Appointment Today start -->
         <div class="schedule position-relative text-center text-white pt-3 pb-3">
           <div class="overlay"></div>
            <div class="container schedule-content position-relative">
              <h3 class="mt-3 mb-3">{{$t('ScheduleAppointmentToday')}}</h3>
            <p class="mb-4">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its using ‘Content here, content here’, making it look like readable English.
            </p>

            <div class="row">
              <div class="col-md-4 col-4">
                <div class="box text-center">
                  <i class="fas fa-search fa-3x"></i>
                  <h5 class="mt-3">{{$t('SearchDoctor')}}</h5>
                </div>
              </div>
                            <div class="col-md-4 col-4">
                <div class="box text-center">
                  <i class="fas fa-mobile-alt fa-3x"></i>
                  <h5 class="mt-3">{{$t('DownloadMobileApp')}}</h5>
                </div>
              </div>
                            <div class="col-md-4 col-4">
                <div class="box text-center border-0">
                  <i class="fas fa-phone-volume fa-3x"></i>
                  <h5 class="mt-3">{{$t('CallUs')}}</h5>
                </div>
              </div>
            </div>
<a href="https://booking.andalusia-dentalcenters.com/" target="_blank">
<div class="btn btn-success mt-4 mb-5"> {{$t('ScheduleAppointment')}} </div>
</a>


            </div>
         </div>
   <!-- Schedule Appointment Today end -->

   <!-- More services start -->
          <div class="container mt-5 mb-5">
            <div class="row">
              <div class="col-md-4" v-for="(moreService, index) in 3" :key="index">
                <div class="more-service text-center">
                  <h3>CARECREDIT</h3>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.
                  </p>
                  <div>{{$t('readMore')}} <i class="fas fa-chevron-right" v-if="$i18n.locale == 'en'"></i> <i class="fas fa-chevron-left" v-if="$i18n.locale == 'ar'"></i></div>
                </div>
              </div>
            </div>
          </div>
   <!-- More services end -->

    </div>
</template>

<script>
import TopPhoto from '@/components/shared/TopPhoto';
import BreadCrumb from "@/components/shared/BreadCrumb";
export default {
    components: {
        TopPhoto,
        BreadCrumb
    },
          data() {
      return {
         swiperOption: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
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
      loopFillGroupWithBlank: true
    },
    // when window width is <= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
        900: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
        }
      }
    },
        async asyncData(context) {
    let services = await context.$axios.get(`/api/services?lang=${context.app.i18n.locale}`);
    console.log('servicesss jj', services.data.data);
    return {
      services: services.data.data
    };
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable.scss';
  ::v-deep{
    .swiper-container-multirow-column > .swiper-wrapper {
    flex-direction: row !important;
    }
    .swiper-slide {
    height: auto !important;
    margin-top: 0px !important;
    }
        .swiper-wrapper {
    padding-bottom: 90px !important;
    }
  }
  .title:lang(ar){
    text-align: right;
  }
  .title{
    p{
      font-size: 16px;
      color: #707070;
    }
  }
  .service{
    padding: 20px;
        margin: 10px;
        box-shadow: 0 0 10px 0 rgba(34, 31, 31, 0.24);
        &:hover{
          background-color: #f3f5f8;
          transition: all 0.9s ease;
        }
    h3{
      font-size: 24px;
      color: #5d5d5d;
      height: 27px;
      overflow: hidden;
    }
    p{
      font-size: 16px;
      color: #737373;
      height: 70px;
    overflow: hidden;
    }
    img{
      width: 95px;
      height: 95px;
    }
  }
  .schedule{
    // background-image: url('~assets/images/services-schedule-bg.jpg') ;
    // background-size: cover;
    background: url('~assets/images/services-schedule-bg.jpg') no-repeat center;
    background-size: cover;
    h3{
      font-size: 32px;
    }
    p{
      font-size: 20px;
      line-height: 36px;
    }
    .btn{
      background-color: transparent;
      border: 1.5px solid $mainColor;
      &:hover{
       background-color: $mainColor;
       color: #fff;
       transition: all 0.9s ease;
      }
    }
  }
  .overlay {
  position: absolute; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.65);
  z-index: 1;
}
.schedule-content{
  z-index: 2;
}
.box{
  border-right: 1px dashed #ffffff45;
  i{
    opacity: 0.8;
  }
  h5{
    font-size: 15.5px;
    font-weight: bold;
  }
}
.more-service{
  h3{
    font-size: 20px;
    font-weight: bold;
    color:#707070;
  }
  p{
    font-size: 16px;
    color:#707070;
    line-height: 30px;
  }
  div{
    color: $mainColor;
  }
}
</style>
