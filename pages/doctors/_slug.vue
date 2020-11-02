<template>
  <div class="doctor-detail">
    <TopPhoto bgImg="doctors.png"></TopPhoto>
    <BreadCrumb current-page="Doctors" sub-page="single" :IsSub=true></BreadCrumb>
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-12">
          <div class="single-doctor-detail">
            <div class="row">
              <div class="col-lg-3 col-12 padding-right">
                <div class="hold-doctor-img">
                  <img src="@/assets/images/doctor.jpg" class="img-fluid">
                </div>
              </div>
              <div class="col-lg-9 col-12 padding-left">
                <div class="for-border">
                  <h3 class="doctor-name"><span class="doctor-specialty-icon"><img src="@/assets/images/icon-doctor-detail.png" class="img-fluid" alt="specialty icon"></span>Dr. Ziad Feteha</h3>
                  <span class="doctor-specialty">General Dentist</span>
                  <p class="doctor-address">Alshalat   |   AlMaadi   |   Smouha</p>
                  <p class="doctor-description">Specialized in Pediatric Dentistry, Cosmetic Dentistry, Endodontics, Periodontics</p>
                  <div class="hold-buttons">
                    <nuxt-link :to="localePath('/doctor')" class="btn-main btn-green btn-doctor-detail">book now</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="about-edu-doctor-detail">
            <h3 class="dash-heading">about</h3>
            <div class="about-section">
              Pediatric dentists are dedicated to the oral health of children from infancy through the teen years. They have the experience and qualifications to care for a child’s teeth, gums, and mouth throughout the various stages of childhood.
              Children begin to get their baby teeth during the first 6 months of life. By age 6 or 7 years, they start to lose their first set of teeth, which eventually are replaced by secondary, permanent teeth. Without proper dental care, children face possible oral decay and disease that can cause a lifetime of pain and complications. Today, early childhood dental caries—an infectious disease—is 5 times more common in children than asthma and 7 times more common than hay fever.
            </div>
            <h3 class="dash-heading">Education</h3>
            <div class="about-section">
              <p>Advanced General Dentistry Programs</p>
              <p>Dentistry - DDS, DMD</p>
              <p>Medical and Health Preparatory Sciences</p>
              <p>Medical Residency Programs</p>
              <p>Public Health and Safety</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-12">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopPhoto from "@/components/shared/TopPhoto"
import BreadCrumb from "@/components/shared/BreadCrumb"
export default {
name: "_slug",
  components:{TopPhoto,BreadCrumb}
}
</script>

<style scoped lang="scss">
.single-doctor-detail{
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #4c892d;
  border-radius: .2rem;
  color: #737373;
  position: relative;
  margin-bottom: 2rem;
  .hold-doctor-img{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 140px;
      height: 140px;
      border-radius: 50%;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      border: solid 1px rgba(183, 183, 183, 0.5);
    }
    @media (max-width: 992px) {
      margin: 1rem 0;
    }
  }
  .doctor-name{
    color: #5d5d5d;
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-top: 1rem;
    .doctor-specialty-icon{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-right: .5rem;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #f2f2f2;
      img{
        object-fit: contain;
        width: 26px;
        height: 26px;
        display: block;
      }
    }
    @media (max-width: 992px) {
      font-size: 1.2rem;
    }
  }
  .doctor-specialty{
    color: #f39e25;
    font-weight: 600;
  }
  .doctor-address{
    font-weight: 600;
    font-size: .8rem;
    margin: .5rem auto;
  }
  .doctor-description{
    width: 95%;
  }
  .btn-doctor-detail{
    position: absolute;
    top: 8%;
    right: 5%;
    margin: 0;
    padding: .3rem 2.3rem;
    @media (max-width: 992px) {
      display: inline-block;
      position: relative;
      top: auto;
      right: auto;
    }
  }
  .for-border{
    border-left: 1px solid #dcdcdc;
    padding-left: 2rem;
    @media (max-width: 992px) {
      border-left: none;
      padding-left: 1rem;
    }
  }
  .padding-left{
    padding-left: 0;
    @media (max-width: 992px) {
      padding-left: 15px;
    }
  }
  .padding-right{
    padding-right: 0;
    @media (max-width: 992px) {
      padding-right: 15px;
    }
  }
}
.about-edu-doctor-detail{
  background: url("../../assets/images/aboutus-background.png") no-repeat center;
  background-size: contain;
  min-height: 500px;
  .about-section{
    width: 97%;
    border-left: 1px solid #93a19b;
    margin-left: auto;
    padding-left: 2rem;
    line-height: 2;
  }
}
html:lang(ar){
  .single-doctor-detail{
    .doctor-name{
      text-align: right;
      .doctor-specialty-icon{
        margin-right: 0;
        margin-left: .5rem;
      }
    }
    .btn-doctor-detail{
      left: 5%;
      right: auto;
      @media (max-width: 992px) {
        left: auto;
      }
    }
    .for-border{
      border-left: none;
      border-right: 1px solid #dcdcdc;
      padding-left: 0;
      padding-right: 2rem;
      @media (max-width: 992px) {
        border-right: none;
        padding-right: 1rem;
      }
    }
    .padding-left{
      padding-right: 0;
      @media (max-width: 992px) {
        padding-right: 15px;
      }
    }
    .padding-right{
      padding-left: 0;
      @media (max-width: 992px) {
        padding-left: 15px;
      }
    }
  }
  .about-edu-doctor-detail{
    .about-section{
      border-left: none;
      border-right: 1px solid #93a19b;
      margin-right: auto;
      padding-left: 0;
      padding-right: 2rem;
    }
  }
}
</style>
