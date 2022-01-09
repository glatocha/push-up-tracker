<template>
  <div class="dialogMain">
    <q-card class="q-ma-sm">
      <q-toolbar>
        <q-toolbar-title>DAY DETAILS</q-toolbar-title>
        <q-btn round color="dark" size="sm" icon="close" v-close-popup />
      </q-toolbar>
    </q-card>
    <daily-card :dayNo="dayNo" />

    <full-width-button
      :color="'dark'"
      :text="editPossible ? 'HIDE' : 'EDIT'"
      @btn-click="editPossible = !editPossible"
    />
    <add-value v-show="editPossible" @add-value="addToTodays" />
    <delete-day-data v-show="editPossible" @btn-click="deleteDayData" />
  </div>
</template>

<script>
import AddValue from "../components/AddValue.vue";
import DailyCard from "../components/DailyCard.vue";
import DeleteDayData from "../components/DeleteDayData.vue";
import FullWidthButton from "../components/FullWidthButton.vue";

export default {
  name: "EditDayDialog",
  props: ["dayNo"],
  data() {
    return {
      addingAmount: 0,
      editPossible: false,
    };
  },
  components: {
    AddValue,
    DailyCard,
    DeleteDayData,
    FullWidthButton,
  },
  methods: {
    addToTodays(amount) {
      if (amount > 0) {
        this.$store.dispatch("addValue", {
          dayNo: this.dayNo,
          value: amount,
          fromEdit: true,
        });
      }
    },
    deleteDayData() {
      if (confirm("Are you sure?")) {
        this.$store.dispatch("deleteDayData", this.dayNo);
      }
    },
  },
};
</script>

<style scoped>
.flex-center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialogMain {
  background-color: white;
}
</style>