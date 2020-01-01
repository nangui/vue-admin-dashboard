module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/global-styles/colors.scss";
          @import "~@/global-styles/typography.scss";
        `
      }
    }
  }
};
