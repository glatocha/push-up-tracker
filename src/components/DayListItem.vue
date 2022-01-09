<template>
  <q-item clickable @click="dialog = true" :class="sundayClass">
    <q-item-section side>
      <h6 class="text-left q-ma-none">{{ day.id }}</h6>
    </q-item-section>
    <q-item-section>
      <p class="q-ma-none">{{ currentDate }}</p>
    </q-item-section>
    <q-item-section side>
      <h6 :class="compColor">{{ dayTotal }}</h6>
    </q-item-section>
  </q-item>

  <q-dialog
    v-model="dialog"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <edit-day-dialog :dayNo="day.id" />
  </q-dialog>
</template>

<script>
import Utilities from "../utilities.js";
import EditDayDialog from "../components/EditDayDialog.vue";
import { ref } from "vue";

export default {
  name: "DayListItem",
  props: ["day"],
  components: {
    EditDayDialog,
  },
  computed: {
    currentDate() {
      var date = new Date(this.$store.getters.settings.startDate).valueOf();
      date = date + (this.day.id - 1) * 1000 * 24 * 60 * 60;
      //console.log("this.day :>> ", this.day.id);
      //console.log("date :>> ", date);
      // return new Date(date).toLocaleDateString();
      return Utilities.formatDate(date);
    },

    sundayClass() {
      var date = new Date(this.$store.getters.settings.startDate).valueOf();
      date = date + (this.day.id - 1) * 1000 * 24 * 60 * 60;
      return new Date(date).getDay() === 0 ? "sunday" : "";
    },

    dayTotal() {
      var total = 0;
      this.day.reps.forEach((rep) => {
        total += rep;
      });
      return total;
    },

    compColor() {
      if (this.dayTotal > 0) {
        return "text-right q-ma-none text-positive";
      } else {
        return "text-right q-ma-none text-negative";
      }
    },
  },
  setup() {
    return {
      dialog: ref(false),
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
ion-item {
  --min-height: 0px;
}
.no-padding {
  padding: 0;
}
ion-col {
  padding: 0;
}
ion-col * {
  margin-top: 10px;
  margin-bottom: 10px;
}

.sunday {
  border-bottom: 1px solid $secondary;
}
</style>
