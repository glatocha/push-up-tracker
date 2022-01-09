<template>
  <q-card>
    <q-card-section>
      <div class="text-subtitle2">DELETE DAY DATA?</div>
    </q-card-section>

    <q-card-section>
      <q-btn
        @click.prevent="this.$emit('btn-click')"
        color="negative"
        class="full-width"
        label="DELETE"
      />
    </q-card-section>
  </q-card>
</template>

      
<script>
export default {
  name: "DeleteDayData",
  components: {},
};
</script>