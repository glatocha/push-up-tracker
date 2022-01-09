<template>
  <q-list bordered separator>
    <day-list-item
      v-for="(day, index) in progressData"
      :key="this.$store.getters.dayData(index + 1).id"
      :day="this.$store.getters.dayData(index + 1)"
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
};
</script>