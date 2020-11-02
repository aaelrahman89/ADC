<template>
    <div class="search">
        <div class="title pt-3 pb-3 mb-4">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-5">
                        Search
                    </div>
                </div>
            </div>
        </div>

      <div class="container-fluid">
          <div class="row mb-5">
              <div class="col-md-2 d-none d-sm-block"></div>
              <div class="col-md-4">
                  <h5 class="mb-5">Search Results for <b>( {{$route.params.slug}} )</b></h5>
                  <div class="results">

                       <!-- Result Start -->
                          <div class="result mb-1" v-for="(searchResult, index) in searchResults" :key="index">
                           <nuxt-link :to="localePath(`/${searchResult.slug_type}/${searchResult.slug}`)">
                               <div class="row">
                           <div class="col-md-3 col-4">
                                <img :src="searchResult.image" :alt="searchResult.image_alt" :title="searchResult.image_title">
                           </div>
                           <div class="col-md-9 col-8">
                               <p class="mt-3">{{searchResult.title}}</p>
                           </div>
                           <div class="col-md-12"><hr /></div>
                       </div>
                           </nuxt-link>
                       </div>
                       <!-- Result End -->

                  </div>
              </div>
              <div class="col-md-6 bg mt-5 d-none d-sm-block"></div>
          </div>
      </div>

    </div>
</template>

<script>
export default {
//     async asyncData({ params, $axios, app }) {
//     let search = await $axios.$get(`/api/search?query_search=${encodeURIComponent(params.slug)}&lang=${app.i18n.locale}`);
//     console.log('searchhhh', search.data);
//     return {
//       search: search.data
//     }
//   },
  data(){
      return {
          searchResults: []
      }
  },
  created(){
      this.$axios.$post(`/api/search_data?query_search=${encodeURIComponent(this.$route.params.slug)}&lang=${this.$i18n.locale}`, {query_search: this.$route.params.slug, lang: this.$i18n.locale})
        .then(res => this.searchResults = res.data)
  }
}
</script>

<style lang="scss" scoped>
$small: 768px;
    .title{
     background-color: #fbfbfb;
    font-size: 25px;
    color: #aeaeae;
    }
    h5{
     font-size: 25px;
     color: #aeaeae;
    }
    .results{
        height: 700px;
        overflow-y: auto;
        overflow-x: hidden;
        direction: rtl;
          @media screen and (max-width: $small) {
            height: auto;
            overflow: visible;
        }
        img{
        width: 95px;
        height: 67px;
        }
        p{
              font-size: 16px;
  font-weight: 500;
  line-height: 1.88;
  color: #5d5d5d;
        }
        .result{
       direction: ltr;
       margin-left: 20px;
        }
    }
    .results::-webkit-scrollbar-track {
    border-radius: 1px;
    background-color: #e9e9e9;
    box-shadow: none;
}

.results::-webkit-scrollbar {
    width: 12px;
    background-color:#e9e9e9;
    box-shadow: none;
    
}

.results::-webkit-scrollbar-thumb {
    background-color: rgb(126, 126, 126);
    border-radius: 30px;
    padding: 0px;
}
.bg{
    background-image: url('~assets/images/search-logo-bg.png');
    background-repeat: no-repeat;
    background-size: contain;
}
</style>