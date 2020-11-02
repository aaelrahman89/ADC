<template>
  <div>
    <Video :Video="Video"></Video>
    <div class="container hold-booking">
      <BookingBox :hospitals="hospitals"></BookingBox>
    </div>
    <AboutUs :About_us="About_us"></AboutUs>
    <OurServices :ourServices="ourServices" />
    <OurDoctors :ourDoctors="ourDoctors"></OurDoctors>
    <OnlineConsultation />
    <Offer></Offer>
    <PatientStories :patientStories="patientStories" />
    <div class="hold-contact-us">
      <HomeTitle title="Contact us"/>
      <GeneralContactUs></GeneralContactUs>
    </div>
  </div>
</template>

<script>
import Video from '@/components/Home/Video';
import AboutUs from '@/components/Home/AboutUs';
import OnlineConsultation from '@/components/Home/OnlineConsultation';
import PatientStories from '@/components/Home/PatientStories';
import OurServices from "@/components/Home/OurServices";
import OurDoctors from "@/components/Home/OurDoctors";
import Offer from "@/components/Home/Offer";
import HomeTitle from "@/components/shared/HomeTitle";

import BookingBox from "@/components/Home/BookingBox";
import GeneralContactUs from "@/components/shared/GeneralContactUs";
export default {
  components: {
    GeneralContactUs,
    BookingBox,
    HomeTitle,
    Offer,
    OurServices,
    OurDoctors,
    Video,
    AboutUs,
    OnlineConsultation,
    PatientStories,
  },
  async asyncData(context) {
    let ourServices = await context.$axios.get(`/api/services?lang=${context.app.i18n.locale}`);
    let ourDoctors = await context.$axios.get(`/api/doctors?lang=${context.app.i18n.locale}`);
    let patientStories = await context.$axios.get(`/api/testimonials?lang=${context.app.i18n.locale}`);
    let Video = await context.$axios.get(`/api/homepage?lang=${context.app.i18n.locale}`);
    let About_us = await context.$axios.get(`/api/about_us?lang=${context.app.i18n.locale}`);

    // Hospitals (Book Now Form)
    let hospitals;
    if(context.app.i18n.locale == 'ar'){
      hospitals = await context.$axios.get('https://booking.andalusia-dentalcenters.com/OnlineBookingService/api/BusinessUintContract/GetHospitalData?countryId=2&isArabic=true');
    }else{
       hospitals = await context.$axios.get('https://booking.andalusia-dentalcenters.com/OnlineBookingService/api/BusinessUintContract/GetHospitalData?countryId=2&isArabic=false');
    }

    return {
      ourServices: ourServices.data.data,
      patientStories: patientStories.data.data,
      ourDoctors : ourDoctors.data.data,
      Video : Video.data.data,
      About_us : About_us.data.data,
      hospitals: hospitals.data.HospitalList
    };
  }
}
</script>

<style scoped lang="scss">
.hold-booking{
  position: relative;
  margin-top: -8%;
  z-index: 22;
}
.hold-contact-us{
  background: #f7f7f7;
  div{
    padding-bottom: 0 !important;
  }
}
</style>
