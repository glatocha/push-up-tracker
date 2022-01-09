<template>
  <q-card class="q-ma-sm">
    <q-card-section>
      <div class="text-subtitle2">STATUS</div>
      <div class="text-h6">TOTAL:</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="main-number">
        {{ number }}
      </div>
    </q-card-section>
  </q-card>
</template>

   
<script>
export default {
  name: "TotalCard",
  props: {
    number: Number,
  },
};
</script>

<style lang="scss" scoped>
.text-subtitle2 {
  color: $grey-6;
}

.main-number {
  color: $primary;
  padding-top: 0px;
  padding-bottom: 0px;
  text-align: center;
  background: $grey-4;
  border-radius: 25px;
  font-size: 700%;
  line-height: 1.2;
}
</style>