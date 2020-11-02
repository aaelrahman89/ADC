<template>
  <div class="about-us">
    <TopPhoto bgImg="about-us.jpg"></TopPhoto>
    <div class="hold-about-info">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12">
            <div class="about-video">
              <div style="overflow:hidden;position: relative; width: 100%;" v-html="About_usPage.home_about_us_video">
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="about-us-content">
              <h2 class="about-us-header">about us</h2>
              <p class="about-us-description">{{About_usPage.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="our-branches">
      <div class="container">
        <div class="row">
          <h2 class="col-12 text-center our-branches-heading">Our branches</h2>
          <div class="col-md-6 col-12">
            <div class="branch-item">
              <h3 class="dash-heading">Andalusia Dental Center - Pasta Branch</h3>
              <p class="description">{{About_usPage.branch_one}}</p>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="branch-item">
              <h3 class="dash-heading">Andalusia Dental Center - Tahlia Branch</h3>
              <p class="description">{{About_usPage.branch_two}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="our-history d-none">
      <h2 class="text-center main-heading">our history</h2>
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="history-item">
              <div class="step step-laptop">1</div>
              <h3 class="sub-heading">smile protection plan</h3>
              <p class="description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                a piece of classical Latin literature from 45 BC1.</p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="history-item">
              <div class="step step-laptop">2</div>
              <h3 class="sub-heading">CARECREDIT</h3>
              <p class="description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                a piece of classical Latin literature from 45 BC1.</p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="history-item">
              <div class="step step-laptop">3</div>
              <h3 class="sub-heading">ACCEPT INSURANCE</h3>
              <p class="description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                a piece of classical Latin literature from 45 BC1.</p>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="history-item">
              <div class="step step-laptop">4</div>
              <h3 class="sub-heading">smile protection plan</h3>
              <p class="description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                a piece of classical Latin literature from 45 BC1.</p>
            </div>
          </div>
        </div>
        <div class="steps">
          <div class="row">
            <div class="col-lg-3">
              <div class="text-center step-item">
                <div class="step">1</div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="text-center step-item">
                <div class="step">2</div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="text-center step-item">
                <div class="step">3</div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="text-center step-item last-item">
                <div class="step">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    </div>
  </div>
</template>

<script>

  import TopPhoto from "@/components/shared/TopPhoto";

  export default {
    name: "index",
    components: {TopPhoto},
    async asyncData(context) {
      let About_us = await context.$axios.get(`/api/about_us?lang=${context.app.i18n.locale}`);
      console.log('about_us', About_us.data.data);
      return {
        About_usPage : About_us.data.data
      };
    }
  }
</script>

<style scoped lang="scss">

  .about-img-paragraph {
    margin: 3rem 0;
    height: 655px;
    position: relative;

    .about-image {
      width: 100%;
      height: 655px;
    }

    .about-paragraph {
      background: #ffffffd9;
      height: 325px;
      width: 50%;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 2rem;
      @media (max-width: 1080px) {
        width: 100%;
        height: auto;
        max-height: 475px;
      }

      h1 {
        font-size: 4rem;
        font-weight: bold;
        text-transform: capitalize;
        @media (max-width: 1080px) {
          font-size: 2rem;
        }
      }

      p {
        line-height: 2;
      }
    }
  }

  .hold-about-info {
    padding: 3rem 0;
  }

  .about-us-header {
    &:after {
      content: "";
      width: 10%;
      display: block;
      height: 3px;
      border-radius: .3rem;
      background: #347b40;
      margin-top: 1.5rem;
    }
  }

  .our-branches {
    color: #fff;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../../assets/images/branch-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding-bottom: 3rem;

    .our-branches-heading {
      margin-top: 3rem;
    }

    .dash-heading {
      font-size: 1rem;
      color: #fff;
    }

    .description {
      line-height: 1.88;
      font-size: .8rem;
    }
  }

  .our-history {
    background: linear-gradient(to top, #234216, rgba(69, 132, 43, 0.81));
    text-align: center;
    color: #fff;
    padding-bottom: 2rem;

    .main-heading {
      text-transform: capitalize;
      padding: 2rem 0;
      font-weight: 600;
      margin: 0;
    }

    .history-item {
      margin: 1rem 0;

      .sub-heading {
        text-align: center;
        text-transform: uppercase;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .description {
        width: 93%;
        margin: 0 auto;
        font-size: .8rem;
        line-height: 1.8;
      }
    }

    .steps {
      @media (max-width: 1080px) {
        display: none;
      }
    }

    .step-item {
      &:after {
        content: "";
        display: inline-block;
        width: 100%;
        height: 2px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 0;
      }
    }

    .step {
      width: 50px;
      height: 50px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ff8a00;
      border-radius: 50%;
      font-size: 1.2rem;
      font-weight: bold;
      margin: 1rem auto;
      position: relative;
      z-index: 2;
    }

    .step-laptop {
      display: none;
      @media (max-width: 1080px) {
        display: flex;
      }
    }

    .last-item {
      &:after {
        display: none;
      }
    }
  }

  html:lang(ar) {
    .about-img-paragraph {
      .about-paragraph {
        text-align: right;
      }
    }

    .our-history {
      .step-item {
        &:after {
          left: auto;
          right: 50%;
        }
      }
    }
  }
</style>
