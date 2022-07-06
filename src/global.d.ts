import api from './api';
import system from './constants/System';
import * as utils from './utils';
import * as hooks from './utils/hooks';

/**
 * @see https://v3.vuejs.org/guide/typescript-support.html#augmenting-types-for-globalproperties
 */
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $api: typeof api;
    $system: typeof system;
    $utils: typeof utils;
    $hooks: typeof hooks;
  }
}
