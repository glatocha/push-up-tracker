<template>
  <q-page>
    <Header text="PUSH-UP TRACKER" />
    <total-card :number="totalCount" />
    <daily-card :dayNo="dayNo" today="true" />
    <statistics-card />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import TotalCard from "../components/TotalCard.vue";
import DailyCard from "../components/DailyCard.vue";
import StatisticsCard from "../components/StatisticsCard.vue";

export default defineComponent({
  name: "Main",
  components: {
    Header,
    TotalCard,
    DailyCard,
    StatisticsCard,
  },
  computed: {
    totalCount() {
      return this.$store.getters.totalCount;
    },
    date() {
      return new Date();
    },
    dayNo() {
      return (
        1 +
        Math.floor(
          (
            this.date.valueOf() -
            new Date(this.$store.getters.settings.startDate).valueOf()
          ).valueOf() /
            (1000 * 60 * 60 * 24)
        )
      );
    },
  },
  mounted() {
    console.log("Main page mounted");
    this.$store.dispatch("readStorage");
    console.log("Store initialized");
  },
});
</script>

