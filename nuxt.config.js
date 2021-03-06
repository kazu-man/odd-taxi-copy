import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TVアニメ「オッドタクシー」',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/odd-taxi-favicon.png' } // ここを変更する
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/common-style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/mixin'
    // { src: '@/plugins/mixin' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/top-contents-components',
      '~/components/main-contents-components',
      '~/components/main-contents-components/about-components',
      '~/components/main-contents-components/news-components',
      '~/components/main-contents-components/character-components',
      '~/components/common-parts-components/modal-contents',
      '~/components/common-parts-components/modal-contents/newsPageTemplates',
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', { lazy: false, duration:1000, easing:'ease-in-out' }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
