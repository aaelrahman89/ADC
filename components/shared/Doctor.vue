<template>
  <div class=" doctor-card single-doctor">
    <h3 class="doctor-name">Dr. Ziad Feteha</h3>
    <div class="hold-doctor-img">
      <img src="@/assets/images/doctor.jpg" class="img-fluid">
    </div>
    <span class="doctor-specialty">Cardiology</span>
    <p class="doctor-address">Alshalat   |   AlMaadi   |   Smouha</p>
    <p class="doctor-description">Specialized in Pediatric Dentistry, Cosmetic Dentistry, Endodontics, Periodontics</p>
    <div class="hold-buttons">
      <nuxt-link :to="localePath('/doctors/single')" class="btn-main"><span></span>details</nuxt-link>
      <nuxt-link :to="localePath('/doctor')" class="btn-main btn-green">book now</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Doctor"
}
</script>

<style scoped lang="scss">

.single-doctor{
  width: 100%;
  border: 1px solid transparent;
  background: url("../../assets/images/background-doctor.png") no-repeat;
  border-radius: .2rem;
  margin: 1rem 0;
  .hold-doctor-img{
    width: 130px;
    height: 130px;
  }
  .doctor-specialty{
    color: #f39e25;
  }
  .doctor-address{
    margin-bottom: 1rem;
  }
  .doctor-description{
    width: 95% !important;
    margin: 0 auto;
    text-align: center;
    font-size: .9rem;
    line-height: 1.88;
  }
  .hold-buttons{
    text-align: center;
    .btn-main{
      width: 40%;
      font-size: .8rem;
      display: inline-block;
      margin-right: auto;
      text-align: center;
      @media (max-width: 1200px) {
        width: 90%;
      }
    }
  }
  &:hover{
    transform: scale(1);
    border: 1px solid #4c892d;
  }
}
</style>
