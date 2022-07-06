const initialState = {
  /**
   * Logo
   */
  logo: 'logo.png',
  /**
   * Favicon
   */
  favicon: 'favicon.ico',
  /**
   * 為了方便控管多站台主題, 請不要在 quasar.config.js framework.config.brand 配置
   * @document https://quasar.dev/style/color-palette#setting-up-defaults
   * @see https://quasar.dev/style/color-palette
   * @see https://quasar.dev/style/theme-builder
   */
  color: {
    // primary: '#8aa79a',
    // secondary: '#405b53',
  },
};

export default {
  ...initialState,
};
