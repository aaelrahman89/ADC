<template>
    <div>

        <!-- topimage start -->
        <div class="top-image position-relative">
            <div class="overlay"></div>
            <div class="content position-relative">
                 <h3 class="pt-5 pb-3 text-white text-center">{{$t('offers.AndalusiaDentalCenters')}}</h3>
                 <p class="pb-3 text-white text-center">{{$t('offers.MoreThan30')}}</p>
                 <div class="row m-0">
                     <div class="col-md-3 mx-auto mb-3">
                         <OffersBookNow />
                     </div>
                 </div>
            </div>
        </div>
        <!-- top image end -->

       <!-- top offers start -->
           <div class="container mt-5 mb-5">
                <div class="title">
              <h1>{{$t('offers.TopOffers')}}</h1>
              <hr />
            </div>
           </div>

         <div class="container-fluid">
             <div class="row">
                 <div class="col-md-6 mb-4 p-0" v-for="topOffer in topOffers" :key="topOffer.id">
                     <TopOffer :topOffer="topOffer" />
                 </div>
             </div>
         </div>

       <!-- top offers end -->

       <!-- general offers start -->
         <div class="container mt-5 mb-5">
                <div class="title">
              <h1>{{$t('offers.GeneralOffers')}}</h1>
              <hr />
            </div>
           </div>

            <div class="container-fluid general-offers-container">
             <div class="row p-0 m-0">
                 <div class="col-md-4 mb-3" v-for="offer in itemsForList" :key="offer.id" id="general-offers">
                     <GeneralOffer :offer="offer" />
                 </div>

              <!-- Pagination start-->
              <div class="col-md-12 mt-5 mb-2">
        <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="itemList"
      align="center"
      :prev-text="$t('pagination.prev')"
      :next-text="$t('pagination.next')"
    ></b-pagination>
              </div>
              <div class="col-md-12 text-center mb-5 results-info">{{currentPage}} - {{Math.ceil(this.offers.length / this.perPage)}} {{$t('offers.of')}} {{offers.length}} {{$t('offers.results')}}</div>
              <!-- Pagination end-->

             </div>
           </div>

       <!-- general offers end -->

       <!-- bottom offers start -->
           <div class="bottom">
               <div class="container-fluid">
                   <div class="row m-0">
                       <div class="col-md-8">
                           <h3 class="text-center">{{$t('offers.AndalusiaDentalCenters')}}</h3>
                       </div>
                       <div class="col-md-3 mb-3" id="book-now">
                           <OffersBookNow />
                       </div>
                   </div>
               </div>
           </div>
       <!-- bottom offers end -->

       <!-- form modal start -->
            <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
       <!-- form modal end -->

    </div>
</template>

<script>
import TopOffer from '@/components/offers/TopOffer';
import GeneralOffer from '@/components/offers/GeneralOffer';
export default {
    components: {
        TopOffer,
        GeneralOffer
    },
    async asyncData(context) {
    let offers = await context.$axios.get(`/api/offers?lang=${context.app.i18n.locale}`);
    let topOffers = await context.$axios.get(`/api/topoffers?lang=${context.app.i18n.locale}`);
    return {
      offers: offers.data.data,
      topOffers: topOffers.data.data
    };
  },
  data(){
    return {
      perPage: 9,
      currentPage: 1,
    }
  },
  computed: {
    rows() {
        return this.offers.length
      },
      itemsForList(){
        return this.offers.slice(
      (this.currentPage - 1) * this.perPage,
      this.currentPage * this.perPage,
    )
      }
  }
}
</script>

<style lang="scss" scoped>
$small: 768px;

.top-image{
    background-image: url('~assets/images/offers-top-image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    .content{
        z-index: 10;
    }
    h3{
  font-size: 30px;
  font-weight: bold;
    }
    p{
 font-size: 20px;
  font-weight: 500;
  line-height: 0.9;
    }
}

.results-info{
      font-size: 16px;
  color: #707070;
}
.general-offers-container{
    padding: 0rem 3rem;
      @media screen and (max-width: $small) {
    padding: 0px 15px;
  }
}

  .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
}
.bottom{
    background-image: (url('~assets/images/search-logo-bg.png'));
      background-size: 586px 473.6px;
      background-repeat: no-repeat;
      background-position-x: -60px;
      h3{
      font-size: 70px;
  font-weight: 500;
  color: #f39e25;
  padding: 200px 0px;
      }
}


::v-deep{
  .page-item.disabled .page-link, .page-link{
    color: #234216;
    border: none;
    font-size: 28px;
    font-weight: bold;
    line-height: 24px;
}
.page-item.active .page-link {
    color:#234216;
    background-color: transparent;
    border-color: #234216;
    font-size: 28px;
    font-weight: bold;
      width: 37px;
  height: 44px;
  line-height: 24px;
  border: 1px solid #234216 !important;
}
.page-link:hover {
    color: #fff;
    background-color: #f39e25;
    border-color: #f39e25;
}
}

html:lang(ar){
    .bottom{
      background-position-x: right;
    }

}
</style>
