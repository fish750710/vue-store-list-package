// const { resolve } = require('path');

module.exports = {
  // publicPath: './',
  devServer: {
    disableHostCheck: true
  },
  filenameHashing: false,
  // css: {
  //   extract: false,
  // }
  configureWebpack: {
    // entry: './src/index.ts',
    // output: {
    //   filename: 'vue-tap-pay.umd.js',
    //   library: 'VueTapPay',
    //   libraryTarget: 'umd',
    //   umdNamedDefine: true
    // },
  },
  css: {
    loaderOptions: {
      // 預先載入的全域共用scss
      scss: {
        prependData: `
        @import "@/assets/scss/main.scss";
        `,
      },
    },
  },
  chainWebpack: config => {

    // 先刪除預設的svg配置
    // config.module.rules.delete("svg")

    // 新增 svg-sprite-loader 設定
    // config.module
    //   .rule("svg-sprite-loader")
    //   .test(/\.svg$/)
    //   .include
    //   .add(resolve("src/assets/svg_icon"))
    //   .end()
    //   .use("svg-sprite-loader")
    //   .loader("svg-sprite-loader")
    //   .options({ symbolId: "[name]" })

    // 修改 images-loader 配置
    // config.module
    //   .rule("images")
    //   .exclude.add(resolve("src/assets/svg_icon"))
  }
}