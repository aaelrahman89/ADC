export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'ADC_Frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cairo&display=swap'
      }
    ]
  },

  pageTransition: 'slide-fade',
  router: {
    linkExactActiveClass: 'exact-active-link'
  },
  loading: { color: '#4c892d', height: '3px' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'swiper/css/swiper.css',
    '@/assets/scss/style.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/vue-swiper.js", ssr: false },
    { src: '~plugins/vee-validate', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
        locales: [
          {
            code: 'en',
            file: 'en.js'
          },
          {
            code: 'ar',
            file: 'ar.js'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
          , alwaysRedirect: true,
        },
        vueI18n: {
          fallbackLocale: 'en'
        }
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://157.175.37.217:4070/',
    proxy: true
  },
  proxy: {
    '/api/': 'http://157.175.37.217:4070/'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ]
  }
}
