<template>
  <div class="mb-5">
    <img :src="post.image" class="w-100" :title="post.image_title" :alt="post.image_alt" />
        <h3 class="text-black mt-4"><nuxt-link :to="localePath(`/blog/${post.slug}`)">{{ post.title }}</nuxt-link></h3>
            <p class="text-black">
      {{ post.excerpt }}
    </p>
    <ul class="d-flex">
      <li><h6 class="text-white"><nuxt-link :to="localePath(`/blog/category/${post.category.slug}`)" class="text-white">{{ post.category.name }}</nuxt-link></h6></li>
      <li class="mt-1 min" :class="$i18n.locale =='ar'?'mr-3':'ml-3'">. 4 min</li>
      <li class="mt-1" :class="$i18n.locale =='ar'?'mr-auto':'ml-auto'"><nuxt-link :to="localePath(`/blog/${post.slug}`)" class="read-more">{{$t('readMore')}} <i class="fas fa-chevron-right" v-if="$i18n.locale == 'en'"></i> <i class="fas fa-chevron-left" v-if="$i18n.locale == 'ar'"></i></nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable.scss';
$small: 768px;
img {
  height: 280px;
  @media screen and (max-width: $small) {
    height: auto;
  }
}
h6 {
  font-size: 16px;
  font-weight: 500;
  background-color: #ff8a00;
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
}
h3 {
  font-size: 20px;
  font-weight: bold;
      height: 23px;
    overflow: hidden;
    color: #5d5d5d;
    a{
     color: #5d5d5d
    }
}
p {
  font-size: 18px;
  font-weight: 500;
  line-height: 2;
  color: #979797;
  height: 65px;
  overflow: hidden;
}
div:lang(ar) {
  text-align: right;
}
.min{
  color: #5d5d5d;
  font-size: 16px;
  font-weight: bold;
}
.read-more{
  color: $mainColor;
  font-size: 16px;
  font-weight: 600;
}
  .active-link, .exact-active-link {
    background-color: transparent;
    color: #fff !important;
}
</style>
