<template>
  <q-list bordered separator>
    <week-list-item
      v-for="(day, index) in weeksList"
      :key="getWeekItem(index).id"
      :week="getWeekItem(index)"
    ></week-list-item>
  </q-list>
</template>

<script>
import WeekListItem from "./WeekListItem.vue";

export default {
  name: "WeeksList",
  props: ["progressData"],
  components: {
    WeekListItem,
  },
  computed: {
    weeksList() {
      const weeksList = [];
      var weekNr = 1; //for startDay
      var weekTotal = 0;
      const startDate = new Date(this.$store.getters.settings.startDate);
      this.progressData.forEach((day, index) => {
        var date = new Date(startDate.valueOf() + index * 1000 * 24 * 60 * 60);
        //if is Monday
        if (date.getDay() === 1 && index !== 0) {
          weeksList.push({
            id: weekNr,
            total: weekTotal,
          });
          weekNr++;
          weekTotal = 0;
        }
        //if data for that day exists add to the summary value
        if (day !== null) weekTotal += day.total;
      });
      //last week push
      weeksList.push({
        id: weekNr,
        total: weekTotal,
      });
      return weeksList;
    },
  },
  methods: {
    getWeekItem(index) {
      return this.weeksList[index];
    },
  },
};
</script>
