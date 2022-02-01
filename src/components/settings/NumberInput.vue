<template>
  <q-input
    input-class="text-right text-h6"
    v-model.number="targetValue"
    type="number"
    class="q-px-sm q-pb-none"
    min="0"
    max="1000000"
  >
    <template v-slot:before>
      <label class="text-h6"><slot></slot></label>
    </template>
  </q-input>
</template>

<script>
export default {
  name: "NumberInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      targetValue: this.modelValue,
    };
  },
  watch: {
    modelValue(value) {
      this.targetValue = value;
    },
    targetValue(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style></style>
