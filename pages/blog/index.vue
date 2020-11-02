<template>
  <div class="container-fluid container-p mb-5 mt-5">
    <div class="row">

      <!-- Categories Start -->
      <div class="col-md-2 mb-4 mt-55 p-0">
        <div class="left text-white">
          <h3 class="text-uppercase mb-2">{{$t('CATEGORY')}}</h3>
          <div class="checkboxdiv">
            <div class="mt-2 mb-1" v-for="category in categories" :key="category.slug">
            <input type="checkbox" v-model="selected" :value="category.slug" @change="onChange()"/>
              <span class="ml-2 text-uppercase">{{ category.name }}</span>
            </div>
          </div>

        </div>
      </div>
      <!-- Categories End -->


      <!-- Posts Start -->
      <div class="col-md-7">
        <div class="title">
          <h2 class="font-weight-bold">{{$t('menu.blog')}}</h2>
          <hr />
        </div>
        <div class="row" id="hold-posts">
              <div class="col-md-12" v-for="post in filteredPosts" :key="post.id" > <Post :post="post" /> </div>
        </div>

        <div class="col-md-12 text-center load-more" v-if="showSpinner"><i class="fas fa-undo-alt"></i>  <br /> <span class="text-success" role="button" @click="loadMore">Load More</span></div>
        <!-- <div class="row" v-if="postsFilteredPaged.length > 0">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-text="<<"
            :prev-text="$t('pagination.prev')"
            :next-text="$t('pagination.next')"
            last-text=">>"
            aria-controls="itemList"
            class="mx-auto"
          ></b-pagination>
        </div> -->
      </div>
      <!-- Posts End -->


    <!-- Most Viewed Start -->
    <div class="col-md-3 mt-55 d-none d-sm-block">
      <h4 class="mb-4">{{$t('MostViewedArticles')}}</h4>
      <div v-for="postMostViewed in postsMostViewed" :key="postMostViewed.slug" > <MostViewed :postMostViewed="postMostViewed" /> </div>
    </div>
    <!-- Most Viewed End -->


    </div>
  </div>
</template>

<script>
import Post from "@/components/blog/Post";
import MostViewed from "@/components/blog/MostViewed";
import BreadCrumb from "@/components/shared/BreadCrumb";
export default {
  components: {
    Post,
    MostViewed,
    BreadCrumb
  },
  data() {
    return {
      selected: [],
      filteredPosts: [],
      currentPage: 1,
      perPage: 2,
      showSpinner: false,
      postsPage: '',
      allPostsArray: []
    };
  },
  computed: {
    // Get filteredPosts length for pagination
    rows() {
      return this.filteredPosts.length;
    },
    // Get Posts After filtered for pagination
    postsFilteredPaged() {
    return this.filteredPosts.slice( (this.currentPage - 1) * this.perPage, this.currentPage * this.perPage );
    }
  },
  methods: {
    // Onchange category checkbox
    onChange() {
      if (this.selected.length > 0) {
        this.filteredPosts = this.allPostsArray.filter((post) =>
          this.selected.includes(post.category.slug)
        );
      } else {
        this.filteredPosts = this.allPostsArray;
      }
    },
    getPosts(){
      this.postsPage++;
       this.$axios.$get(`/api/all_posts?lang=${this.$i18n.locale}&page=${this.postsPage}`).then(res => {
          // this.postsPage++;
             this.allPostsArray.push(...res.data);
        });
    },
      scroll () {
    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      // let bottomOfWindow = document.documentElement.offsetHeight;
      let holdPosts = document.getElementById('hold-posts');
      if (bottomOfWindow) {
        console.log('at bottom');
        this.showSpinner = true;
        setTimeout(()=>{
           this.getPosts();
        }, 500)
      }else{
        this.showSpinner = false;
      }
    };
  },
  loadMore(){
    // this.perPage+=1;
    this.getPosts();
  }
  },
  mounted(){
    this.scroll();
  },
  created(){
    this.postsPage = 1;
    this.allPostsArray = this.allPosts;
    this.filteredPosts = this.allPostsArray;
  },
    async asyncData(context) {
    let postsMostViewed = await context.$axios.get(`/api/most_viewed?lang=${context.app.i18n.locale}`);
    let categories = await context.$axios.get(`/api/categories?lang=${context.app.i18n.locale}`);
    let allPosts = await context.$axios.get(`/api/all_posts?lang=${context.app.i18n.locale}&page=1`);
    return {
      postsMostViewed: postsMostViewed.data.data,
      categories: categories.data.data,
      allPosts: allPosts.data.data
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/style.scss";
$small: 768px;

.left:lang(ar){
  text-align: right;
}

.left {
  background-color: #f8f8f8;
  padding: 15px 25px;
  border-radius: 5px;
  font-weight: 600;
  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #5d5d5d;
  }
}

.checkboxdiv {
  span {
    font-size: 14px;
    color: #5d5d5d;
  }
}

input[type="checkbox"] {
  transform: scale(1.2);
}
::v-deep {
  .page-link {
    color: #707279 !important;
    border: none !important;
    padding: 3px 10px !important;
  }
  .page-item.active .page-link {
    color: #fff !important;
    background-color: $mainColor !important;
    border-color: $mainColor !important;
    border-radius: 3px;
  }
}
.title{
  h2{
    color: #5d5d5d;
  }
  h2:lang(ar){
    text-align: right;
  }
  hr{
  width: 69.8px;
  height: 3.9px;
  background-color: #4c892d;
  max-width: 69.8px;
    margin: 10px 0px 30px 0px;
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
  top: 5.1rem;
    @media screen and (max-width: $small) {
    top: 0rem;
  }
}
.load-more{
  text-decoration: underline;
  color: $mainColor;
}
.fa-undo-alt{
  -webkit-animation: spinner-border .75s linear infinite;
  animation: spinner-border .75s linear infinite;
}
.container-p{
  padding: 0px 120px;
      @media screen and (max-width: $small) {
    padding: 0px 15px;
  }
}
</style>
