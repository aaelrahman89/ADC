<template>
  <div>
    <Header />
    <Menu />
    <Nuxt />
    <Footer :footerServices="footerServices" />
  </div>
</template>

<script>
import Header from '@/components/shared/Header';
import Menu from '@/components/shared/Menu';
import Footer from '@/components/shared/Footer';
export default {
  data(){
    return {
      footerServices: []
    }
  },
  components: {
    Header,
    Menu,
    Footer
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
