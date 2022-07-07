<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar :class="toolBarClass">
        <q-btn flat dense round icon="chevron_left" aria-label="Back" @click="$router.back()" />

        <q-toolbar-title class="text-subtitle2 text-weight-regular q-pa-none">
          Oriole / {{ $filters.ToProperCase($route.name as string) }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const $router = useRouter();

    const toolBarClass = $router.currentRoute.value.meta.headerClass;

    return {
      toolBarClass,
    };
  },
});
</script>
