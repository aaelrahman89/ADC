<template>
    <div>
        <TopPhoto bgImg="about-us.jpg" />
        <BreadCrumb :current-page="$t('menu.clinics')"></BreadCrumb>

             <div class="container">
          <div class="title mb-5">
              <h1>{{$t('OurBranches')}}</h1>
              <hr />
            </div>

        <div class="content mb-5">
            <h5>Andalusia Dental Center - Pasta Branch</h5>
        <p>{{clinics.branch_one}}</p>
        </div>

                <div class="content mb-5">
            <h5>Andalusia Dental Center - Tahlia Branch</h5>
           <p>{{clinics.branch_two}}</p>
        </div>

         </div>

    </div>
</template>

<script>
export default {
     async asyncData(context) {
    let clinics = await context.$axios.get(`/api/about_us?lang=${context.app.i18n.locale}`);
    return {
      clinics: clinics.data.data
    };
  }
}
</script>

<style lang="scss" scoped>
$black: #000;
  h5{
        font-size: 20px;
  color: $black;
  font-weight: bold;
  }
  p{
        font-size: 16px;
  line-height: 1.88;
  color: $black;
  font-weight: 500;
  }
</style>