import { computed } from 'vue';

/**
 * Binding model value
 * @param props setup props
 * @param emit setup context emit
 * @param key props name, often use 'modelValue'
 * @reference https://www.vuemastery.com/blog/vue-3-data-down-events-up/
 */
export function useModelWrapper<T = any>(
  props: { [key: string]: any },
  emit: (event: any, ...args: unknown[]) => void,
  key: string
) {
  return computed<T>({
    get: (): any => props[key],
    set: value => emit(`update:${key}`, value),
  });
}
