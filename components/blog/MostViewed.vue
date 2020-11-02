<template>
  <div class="row mb-5">
         <div class="col-md-4 pr-1 mb-1">
          <img :src="postMostViewed.image" class="w-100" :title="postMostViewed.image_title" :alt="postMostViewed.image_alt">
         </div>
         <div class="col-md-8">
            <h5 class="text-white text-center"><nuxt-link :to="localePath(`/blog/category/${postMostViewed.category.slug}`)" class="text-white d-block">{{postMostViewed.category.name}}</nuxt-link></h5>
            <h3>{{postMostViewed.title}}</h3>
            <nuxt-link :to="localePath(`/blog/${postMostViewed.slug}`)">
              <ul class="d-flex justify-content-between">
              <li>{{$t('readMore')}}</li>
              <li><i class="fas fa-chevron-right" v-if="$i18n.locale == 'en'"></i> <i class="fas fa-chevron-left" v-if="$i18n.locale == 'ar'"></i></li>
            </ul>
            </nuxt-link>
         </div>
  </div>
</template>

<script>
export default {
   name: 'MostViewed',
   props: ['postMostViewed']
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable.scss';
img{
  height: 117px;
}
   h5{
   background-color: $mainColor;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    max-width: 160px;
    padding: 3px;
   }
   h3{
  font-size: 16px;
  font-weight: 600;
  line-height: 1.88;
  color: #5d5d5d;
   }
   li{
     color: $mainColor;
   }
   div:lang(ar){
     text-align: right;
   }
   .active-link, .exact-active-link {
    background-color: transparent;
}
</style>


