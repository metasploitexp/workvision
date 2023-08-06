const { defineConfig } = require('@vue/cli-service')
require('dotenv').config();

module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/shared/scss/_instance.scss";
        `
      }
    }
  }
})
