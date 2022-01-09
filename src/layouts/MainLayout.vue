<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <!-- <q-toolbar> -->
      <q-tabs align="justify" :breakpoint="0">
        <q-route-tab to="/main" label="MAIN" exact />
        <q-route-tab to="/graphs" label="GRAPHS" exact />
        <q-route-tab to="/list" label="LIST" exact />
        <q-route-tab to="/settings" label="SETTINGS" exact />
      </q-tabs>
      <!-- </q-toolbar> -->
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const $q = useQuasar();
    $q.dark.set(false);
    return {};
  },
});
</script>
