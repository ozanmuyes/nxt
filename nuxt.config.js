module.exports = {
  /*
   * Headers of the page
   */
  head: {
    titleTemplate: '%s | nxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
   * Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   * Build configuration
   */
  build: {
    /*
     * Run ESLint on save
     */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  mode: 'spa',
  router: {
    middleware: ['config', 'configAsync'],
  },
  plugins: ['~/plugins/i18n.js'],
  modules: [
    // '~/modules/simple',

    '@nuxtjs/auth',
    // ...Axios module should be included AFTER @nuxtjs/auth
    '@nuxtjs/axios',
  ],
  // Module settings
  //
  auth: {
    // See https://github.com/nuxt-community/auth-module#options
    login: {
      endpoint: 'http://localhost:8000/login', // Relative to what axios module's 'baseURL'
      propertyName: 'access_token', // TODO Does it works with 'tokens.access_token'?
    },
    // logout: {},
    user: {
      endpoint: 'http://localhost:8000/user',
    },
    storageTokenName: 'nxt-auth-token',
    tokenType: 'Bearer',
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://localhost:8765/api',
  },
};
