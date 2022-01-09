<template>
  <q-card class="q-ma-sm">
    <q-card-section>
      <q-btn
        @click.prevent="this.$emit('btn-click')"
        :color="color"
        class="full-width"
        :label="text"
      />
    </q-card-section>
  </q-card>
</template>

      
<script>
export default {
  name: "FullWidthButton",
  props: {
    color: String,
    text: String,
  },
  components: {},
};
</script>