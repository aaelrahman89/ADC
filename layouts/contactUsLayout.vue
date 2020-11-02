<template>
  <div>
    <Header />
    <Menu />
    <Nuxt />
        <div class="container">
      <h2 class="dash-heading">contact us</h2>
      <p class="contact-us-paragraph">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
    </div>
    <GeneralContactUs></GeneralContactUs>
    <Footer :footerServices="footerServices" />
  </div>
</template>

<script>
import Header from '@/components/shared/Header';
import Menu from '@/components/shared/Menu';
import Footer from '@/components/shared/Footer';
import GeneralContactUs from '@/components/shared/GeneralContactUs';
export default {
  data(){
    return {
      footerServices: []
    }
  },
  components: {
    Header,
    Menu,
    Footer,
    GeneralContactUs
  },
    head(context) {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale == "ar" ? "rtl" : "ltr"
      }
    };
  },
  methods: {
        // Get Footer services
    getFooterServices(locale) {
      this.$axios.$get(`/api/services?lang=${locale}`).then(res => this.footerServices = res.data);
    },
  },
  created(){
    this.getFooterServices(this.$i18n.locale);
        // Get Data on lang changes
    this.$i18n.onLanguageSwitched = (oldLocale, newLocale) => {
      this.getFooterServices(newLocale);
    }
  }
}
</script>

<style scoped lang="scss">

</style>
