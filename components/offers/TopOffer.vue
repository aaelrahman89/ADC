<template>
    <div class="top-offer-box text-white font-weight-bold" :style="{ backgroundImage: 'url(' + topOffer.image + ')' }" >
     <div id="overlay"></div>
    <div class="content">
        <h3>{{topOffer.title}}</h3>
    <hr />
    <p class="mt-5 mb-2">{{topOffer.small_description}}</p>
    <div class="d-flex">
      <a href="#book-now"><button class="btn btn-warning mt-5">{{$t('menu.booknow')}}</button></a>
       <div class="price-container"><span class="price">{{topOffer.price}} <span class="price-sar">{{$t('offers.SAR')}}</span></span> <h6 class="free-porcelain">Free porcelain formula included</h6> </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['topOffer']
};
</script>

<style lang="scss" scoped>
$small: 768px;
.top-offer-box {
  background-image: url("https://picsum.photos/800/300");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 120px 70px 120px;
  @media screen and (max-width: $small) {
   padding: 20px;
  }
  .content{
      z-index: 10;
      position: relative;
  }
  h3 {
    font-size: 31px;
    font-weight: bold;
    @media screen and (max-width: $small) {
   font-size: 27px;
  }
  }
  p{
      font-size: 16px;
  }
  hr {
    width: 248px;
    max-width: 248px;
    margin: 0px;
    height: 3.9px;
    background-color: #fff;
  }
  button{
      background-color: #f39e25;
      border: none;
      color: #fff;
      font-weight: bold;
        width: 150px;
  height: 40px;
  padding: 0px;
  }
  .price{
      font-size: 50px;
     font-weight: bold;
      @media screen and (max-width: $small) {
   font-size: 30px;
  }
  }
    .price-sar{
     color: #f39e25;
  }
  .free-porcelain{
        font-size: 15px;
  font-weight: 300;
  }
  #overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.4);
  z-index: 2;
}
.price-container{
  margin-left: 3rem;
}
}

html:lang(ar){
.price-container{
  margin-right: 3rem;
  margin-left: auto;
}
}
</style>
