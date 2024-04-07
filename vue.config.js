module.exports = {
  lintOnSave: process.env.NODE_ENV === 'development' ? true : false,
  transpileDependencies: [
    'vuetify'
  ],

  chainWebpack: (config) => {
    config.module
      .rule('worker')
      .test(/\.worker\.js$/)
      .use('worker-loader').loader('worker-loader')
      .options(
        {
          inline:true,
          fallback:false,
        }
      )
      .end();
    config.plugins.delete('prefetch');
  }
}
