<template>
  <div class="hold-doctors">
    <TopPhoto bgImg="doctors.png"></TopPhoto>
    <div class="container">
      <div class="booking">
        <div class="row">
          <div class="col-lg-2">
            <h4 class="heading-booking text-center">filter :</h4>
          </div>
          <div class="col-lg-3 col-12">
            <h4 class="sub-heading-booking">choose location</h4>
            <select class="select-option">
              <option>Select</option>
            </select>
          </div>
          <div class="col-lg-2 col-12">
            <h4 class="sub-heading-booking">choose service</h4>
            <select class="select-option">
              <option>Select</option>
            </select>
          </div>
          <div class="col-lg-2 col-12">
            <h4 class="sub-heading-booking">choose doctor</h4>
            <select class="select-option">
              <option>Select</option>
            </select>
          </div>
          <div class="col-lg-3 col-12">
            <h4 class="sub-heading-booking sub-heading-search">search</h4>
            <button class="search-btn">search</button>
          </div>
        </div>
      </div>
    </div>
    <BreadCrumb current-page="Doctors"></BreadCrumb>
    <div class="container">
      <h2 class="dash-heading">doctors</h2>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12" v-for="doctor in 9 " :key="doctor">
          <Doctor></Doctor>
        </div>
        <div class="col-12 text-center">
          <button class="load-more-btn"><span><i class="fas fa-undo-alt"></i></span>load more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopPhoto from "@/components/shared/TopPhoto";
import BreadCrumb from "@/components/shared/BreadCrumb";
import Doctor from "@/components/shared/Doctor";
export default {
  name: "index",
  components: {Doctor, BreadCrumb, TopPhoto}
}
</script>

<style scoped lang="scss">
.booking{
  margin-top: -3rem;
  position: relative;
  z-index: 2;
  .sub-heading-booking{
    @media (max-width: 1080px) {
      font-size: .8rem;
    }
  }
}
.load-more-btn{
  display: block;
  background: transparent;
  border: none;
  margin: 1.5rem auto;
  color: #347b40;
  span{
    display: block;
  }
}
</style>
