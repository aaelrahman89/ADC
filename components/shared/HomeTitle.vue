<template>
  <div class="text-center container pt-4 pb-4">
    <h3 class="text-capitalize">{{title}}</h3>
    <hr class="mx-auto m-0 mt-1" />
    <p class="mx-auto mt-2">
      {{desc}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeTitle',
   props: {
         title: {
      type: String,
      required: true
    },
    desc: {
      type: String
    },
   }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variable';
   h3{
  font-size: 30px;
  font-weight: 500;
  color: #5d5d5d;
  font-weight: bold;
   }
   hr{
  width: 34.9px;
  height: 2px;
  background-color:$mainColor;
   }
   p{
       font-size: 18px;
  line-height: 1.8;
  color: #737373;
   }
</style>
