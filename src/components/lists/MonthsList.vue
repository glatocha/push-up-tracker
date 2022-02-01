<template>
  <q-list bordered separator>
    <month-list-item
      v-for="(month, index) in monthsList"
      :key="getMonthItem(index).id"
      :month="month"
    ></month-list-item>
  </q-list>
</template>

<script>
import MonthListItem from "./MonthListItem.vue";
import Utilities from "../../utilities.js";

export default {
  name: "MonthsList",
  props: ["progressData"],
  components: {
    MonthListItem,
  },
  computed: {
    monthsList() {
      const monthsList = [];
      var monthNr = 1; //for startDay
      var monthTotal = 0;
      const startDate = new Date(this.$store.getters.settings.startDate);
      var monthString;
      this.progressData.forEach((day, index) => {
        var date = new Date(startDate.valueOf() + index * 1000 * 24 * 60 * 60);
        //if is first
        if (date.getDate() === 1 && index !== 0) {
          monthsList.push({
            id: monthNr,
            month: monthString,
            total: monthTotal,
          });
          monthNr++;
          monthTotal = 0;
        }
        //if data for that day exists add to the summary value
        if (day !== null) monthTotal += day.total;
        monthString =
          Utilities.monthNameShort(date.getMonth()) + " " + date.getFullYear();
      });
      //last month push
      monthsList.push({
        id: monthNr,
        month: monthString,
        total: monthTotal,
      });
      return monthsList;
    },
  },
  methods: {
    getMonthItem(index) {
      return this.monthsList[index];
    },
  },
};
</script>
