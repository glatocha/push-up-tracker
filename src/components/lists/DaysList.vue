<template>
  <q-list bordered separator>
    <day-list-item
      v-for="(day, index) in progressData"
      :key="getDayItem(index).id"
      :day="getDayItem(index)"
    ></day-list-item>
  </q-list>
</template>

<script>
import DayListItem from "./DayListItem.vue";

export default {
  name: "DaysList",
  props: ["progressData"],
  components: {
    DayListItem,
  },
  methods: {
    getDayItem(index) {
      return this.$store.getters.dayData(index + 1);
    },
  },
};
</script>
