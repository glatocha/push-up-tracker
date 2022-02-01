<template>
  <q-card class="q-ma-sm q-pb-sm">
    <q-card-section>
      <div class="text-subtitle2">Edit settings:</div>
    </q-card-section>

    <q-form @submit="dialogSave = true">
      <number-input v-model="targetValue">Target amount:</number-input>
      <date-input v-model="startDate">Start Date</date-input>
      <date-input v-model="targetDate">Target Date</date-input>

      <q-card-section>
        <q-btn
          type="submit"
          color="warning"
          class="full-width"
          label="Save new settings"
        />
      </q-card-section>
    </q-form>
  </q-card>

  <!---------------------------------->
  <q-dialog v-model="dialogSave">
    <q-card>
      <q-card-section>
        <div class="text-h6">Saving new settings</div>
      </q-card-section>
      <q-card-section class="row items-center">
        <span class="q-ml-sm"
          >This will overwrite current settings. Are you sure?</span
        >
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" @click="saveNewSettings" />
        <q-btn flat label="Cancel" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import DateInput from "./DateInput.vue";
import NumberInput from "./NumberInput.vue";

export default {
  name: "EditSettings",
  emits: ["save-new-settings"],
  components: {
    DateInput,
    NumberInput,
  },
  data() {
    return {
      dialogSave: false,
      targetValue: 30000,
      startDate: "2021/11/13",
      targetDate: "2022/11/13",
      testValue: 1515,
    };
  },
  methods: {
    saveNewSettings() {
      this.$emit(
        "save-new-settings",
        this.targetValue,
        this.startDate,
        this.targetDate
      );
      this.dialogSave = false;
    },
  },
  mounted() {
    this.targetValue = this.$store.getters.settings.targetValue;
    this.startDate = this.$store.getters.settings.startDate;
    this.targetDate = this.$store.getters.settings.targetDate;
  },
};
</script>

<style lang="scss" scoped></style>
