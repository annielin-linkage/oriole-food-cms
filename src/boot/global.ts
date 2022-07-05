import { boot } from 'quasar/wrappers';
import axios from 'axios';
import { setCssVar } from 'quasar';
import { get } from 'lodash';

import api from '../api';
import system from '../constants/System';
import * as utils from '../utils';
import * as hooks from '../utils/hooks';

/**
 * 自定義全域屬性 typings 請到 ./global.ts 設置
 *
 * 在 Template 內使用
 * @example
 * {{ $path.image }}
 *
 * 在 Script 內使用
 * @example
 * import { getCurrentInstance, ComponentInternalInstance } from 'vue';
 * const { proxy } = getCurrentInstance() as ComponentInternalInstance;
 * console.log(proxy?.$path);
 * @see https://vuejs.org/api/application.html#app-config-globalproperties
 * @see https://www.cnblogs.com/wandoupeas/p/vue3_ts_setup_getCurrentInstance.html
 */
export default boot(({ app }) => {
  //#region globalProperties
  app.config.globalProperties.$axios = axios;

  app.config.globalProperties.$api = api;
  app.config.globalProperties.$system = system;
  app.config.globalProperties.$utils = utils;
  app.config.globalProperties.$hooks = hooks;
  //#endregion

  //#region Color Brand
  // https://quasar.dev/style/color-palette#setting-up-defaults
  Object.keys(system.color).map(key => setCssVar(key, get(system.color, key)));
  //#endregion
});
