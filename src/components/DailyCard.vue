<template>
  <q-card class="q-ma-sm">
    <q-card-section>
      <div class="text-subtitle2" v-show="today">TODAY</div>
      <div class="grey text-h6">Day {{ dayNo }} - {{ date }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="main-number">
        {{ todaysCount }}
      </div>
      <p class="q-ma-none q-mt-xs text-grey-7" v-show="today">
        Reps: {{ repsString }}
      </p>
      <reps-list
        v-show="!today"
        :dayData="this.$store.getters.dayData(dayNo)"
      />

      <q-btn
        v-show="today"
        @click.prevent="dialog = true"
        color="secondary"
        class="full-width"
        label="ADD"
      />

      <q-dialog
        v-model="dialog"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <add-value @add-value="addToTodays" />
      </q-dialog>
    </q-card-section>
  </q-card>
</template>

      
<script>
import Utilities from "../utilities";
import { ref } from "vue";
import AddValue from "../components/AddValue.vue";
import RepsList from "../components/RepsList.vue";

// import AddDailyModal from "../modals/AddDailyModal.vue";
// import RepsList from "./RepsList.vue";

export default {
  name: "DailyCard",
  components: {
    RepsList,
    AddValue,
  },
  props: {
    dayNo: Number,
    today: {
      today: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      dialog: ref(false),
    };
  },
  data() {
    return {
      addingAmount: 30,
    };
  },
  computed: {
    todaysCount() {
      return this.$store.getters.dayTotal(this.dayNo);
    },
    repsString() {
      var repString = "";
      this.$store.getters.dayData(this.dayNo).reps.forEach((rep) => {
        repString += rep + ", ";
      });
      return repString;
    },
    date() {
      var date = new Date(this.$store.getters.settings.startDate).valueOf();
      date = date + (this.dayNo - 1) * 1000 * 24 * 60 * 60;
      return Utilities.formatDate(date);
    },
  },
  methods: {
    addToTodays(amount) {
      console.log("amount :>> ", amount);
      if (amount > 0) {
        this.$store.dispatch("addValue", {
          dayNo: this.dayNo,
          value: amount,
        });
        this.dialog = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.text-subtitle2 {
  color: $grey-6;
}

.main-number {
  color: $secondary;
  padding-top: 0px;
  padding-bottom: 0px;
  text-align: center;
  background: $grey-3;
  border-radius: 25px;
  font-size: 400%;
  line-height: 1.2;
}
</style>