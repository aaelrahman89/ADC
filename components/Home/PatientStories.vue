<template>
  <div class="box position-relative">
    <div class="overlay"></div>
    <div class="content text-center position-relative">
      <h3 class="text-capitalize">{{$t('patientStories')}}</h3>
      <div class="container">
        <div class="row">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="patientStory in patientStories" :key="patientStory.id">
              <div class="story-box position-relative mt-5">
                <div><img :src="patientStory.image" :alt="patientStory.image_alt" :title="patientStory.image_title" /></div>
                <h5 class="mt-3">{{patientStory.username}}</h5>
                <h6>Cardiology Patient</h6>
                <p class="w-75 mx-auto">
                  <span><i class="fas fa-quote-left fa-2x"></i></span>
                  <span class="w-75 overflow-hidden">{{patientStory.description}}</span>
                  <span><i class="fas fa-quote-right fa-2x"></i></span>
                </p>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatientStories',
  props: ['patientStories'],
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 60,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: { delay: 4000 },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          // when window width is <= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 1,
          },
          // when window width is <= 640px
          768: {
            slidesPerView: 2,
            spaceBetweenSlides: 60,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
$small: 768px;
.box {
  background: url("~assets/images/home-patientstories-bg.jpg");
  padding-bottom: 70px;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  .overlay {
    position: absolute; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: rgb(100, 140, 71);
    background: linear-gradient(
      90deg,
      rgba(100, 140, 71, 1) 0%,
      rgba(52, 82, 41, 1) 100%
    );
    opacity: 0.9;
  }
  .content {
    z-index: 3;
    h3 {
      color: #fff;
      padding: 40px 0px 50px 0px;
      font-weight: bold;
      font-size: 30px;
      @media screen and (max-width: $small) {
        padding: 20px 0px 70px 0px;
      }
    }
  }
}
.story-box {
  background-color: #ffffff;
  padding: 50px 40px;
  border-radius: 3px;
  @media screen and (max-width: $small) {
    width: 90%;
    margin: auto;
  }
  h5 {
    color: #737373;
    font-size: 1.2rem;
    font-weight: bold;
    height: 25px;
    overflow: hidden;
  }
  h6 {
    color: #689b4e;
    font-size: 0.8rem;
    font-weight: 600;
    height: 16px;
    overflow: hidden;
  }
  p {
    color: #848484;
    font-size: 0.9rem;
    font-weight: 400;
    height: 120px;
    overflow: hidden;
    @media screen and (max-width: $small) {
      height: 95px;
    }
  }
  div {
    position: absolute;
    left: 25%;
    right: 25%;
    top: -52px;
    z-index: 999999;
    img {
      border-radius: 50%;
      width: 98px;
      height: 98px;
      margin-top: 10px;
    }
  }
}
::v-deep {
  .swiper-container {
    padding-bottom: 80px;
    @media screen and (max-width: $small) {
      padding-bottom: 50px;
    }
  }
  .swiper-pagination {
    bottom: 0px !important;
    @media screen and (max-width: $small) {
      bottom: 0px !important;
    }
  }
  .swiper-pagination-bullet {
    width: 17px !important;
    height: 16px !important;
    background: #fff !important;
    margin: 5px;
  }
  .swiper-pagination-bullet-active {
    background: #cfd5cc !important;
  }
}
</style>
