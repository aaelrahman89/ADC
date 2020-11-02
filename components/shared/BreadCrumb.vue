<template>
  <div class="BreadCrumb">
    <div class="container">
      <nuxt-link :to="localePath('/')"><i class="fas fa-home"></i></nuxt-link>
      <nuxt-link :to="localePath(`/${CurrentPage}`)" :class="IsSub ? 'subpage' : ''"> / {{CurrentPage}}</nuxt-link>
      <nuxt-link :to="localePath(`/${CurrentPage}/${subPage}`)" v-if="IsSub"> / {{subPage}}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  props:{
    CurrentPage:{
      type: String,
      default:'Home'
    },
    subPage:{
      type: String,
    },
    IsSub:{
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.BreadCrumb{
  margin: 2rem 0;
  .fa-home,a{
    display: inline-block;
    color: #4c892d  !important;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: transparent;
  }
  .subpage{
    color: #5d5d5d !important;
    display: inline-block;
  }
}

</style>
