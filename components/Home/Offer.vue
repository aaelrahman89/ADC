<template>
  <div class="offer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-5 col-12">
          <div class="description-offer">
            <div>
              <h2>Lorem Ipsnon</h2>
              <p>Ed ut perspiciatis unde omnis iste natus error sitoluptatem ac Doloremque</p>
              <div class="hold-buttons">
                <nuxt-link :to="localePath('/doctor')" class="btn-main btn-green">book now</nuxt-link>
                <nuxt-link :to="localePath('/offers')" class="btn-main"><span></span>see more</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6">
          <div class="percentage-offer">
            <div>
              <h1 class="offer-header">offer</h1>
              <div class="hold-percentage">
                <span class="percentage">50%</span>
                <img src="@/assets/images/dental.svg" alt="dental">
              </div>
            </div>
          </div>
        </div>
        <div class="px-0 col-lg-3 col-6">
          <div class="offer-image">
            <img src="@/assets/images/offer.jpg" alt="offer" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Offer"
}
</script>

<style scoped lang="scss">
.offer-image{
  img{
    width: 100%;
    object-fit: cover;
  }
}
.description-offer{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  h2{
    font-weight: bold;
  }
  p{
    line-height: 2;
    width: 75%;
    @media (max-width: 1080px) {
      width: 100%;
    }
  }
  @media (max-width: 1080px) {
    display: block;
    text-align: center;
    padding: 1rem;
  }
}
.percentage-offer{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .offer-header,.percentage{
    color: #94001b;
    text-transform: uppercase;
    font-size: 5rem;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  .hold-percentage{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      @media (max-width: 992px) {
        height: 70px;
        object-fit: contain;
      }
    }
  }
}

</style>
