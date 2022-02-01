// in this component I am having the card with button and the dialog for it
<template>
  <q-card class="q-ma-sm">
    <q-card-section>
      <div class="text-subtitle2">Delete data:</div>
    </q-card-section>

    <q-card-section>
      <q-btn
        @click.prevent="dialogDelete = true"
        color="negative"
        class="full-width"
        label="Delete Progress Data"
      />
    </q-card-section>
  </q-card>

  <q-dialog v-model="dialogDelete">
    <q-card>
      <q-card-section>
        <div class="text-h6">Deleting data</div>
      </q-card-section>
      <q-card-section class="row items-center">
        <span class="q-ml-sm"
          >This will Delete all the progress data. Are you sure?</span
        >
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" @click="deleteProgressData" />
        <q-btn flat label="Cancel" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "DeleteProgress",
  emits: ["delete-progress-data"],
  data() {
    return {
      dialogDelete: false,
    };
  },
  methods: {
    deleteProgressData() {
      this.$emit("delete-progress-data");
      this.dialogDelete = false;
    },
  },
};
</script>

<style scoped></style>
