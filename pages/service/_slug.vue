<template>
  <div>
     <TopPhoto bgImg="services-img.jpg" />
         <div class="container hold-booking">
      <BookingBox :hospitals="hospitals"></BookingBox>
    </div>

    <div class="container">

    <div class="service-content" v-html="service.description"></div>

    </div>

  </div>
</template>

<script>
import BookingBox from '@/components/Home/BookingBox';
export default {
  layout: 'contactUsLayout',
  components: {
    BookingBox
  },
     async asyncData({ params, $axios, app }) {
  let service = await $axios.$get(`/api/service/${encodeURIComponent(params.slug)}?lang=${app.i18n.locale}`);

    // Hospitals (Book Now Form)
    let hospitals;
    if(app.i18n.locale == 'ar'){
      hospitals = await $axios.get('https://booking.andalusia-dentalcenters.com/OnlineBookingService/api/BusinessUintContract/GetHospitalData?countryId=2&isArabic=true');
    }else{
       hospitals = await $axios.get('https://booking.andalusia-dentalcenters.com/OnlineBookingService/api/BusinessUintContract/GetHospitalData?countryId=2&isArabic=false');
    }

    return {
      service: service.data,
      hospitals: hospitals.data.HospitalList
    }
  },
}
</script>

<style lang="scss">
.service-content{
.subtitle{
  position: relative;
  top: 20px;
    @media screen and (max-width:768px) {
    top: 0px;
  }
}
.title{
  img{
    width: 80px;
    height: 84px;
    @media screen and (max-width:768px) {
    display: none;
  }
  }
}
img.w-100{
  height: 300px;
}
}
</style>
