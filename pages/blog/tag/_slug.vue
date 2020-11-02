<template>
    <div class="container-fluid container-p mb-5 mt-5">
         <div class="row">
           <div class="col-md-12">
             <h4 class="mb-4">- {{tag.name}}</h4>
             <div class="row">
               <div class="col-md-6" v-for="post in postsTags" :key="post.id" > <Post :post="post" /> </div>
             </div>
           </div>
         </div>
    </div>
</template>

<script>
import Post from "@/components/blog/Post";
export default {
  components: {
    Post
  },
     async asyncData({ params, $axios, app }) {
  let postsTags = await $axios.$get(`/api/tag/${encodeURIComponent(params.slug)}?lang=${app.i18n.locale}`);
  console.log('postsss tagsss', postsTags);
    return {
    tag: postsTags.data,
    postsTags: postsTags.data.Posts
    }
  }
}
</script>

<style lang="scss" scoped>
$small: 768px;
.container-p{
  padding: 0px 120px;
      @media screen and (max-width: $small) {
    padding: 0px 15px;
  }
}
</style>
