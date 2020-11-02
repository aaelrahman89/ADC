<template>
  <div class="about-us">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-6">
          <div class="about-item text-center">
            <img src="@/assets/images/doctor.svg" alt="doctor">
            <span class="count">15</span>
            <p class="item-description">Practicing Physicians</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-6">
          <div class="about-item text-center">
            <img src="@/assets/images/clinic.svg" alt="doctor">
            <span class="count">10</span>
            <p class="item-description">Wellness Clinics</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-6">
          <div class="about-item text-center">
            <img src="@/assets/images/countries.svg" alt="doctor">
            <span class="count">2</span>
            <p class="item-description">Countries</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-6">
          <div class="about-item text-center">
            <img src="@/assets/images/employee.svg" alt="doctor">
            <span class="count">1000</span>
            <p class="item-description">Employees</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="about-video">
            <div style="overflow:hidden;position: relative; width: 100%;" v-html="About_us.home_about_us_video">
<!--              <iframe width="100%" height="450" src="https://www.youtube.com/embed/EIQpY508lnI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="about-us-content">
            <h2 class="about-us-header">about us</h2>
            <p class="about-us-description">{{About_us.small_description}}</p>
            <nuxt-link :to="localePath('/about-us')" class="btn-main">read more</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  props:['About_us']
}
</script>

<style scoped lang="scss">
.about-us{
  background: url(../../assets/images/aboutus-background.png) fixed no-repeat  center bottom;
  background-size: contain;
  padding-bottom: 90px;
}
.about-item{
  margin: 3rem 0;
  img{
    display: block;
    width: 35px;
    height: 47px;
    margin: 0 auto;
    object-fit: contain;
  }
  .count{
    display: block;
    color: #347b40;
    font-size: 1.2rem;
    font-weight: bolder;
  }
  .item-description{
    color: #3d505d;
    font-weight: 600;
    letter-spacing: 0.21px;
    margin: 0;
  }
}
.about-us-header{
  font-size: 2rem;
  font-weight: bold;
  text-transform: capitalize;
  color: #5d5d5d;
}
.about-us-description{
  color: #737373;
  line-height: 1.87;
  font-size: 1.2rem;
}
.about-us-content{
  position: relative;
  width: 92%;
  margin-left: auto;
  height: 100%;
  .btn-main{
    position: absolute;
    bottom: 1%;
    left: 0;
    &:hover{
      background-color: #347b40;
      color: #fff;
    }
    @media (max-width: 1080px) {
      position: relative;
    }
  }
  @media (max-width: 1080px) {
    width: 100%;
    margin-top: 2rem;
  }
}
</style>
