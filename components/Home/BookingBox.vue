<template>
  <div class="booking">
    <div class="row">
      <div class="col-12">
        <h1 class="heading-booking">{{$t('menu.booknow')}}</h1>
      </div>
            <div class="col-md-3 pr-1 pl-1">
        <h4 class="sub-heading-booking">{{$t('bookNowForm.choosehospital')}}</h4>
        <select class="select-option" @change="onChangeHospital($event.target.value)">
          <option selected disabled>{{$t('bookNowForm.SelectHospital')}}</option>
          <option v-for="hospital in hospitals" :key="hospital.HospitalID" :value="hospital.HospitalID">{{hospital.HospitalName}}</option>
        </select>
      </div>
      <div class="col-md-3 pr-1 pl-1">
        <h4 class="sub-heading-booking">{{$t('bookNowForm.choosespeciality')}}</h4>
        <select class="select-option" @change="onChangeSpeciality($event.target.value)">
          <option selected disabled>{{$t('bookNowForm.SelectSpeciality')}}</option>
          <option v-for="speciality in specialities" :key="speciality.SpecialtyID" :value="speciality.SpecialtyID">{{speciality.SpecialtyName}}</option>
        </select>
      </div>
      <div class="col-md-2 pr-1 pl-1">
        <h4 class="sub-heading-booking">{{$t('bookNowForm.chooseservice')}}</h4>
        <select class="select-option" @change="onChangeService($event.target.value)">
          <option selected disabled>{{$t('bookNowForm.SelectService')}}</option>
          <option v-for="service in services" :key="service.ClinicTagID" :value="service.ClinicTagID">{{service.ClinicTagName}}</option>
        </select>
      </div>
      <div class="col-md-2 pr-1 pl-1">
        <h4 class="sub-heading-booking">{{$t('bookNowForm.choosedoctor')}}</h4>
        <select class="select-option" @change="onChangeDoctor($event.target.value)">
          <option selected disabled>{{$t('bookNowForm.SelectDoctor')}}</option>
          <option v-for="doctor in doctors" :key="doctor.PhysicianID" :value="doctor.PhysicianName">{{doctor.PhysicianName}}</option>
        </select>
      </div>
      <div class="col-md-2 pr-1 pl-1">
        <h4 class="sub-heading-booking sub-heading-search">search</h4>
        <span role="button" @click="search"><button class="search-btn">search</button></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "BookingBox",
props: ['hospitals'],
data(){
  return {
    specialities: [],
    services: [],
    doctors: [],
    hospitalId: '',
    specialityId: '',
    serviceId: '',
    doctorName: ''
  }
},
methods: {
  onChangeHospital(id){
    this.hospitalId = id;
    if(this.$i18n.locale == 'ar'){
    this.$axios.$get(`https://booking.andalusia-dentalcenters.com/OnlineBookingService/api/Speciality/GetClinicSpecialtyData?isArabic=true&hospitalIDs=${id}`)
    .then(res => this.specialities = res.SpecialityList );
    }else{
    this.$axios.$get(`https://booking.andalusia-dentalcenters.com/OnlineBookingService/api/Speciality/GetClinicSpecialtyData?isArabic=false&hospitalIDs=${id}`)
    .then(res => this.specialities = res.SpecialityList );
    }
  },
    onChangeSpeciality(id){
    this.specialityId = id;
    if(this.$i18n.locale == 'ar'){
    this.$axios.$get(`https://booking.andalusia-dentalcenters.com/OnlineBookingService/api/ClinicReservationContract/GetPublishClinicTags?hospitalIDs=${this.hospitalId}&specialityId=${id}&isArabic=true`)
    .then(res => this.services = res.ClinicTagList );
    }else{
          this.$axios.$get(`https://booking.andalusia-dentalcenters.com/OnlineBookingService/api/ClinicReservationContract/GetPublishClinicTags?hospitalIDs=${this.hospitalId}&specialityId=${id}&isArabic=false`)
    .then(res => this.services = res.ClinicTagList );
    }
  },
    onChangeService(id){
    this.serviceId = id;
    if(this.$i18n.locale == 'ar'){
    this.$axios.$get(`https://booking.andalusia-dentalcenters.com/OnlineBookingService/api/DoctorCustomized/GetPhysicianData?hospitalIDs=${this.hospitalId}&specialtyID=${this.specialityId}&clinicTagID=${id}&isArabic=true`)
    .then(res => this.doctors = res.PhysicianList );
    }else{
          this.$axios.$get(`https://booking.andalusia-dentalcenters.com/OnlineBookingService/api/DoctorCustomized/GetPhysicianData?hospitalIDs=${this.hospitalId}&specialtyID=${this.specialityId}&clinicTagID=${id}&isArabic=false`)
    .then(res => this.doctors = res.PhysicianList );
    }
  },
   onChangeDoctor(name){
      this.doctorName = name;
   },
   search(){
     if(this.$i18n.locale == 'ar'){
this.$axios.$get(`https://booking.andalusia-dentalcenters.com/OnlineBookingService/api/SEO/GenerateSEOUrl?CountryID=2&HospitalIDs=${this.hospitalId}&ClinicTagID=${this.serviceId}&DoctorName=${this.doctorName}&SupervisoryList=%5B%5D&VisitingDoctorID=&SubSpecialtyList=&GenderList=&IsArabic=true&SearchDate=&IsVisitingDoctor=false&MonthID=&SpecialtyID=${this.specialityId}`)
     .then(res => window.location.replace(res))
   }else{
     this.$axios.$get(`https://booking.andalusia-dentalcenters.com/OnlineBookingService/api/SEO/GenerateSEOUrl?CountryID=2&HospitalIDs=${this.hospitalId}&ClinicTagID=${this.serviceId}&DoctorName=${this.doctorName}&SupervisoryList=%5B%5D&VisitingDoctorID=&SubSpecialtyList=&GenderList=&IsArabic=false&SearchDate=&IsVisitingDoctor=false&MonthID=&SpecialtyID=${this.specialityId}`)
     .then(res => window.location.replace(res))
   }
     }
}
}
</script>

<style scoped lang="scss">

</style>
