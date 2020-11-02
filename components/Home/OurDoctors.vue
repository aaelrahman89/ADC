<template>
  <div class="our-doctors">
    <div class="container">
    <HomeTitle class="edit-title" title="Our Doctors" desc="Writers and stars of Veep have responded incredulously to the news an Australian politician required preinstalled stitches way  email client, calendar, mapping program." />
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="homeDoctor in ourDoctors" :key="homeDoctor.id">
          <div class="doctor-card">
            <h3 class="doctor-name">{{homeDoctor.title}}</h3>
            <div class="hold-doctor-img">
              <img :src="homeDoctor.photo" :title="homeDoctor.image_title" :alt="homeDoctor.image_alt" class="img-fluid">
            </div>
            <span class="doctor-specialty">{{homeDoctor.speciality}}</span>
            <p class="doctor-address">{{homeDoctor.address}}</p>
            <nuxt-link :to="localePath('/doctor/doctor_name')" class="book-btn"><span></span>book now</nuxt-link>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

    </div>
  </div>
</template>

<script>
import HomeTitle from "@/components/shared/HomeTitle";

export default {
  name: "OurDoctors",
  props:['ourDoctors'],
  components: {HomeTitle},
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {delay: 6000},
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          // when window width is <= 320px
          320: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2,
            spaceBetweenSlides: 5
          },
          1080: {
            slidesPerView: 3,
            spaceBetweenSlides: 5
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.our-doctors{
  padding-top: 2rem;
}
.edit-title{
  padding-bottom: 0 !important;
}
.small-description{
  width: 75%;
  margin: 2rem auto 0 auto;
  text-align: center;
  line-height: 1.8;
  color: #737373;

}
.swiper{
  padding: 3rem 0 5rem 0;
}

</style>
