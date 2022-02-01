<template>
  <q-input
    input-class="text-right"
    v-model="targetDate"
    mask="date"
    :rules="['date']"
    class="q-px-sm q-pb-none text-h6"
  >
    <template v-slot:before>
      <label class="text-h6"><slot></slot></label>
    </template>
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="qDateProxy"
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date v-model="targetDate">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  name: "DateInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      targetDate: this.modelValue,
    };
  },
  watch: {
    modelValue(value) {
      this.targetDate = value;
    },
    targetDate(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style></style>
