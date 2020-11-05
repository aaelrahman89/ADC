<template>
<div>
  <div class="general-offer-box">
      <img :src="offer.image" class="w-100" :title="offer.image_title" :alt="offer.image_alt">
      <h3 class="mt-3 mb-3">{{offer.title}}</h3>
      <hr class="m-0" />
      <p class="mt-3 mb-4">{{offer.small_description}}</p>
      <ul class="d-flex">
            <li v-b-modal.modal-1><button class="btn btn-warning text-white border-0">{{$t('menu.booknow')}}</button></li>
            <li class="text-decoration-line-through d-none d-sm-block">{{offer.discount_price}} <span>{{$t('offers.SAR')}}</span></li>
            <li class="price">{{offer.price}} <span>{{$t('offers.SAR')}}</span></li>
      </ul>
  </div>
</div>

</template>

<script>
export default {
  props: ['offer']
};
</script>

<style lang="scss" scoped>
$orangeColor: #f39e25;
$small: 768px;
.general-offer-box {
  h3{
  font-size: 31px;
  font-weight: bold;
  color: #5d5d5d;
  }
   img{
    height: 260px;
  }
  hr{
  width: 69.8px;
  height: 3.9px;
  background-color: #4c892d;
  max-width: 69.8px;
  }
  p{
  font-size: 16px;
  line-height: 1.88;
  color: #707070;
  }
  button{
  width: 150px;
  height: 40px;
  font-weight: bold;
  background-color: $orangeColor;
  }
  .text-decoration-line-through{
      text-decoration: line-through;
      font-size: 23px;
      color: #868686;
      margin-left: 1rem;
      span{
        color: $orangeColor;
      }
  }
  .price{
    font-weight: bold;
    font-size: 27px;
    color: #5d5d5d;
        margin-left: 2.5rem;
        @media screen and (max-width: $small) {
   font-size: 20px;
  }
     span{
        color: $orangeColor;
      }
  }
}

html:lang(ar){
    .text-decoration-line-through{
      margin-right: 1rem;
      margin-left: auto;
  }
    .price{
       margin-right: 2.5rem;
       margin-left: auto;
    }
}
</style>
