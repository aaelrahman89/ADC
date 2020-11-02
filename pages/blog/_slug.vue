<template>
  <div class="container-fluid container-p mb-5 mt-5">
    <div class="row">
      <div class="col-md-2 mb-4 mt-55">
        <div class="left">
          <h3 class="text-uppercase mb-4">{{$t('tags')}}</h3>
          <div class="checkboxdiv">
            <ul class="mt-2 mb-1">
             <li v-for="tag in tags" :key="tag.id"><nuxt-link :to="localePath(`/blog/tag/${tag.slug}`)"><span>{{tag.name}}</span></nuxt-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <div class="title">
          <h2 class="font-weight-bold">{{$t('menu.blog')}}</h2>
          <hr />
        </div>
        <div class="row">
<div class="col-md-12 mt-4 blog-desc">
  <img :src="post.image" class="w-100 mb-4" :alt="post.image_alt" :title="post.image_title">
  <h3 class="mb-3">{{post.title}}</h3>
  <p v-html="post.body"></p>
</div>
        </div>
      </div>

    <div class="col-md-3 mt-55">
      <h4 class="mb-4">{{$t('MostViewedArticles')}}</h4>
      <div v-for="postMostViewed in postsMostViewed" :key="postMostViewed.id" > <MostViewed :postMostViewed="postMostViewed" /> </div>
    </div>

    </div>
  </div>
</template>

<script>
import MostViewed from "@/components/blog/MostViewed";
export default {
    components: {
    MostViewed
  },
     async asyncData({ params, $axios, app }) {
  let post = await $axios.$get(`/api/post/${encodeURIComponent(params.slug)}?lang=${app.i18n.locale}`);
  let postsMostViewed = await $axios.get(`/api/most_viewed?lang=${app.i18n.locale}`);
    return {
    post: post.data,
    tags: post.data.tag,
    postsMostViewed: postsMostViewed.data.data
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/style.scss";
$small: 768px;

.left:lang(ar){
  text-align: right;
}

.left {
  padding: 5px 25px 15px 25px;
  border-radius: 5px;
  font-weight: 600;
  @media screen and (max-width: $small) {
    padding: 0px;
  }
  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #5d5d5d;
  }
  ul{
     @media screen and (max-width: $small) {
    column-count: 2;
  }
  }
  li{
    margin: 10px 0px;
    span{
       background-color: #f9f9f9;
       padding: 3px;
       font-size: 20px;
       color: #5d5d5d;
    }
  }
}
h4{
  font-size: 16px;
  font-weight: bold;
  color: #5d5d5d;
}
h4:lang(ar){
  text-align: right;
}
.mt-55{
  position: relative;
  top: 4.5rem;
    @media screen and (max-width: $small) {
    top: 0rem;
  }
}
.blog-desc{
  img{
    height: 280px;
    @media screen and (max-width: $small) {
    height: auto;
  }
  }
  h3{
    font-size: 20px;
    font-weight: bold;
    color: #5d5d5d;
  }
  p{
  font-size: 18px;
  font-weight: 500;
  line-height: 2;
  color: #979797;
  }
}
.container-p{
  padding: 0px 120px;
      @media screen and (max-width: $small) {
    padding: 0px 15px;
  }
}
.active-link, .exact-active-link {
    background-color: transparent;
}
</style>
