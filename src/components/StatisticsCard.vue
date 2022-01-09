<template>
  <q-card class="q-ma-sm">
    <q-card-section>
      <div class="text-subtitle2">STATISTICS</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="row">
        <div class="col text-center">
          <div class="catTitle">Average per day:</div>
          <div :class="avgColor">{{ averagePerDay }}</div>
        </div>
        <div class="col text-center">
          <div class="catTitle">Avg to meet target:</div>
          <div class="value text-grey-9">{{ averageNeeded }}</div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

      
<script>
export default {
  name: "StatisticsCard",
  components: {},
  computed: {
    averagePerDay() {
      var avg = this.$store.getters.statistics.dailyAverage;
      return avg < 10 ? avg.toFixed(2) : avg.toFixed(0);
    },
    averageNeeded() {
      var avg = this.$store.getters.statistics.requiredAverage;
      return avg < 10 ? avg.toFixed(2) : avg.toFixed(0);
    },
    avgColor() {
      const avgDay = this.$store.getters.statistics.dailyAverage;
      const reqAvg = this.$store.getters.statistics.requiredAverage;
      if (avgDay < 0.5 * reqAvg) {
        return "value text-negative";
      } else if (avgDay < reqAvg) {
        return "value text-warning";
      } else {
        return "value text-positive";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.text-subtitle2 {
  color: $grey-6;
}

.catTitle {
  font-size: 100%;
}

.value {
  font-size: 200%;
}
</style>