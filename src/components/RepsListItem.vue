<template>
  <q-item class="q-pa-none no-min-h">
    <q-item-section side>
      <h6 class="text-left q-ma-none">{{ data.key + 1 }}</h6>
    </q-item-section>
    <q-item-section>
      <p class="q-ma-none">{{ data.time }}</p>
    </q-item-section>
    <q-item-section side>
      <h6 class="text-right q-ma-none">{{ data.rep }}</h6>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "RepsListItem",
  props: ["data"],
  components: {},
};
</script>

<style lang="scss" scoped>
.no-min-h {
  min-height: 0;
}
</style>
