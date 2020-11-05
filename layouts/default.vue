<template>
  <div>
    <div class="fixed-left">
      <div>
      <a href="https://web.whatsapp.com/send?phone=00966122166603&amp;text=" target="_blank" ><img src="~assets/images/whatsapp-fixed.png" /></a>
      </div>
      <div>
      <a href="https://m.me/AndalusiaDC/" target="_blank" ><img src="~assets/images/facebook-fixed.png" /></a>
      </div>
    </div>
    <div class="fixed-right">
      <div>
     <a href="#" target="_blank" ><img src="~assets/images/message-fixed.png" /></a>
      </div>
    </div>
    <Header />
    <Menu />
    <Nuxt />
    <Footer :footerServices="footerServices" />
  </div>
</template>

<script>
import Header from "@/components/shared/Header";
import Menu from "@/components/shared/Menu";
import Footer from "@/components/shared/Footer";
export default {
  data() {
    return {
      footerServices: [],
    };
  },
  components: {
    Header,
    Menu,
    Footer,
  },
  head(context) {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale == "ar" ? "rtl" : "ltr",
      },
    };
  },
  methods: {
    // Get Footer services
    getFooterServices(locale) {
      this.$axios
        .$get(`/api/services?lang=${locale}`)
        .then((res) => (this.footerServices = res.data));
    },
  },
  created() {
    this.getFooterServices(this.$i18n.locale);
    // Get Data on lang changes
    this.$i18n.onLanguageSwitched = (oldLocale, newLocale) => {
      this.getFooterServices(newLocale);
    };
  },
};
</script>

<style scoped lang="scss">
$small: 768px;

%image-hover {
  transform: scale(0.8);
  transition: all 0.9s ease 0s;
}

.fixed-left {
  position: fixed;
  z-index: 99999;
  left: 40px;
  top: 530px;
  @media screen and (max-width: $small) {
    top: auto;
    bottom: 10px;
    left: 10px;
  }
  div {
    margin: 20px 0px;
    img {
      &:hover {
        @extend %image-hover;
      }
      @media screen and (max-width: $small) {
        width: 60%;
      }
    }
  }
}
.fixed-right {
  position: fixed;
  z-index: 99999;
  right: 40px;
  top: 630px;
  @media screen and (max-width: $small) {
    top: auto;
    bottom: 50px;
    right: 10px;
    text-align: right;
  }
  div {
    img {
      &:hover {
        @extend %image-hover;
      }
      @media screen and (max-width: $small) {
        width: 60%;
      }
    }
  }
}

html:lang(ar) {
  .fixed-left {
    right: 40px;
    left: auto;
    @media screen and (max-width: $small) {
      top: auto;
      bottom: 50px;
      right: 10px;
      left: auto;
    }
  }
  .fixed-right {
    left: 40px;
    right: auto;
    @media screen and (max-width: $small) {
      left: 10px;
      right: auto;
      text-align: left;
    }
  }
}
</style>
